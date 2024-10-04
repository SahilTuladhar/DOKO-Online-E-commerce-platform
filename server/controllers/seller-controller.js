const express = require("express");
const Cookies = require('js-cookie')
const Product = require("../models/Product");
const Seller = require('../models/Seller')
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const auth = require("./auth-controller");
const BuyerBid = require('../models/BuyerBid')
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid').v4
const sessions ={}
const Order = require('../models/Order')
const mongoose = require('mongoose');


//register seller
const register = async (req,res)=>{
    const user = new Seller(req.body)
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
const login = async (req, res, next) => {
    try {
      const user = await Seller.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
  
      res.set('Set-Cookie',`auth_token=${token}`)
      res.send({ userId: user.id });
     
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };





const product = async(req,res)=>{
    
   
    const seller = req.seller
    const sellerName = seller.name
    const sellerId = seller._id
    
    try {
        
        const products= await Product.find({ seller: sellerId}).populate({
            path:'seller',
             select: 'name email '
        });
       
        res.send({products , sellerName});
      } catch (error) {
        res.status(500).send(error);
      }
}

const addproduct = async(req,res)=>{
    const Seller = req.seller
    const sellerId = Seller.id
    console.log("seller:", sellerId)
    
    const product = new Product({
      name:req.body.name,
      description : req.body.description, 
      price:req.body.price,
      image :req.body.image,
      quantity:req.body.quantity,
      bid:req.body.bid,
      category:req.body.category,
      seller: sellerId
    });
  
    
  
    try {
      await product.save();
      res.status(201).send(product);
     
    } catch(err) {
      res.status(400).send(err);
    }
  };

  const updateproduct = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "description", "price", "image", "quantity", "category", "bid"];
    const invalidUpdates = updates.filter(update => !allowedUpdates.includes(update));
  
    if (invalidUpdates.length > 0) {
      return res.status(400).send({ error: "Invalid updates" });
    }
  
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!product) {
        return res.status(404).send();
      }
  
      res.send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  


    const deleteproduct = async (req,res)=>{
        try {
            const product = await Product.findByIdAndDelete(req.params.id)
            if(!product){
                return res.status(400).send()
            }
            res.send(product)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    

    const productdetails = async(req,res)=>{
        try {
           const product = await Product.findById(req.params.id) 
           res.send(product)
        } catch (error) {
            console.log(err)
        }
    }

    const logout = async(req,res)=>{
            try {
                res.clearCookie('auth_token' ,  { path: '/seller' })
               res.end()
                console.log('Logged Out')
            } catch (error) {
                console.log(error)
            }
     
    }


const offers = async (req,res)=>{
  try {
    const Seller = req.seller
    const sellerId = Seller.id
    const offers= await BuyerBid.find({ seller: sellerId , bidAccept : undefined}).populate({
      path:'product',
       select: 'name price bid image'
  });
 //console.log(offers)
  res.send({offers  });
  } catch (error) {
    
  }
}

const bidAccept = async(req,res)=>{
  const updates = Object.keys(req.body);
  const allowedUpdates = ["bidAccept"];
  const isValidOperation = updates.every((update) =>
  allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
  return res.status(400).send({ error: "Invalid updates" });
  }
  try {
  const product = await BuyerBid.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true,
  });
  if (!product) {
  return res.status(404).send();
  }
  console.log('bid accepted')
  res.send(product);
  } catch (error) {
  res.status(400).send(error);
  }
  }

  const updatePassword = async(req,res)=>{
    const seller = req.seller
    const sellerId = seller.id
    const newPassword = req.body.newPassword
    const hash =  bcrypt.hashSync(newPassword, 8)
    try {
        const seller = await Seller.findByIdAndUpdate(sellerId,{
            $set:{password: hash}
        })
        console.log('password changed')
    } catch (error) {
        console.log(error)
    }
  }

  const updateprofile = async (req, res) => {
    const seller = req.seller
    const sellerId = seller.id
    const updates = Object.keys(req.body);
    console.log('update', req.body)
    const allowedUpdates = ["name",  "phonenumber"];
    const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
    }
    try {
    const updatedseller = await Seller.findByIdAndUpdate(sellerId, req.body, {
    new: true,
    runValidators: true,
    });
    if (!updatedseller) {
    return res.status(404).send();
    }
    window.location.reload();
    } catch (error) {
    res.status(400).send(error);
    }
    }


   



// Send the data to the frontend

const selleranalytics = async(req,res)=>{

      const seller = req.seller
      const sellerId = seller._id 
      try {
        const totalSales = await Order.aggregate([
          {
            $match: {
              'productItems.seller': mongoose.Types.ObjectId(sellerId)
            }
          },
          {
            $unwind: '$productItems'
          },
          {
            $group: {
              _id: null,
              totalSales: { $sum: { $multiply: ['$productItems.price', '$productItems.quantity'] } }
            }
          }
        ]);
    
        const salesByCategory = await Order.aggregate([
          {
            $match: {
              'productItems.seller': mongoose.Types.ObjectId(sellerId)
            }
          },
          {
            $unwind: '$productItems'
          },
          {
            $lookup: {
              from: 'products',
              localField: 'productItems.id',
              foreignField: '_id',
              as: 'product'
            }
          },
          {
            $unwind: '$product'
          },
          {
            $group: {
              _id: '$product.category',
              categorySales: { $sum: { $multiply: ['$productItems.price', '$productItems.quantity'] } }
            }
          }
        ]);
    
        res.send( {
          totalSales: totalSales[0]?.totalSales || 0,
          salesByCategory
        })
        console.log('a',totalSales)
        console.log('b',salesByCategory)
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  


const sellertableanalytics = async(req,res)=>{

  try {
    const Seller = req.seller
    const sellerId = Seller.id
    const offers= await BuyerBid.find({ seller: sellerId, bidAccept:true}).populate({
      path:'product',
       select: 'name price bid image category'
  });

   // console.log(offers)
    res.send({offers  });
  

  } catch (error) {
    
  }
}
    

module.exports = {register ,login ,  updateprofile ,product , addproduct, updateproduct, deleteproduct , productdetails , selleranalytics, updatePassword,logout , offers , sellertableanalytics,bidAccept}