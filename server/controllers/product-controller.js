const express = require("express");
const Product = require("../models/Product");
const User = require('../models/User')
const escapeRegExp = require('lodash/escapeRegExp');


const getallproduct = async (req,res)=>{
    const user = req.user
    const userName = user.name
    const userId = user._id
    try{
        const products = await Product.find().populate({
            path:'seller',
             select: ' id name email '
        })
        res.send({products, userName})
    }
    catch(err){
        res.status(500).send(err)
    }
}

const getOneproduct = async(req,res)=>{
    try {
        const query = req.params.searchProduct
        const escapedQuery = escapeRegExp(query).replace(/\s/g, '\\s*');
  
        const product = await Product.find({ name: { $regex: escapedQuery, $options: 'i' } }).populate({
            path:'seller',
             select: 'name email '
        })
       
        if(!product){
            return res.status(404).send()
        }
    
   res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
    

}





module.exports = {getallproduct , getOneproduct  }




