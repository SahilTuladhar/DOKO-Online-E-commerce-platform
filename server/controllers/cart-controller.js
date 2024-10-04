const express = require("express");



const Cart = require("../models/Cart");

const addtocart= async(req,res)=>{
    try{
       const cartData =  await Cart.findOne({user:req.body.user})
       if(cartData){ 
        //if cart already exists updating cart by quantity
        const product = req.body.cartItems.product
        const isItemAdded = cartData.cartItems.find(c=> c.product == product)

        if(isItemAdded){
            const cartdata = await Cart.findOneAndUpdate({user: req.body.user, "cartItems.product":product},{
                "$set":{
                    "cartItems.$": {
                        ...req.body.cartItems,
                        quantity: isItemAdded.quantity + req.body.cartItems.quantity
                    }
                }
            });
           return res.status(401).send(cartdata)


        }else{
            const cartdata = await Cart.findOneAndUpdate({user: req.body.user},{
                "$push":{
                    "cartItems": req.body.cartItems
                }
            });
           return res.status(401).send(cartdata)

        }
        
        
       }
       else{
        const cart= new Cart({
            user: req.body.user,
            
            cartItems: [req.body.cartItems]
        });
        try{  
            const cartData = await cart.save()
            return res.status(401).send(cartData)
            
        }catch(err){
            console.log(err);
            res.status(400).send(err)
        }

       }
    }
       catch(err){
        console.log(err);
        res.status(400).send(err)
    }
      
    
}

module.exports ={addtocart}