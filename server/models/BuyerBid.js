const mongoose = require('mongoose');

const BuyerBidSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        
    },
  
        
    product: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product', 
                required:true
    },
            
    bidAmount:{
                type:Number,
                required:true
    }, 
    seller :{
                type :mongoose.Schema.Types.ObjectId,
                ref:"Seller", 
              required:true
    },
    price:{
        type:Number,
        required: true
    } , 

    bidAccept: {
        type:Boolean
    }, 
    timestamp:{
        type:Date,
        default:Date.now

    }

    
    
})

const BuyerBid = mongoose.model('BuyerBid',BuyerBidSchema)
module.exports = BuyerBid