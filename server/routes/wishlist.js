const router = require("express").Router();
const  Wishlist  = require("../models/wishlist");
const upload = require("../middleware/upload");
const jwt = require('jsonwebtoken');
require("dotenv").config();


  router.post("/add-wishlist",upload.single("file"),async(request, response)=> {
    
    const wishlist = request.body;
    const newWishlist = new Wishlist(wishlist);
    
    try {
        await newWishlist.save();
        response.status(201).json(newWishlist);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
})


   router.get("/get-wishlist",async(request, response)=> {
   
  try {
       const wishlist = await Wishlist.find({})
  
       response.status(200).json(wishlist)
  } catch (error) {
    response.status(404).json({message: error.message})
  }
})

router.delete("/remove-wishlist/:id",async(request, response)=> {
  try {
       await Wishlist.deleteOne({_id: request.params.id});
       response.status(200).json({message:'item deleted successfully'})
  }catch (error) {
      response.status(404).json({message: error.message})
  }
})


function varifyToken(req,res,next) {
  let tokens = req.headers['authorization'];
 
  
  if(tokens){
     tokens = tokens.split(' ')[1]
   
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