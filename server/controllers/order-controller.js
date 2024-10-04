const express = require('express')

const Order = require("../models/Order")

const placeOrder = async(req,res)=>{

        const User = req.user
        const userId = User.id
        console.log("user:", userId)
        
        const newOrder = new Order({
        user : userId,
        productItems:req.body.productItems
    });
    try{  
        const OrderData = await newOrder.save()
        return res.status(201).send(OrderData)
        
    }catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const userOrder = async(req,res)=>{
    const User = req.user
        const userId = User.id
        console.log("user:", userId)
    try{
        const orders = await Order.find({ userId });
        res.send(orders);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

const findOrder = async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id);
        if (order) {
          res.send(order);
        } else {
          res.status(404).send({ message: 'Order Not Found' });
        }
      }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}

module.exports ={placeOrder,userOrder,findOrder}