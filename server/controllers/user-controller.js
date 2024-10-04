const express = require("express");
const User = require("../models/User");
const Cookies = require('js-cookie')
const jwt = require("jsonwebtoken");
const Product = require("../models/Product");
const bcrypt = require('bcrypt')
//Register an User
const register = async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save();
        console.log('User registered')
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})

    }catch(err){
        console.log(err)
        res.status(400).send(err)
        
    }

}

const updatePassword = async(req,res)=>{
    const Buyer = req.user
    const buyerId = Buyer.id
    const newPassword = req.body.newPassword
    const hash =  bcrypt.hashSync(newPassword, 8)
    try {
        const user = await User.findByIdAndUpdate(buyerId,{
            $set:{password: hash}
        })
        console.log('password changed')
    } catch (error) {
        console.log(error)
    }
   
 
  
}

const updateprofile = async (req, res) => {
    const Buyer = req.user
    const buyerId = Buyer.id
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "address" , "phonenumber"];
    const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
    }
    try {
    const user = await User.findByIdAndUpdate(buyerId, req.body, {
    new: true,
    runValidators: true,
    });
    if (!user) {
    return res.status(404).send();
    }
    
    } catch (error) {
    res.status(400).send(error);
    }
    }



// Login a User

const login = async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        
        const token = await user.generateAuthToken()
    
     //  res.set('Set-Cookie',`buyer_token=${token}`)
     res.cookie('buyer_token', token , {
        httpOnly: true,
        secure:false,
        maxage:60000000
     })
        res.send({ userId: user.id });
        
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}



const logout = async(req,res)=>{
    try {
        res.clearCookie('buyer_token' ,  { path: '/' })
       res.end()
        console.log('Logged Out')
    } catch (error) {
        console.log(error)
    }

}



const getallproduct = async (req,res)=>{
    try{
        const products = await Product.find().populate({
            path:'seller',
             select: 'name email '
        })
        res.send(products)
    }
    catch(err){
        res.status(500).send(err)
    }
}


const userdetails = async(req,res)=>{
    try {
        const user = req.user
        const userId = user.id
        const  userdetail= await User.findById(userId)
        const userdetails = {
            address :userdetail.address,
            phonenumber: userdetail.phonenumber
        }
       // console.log(userdetails)
        res.send(userdetails)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {register, login ,userdetails, getallproduct , logout , updatePassword , updateprofile}