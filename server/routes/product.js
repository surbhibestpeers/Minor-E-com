const router = require("express").Router();
const  Product  = require("../models/product");
const upload = require("../middleware/upload");
const jwt = require('jsonwebtoken');
require("dotenv").config();

// export const addproduct=async(request, response)=> {
  router.post("/add",upload.single("file"),async(request, response)=> {
    
    const product = request.body;
    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        response.status(201).json(newProduct);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
})

// export const getProduct=async(request, response)=> {
   router.get("/all",varifyToken,async(request, response)=> {
    // console.log("headeers",request.headers)
  try {
       const products = await Product.find({})
    //console.log(products)
       response.status(200).json(products)
  } catch (error) {
    response.status(404).json({message: error.message})
  }
})

function varifyToken(req,res,next) {
  let tokens = req.headers['authorization'];
 
  
  if(tokens){
     tokens = tokens.split(' ')[1]
    //  console.log("jjjjjj",tokens)
    jwt.verify(tokens,process.env.JWT_KEY,(err,valid) => {
        if(err) {
            res.send({result:"please provide valid token"})
          
        } else {
            next()
        }
    })
  } else {
    res.send({result: "please add token with header"})
  }
}
module.exports = router;