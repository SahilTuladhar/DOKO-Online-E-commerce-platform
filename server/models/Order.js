const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'users', 
        
    },
    productItems:[
    {id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'products', 
        required:true
    },
    seller :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        required:true
    },}
    ]
});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order