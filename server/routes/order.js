const router = require("express").Router();
const Order = require("../models/order");
const upload = require("../middleware/upload");

router.post("/orders", upload.single("file"), async (request, response) => {
  console.log(request.body)
  const newOrder = new Order(request.body);
 
  console.log(newOrder)

  try {
    await newOrder.save();
    response.status(201).json(newOrder);
    
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.get("/getOrders", async (request, response) => {
 
  try {
    const orders = await Order.find({});
    
    response.status(200).json(orders);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

module.exports = router;

