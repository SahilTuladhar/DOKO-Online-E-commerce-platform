const express = require("express");

const BuyerBid = require("../models/BuyerBid")
const Product = require("../models/Product")

const addBid = async(req,res)=>{
        const User = req.user
        const userId = User.id
        console.log("user:", userId)


        const newBid = new BuyerBid({
            user: userId,
            bidAmount: req.body.bidAmount , 
            product : req.body.product , 
            seller : req.body.seller,
            price : req.body.price
            
        })
        
    try{
        const product = await Product.findById(req.body.product)
        if(product){
        
        if( req.body.bidAmount >= product.bid){
        const bidData = await newBid.save()
        return res.status(201).send(bidData)
        }
        else{
            return res.status(400).send("Bid amount is less for this product")
        }
    }
    else{
        return res.status(404).send("Product doesnt exist")
    }
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}
const userBid = async(req,res)=>{
    try{
        const User = req.user
        const userId = User.id
        console.log("user:", userId)
        const bids = await BuyerBid.find({user:userId}).populate({
            path:'product',
             select: 'name price  image bidAccept'
        }).sort({ timestamp: -1 });
        res.send({bids:bids})
    
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}


module.exports={addBid,userBid}