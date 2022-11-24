const router = require('express').Router();
const {User}= require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require("dotenv").config();

router.post("/",async (req,res) => {
   
    try {
        const {error } = validate(req.body);
        if(error)
        return res.status(400).send({message:error.details[0].message})

        const user = await User.findOne({email:req.body.email})

        if(!user) return res.status(401).send({message:"user not found"})
        else if(user){
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            if(!validPassword ) return res.status(401).send({message:"Invalid Password"})
            else{
                const token = jwt.sign({id: user._id},process.env.JWT_KEY,
                                { expiresIn: "1h"});
                               
                            res.status(200).send({user,token:token, message:'logged in successfully'})}}      
    } catch(e) {
        console.log(e)
           res.status(500).send({message:`Internal server error`})
    }});

    function varifyToken(req,res,next) {
      let tokens = req.headers['Authorization'];
      console.log(tokens)
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
    

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

















































































































































































module.exports = router;