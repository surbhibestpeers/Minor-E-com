const router = require("express").Router();
const Cart = require("../models/cart");
const upload = require("../middleware/upload");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/add-cart", upload.single("file"), async (request, response) => {
  const cart = request.body;
  const newCart = new Cart(cart);

  try {
    await newCart.save();
    response.status(201).json(newCart);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.get("/get-cart", async (request, response) => {
 
  try {
    const cart = await Cart.find({});

    response.status(200).json(cart);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

router.delete("/remove-cart/:id", async (request, response) => {
  try {
    await Cart.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

router.put("/update-cart/:id", async (request, response) => {
  const cart = request.body;
  const newCart = new Cart(cart);
  try {    
  await Cart.updateOne({_id:request.params._id},newCart)
  response.status(201).json(newCart)
  } catch (error) {
      response.status(409).json({message: error.message})
  }
})

function varifyToken(req, res, next) {
  let tokens = req.headers["authorization"];

  if (tokens) {
    tokens = tokens.split(" ")[1];

    jwt.verify(tokens, process.env.JWT_KEY, (err, valid) => {
      if (err) {
        res.send({ result: "please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.send({ result: "please add token with header" });
  }
}
module.exports = router;
