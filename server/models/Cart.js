const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'users', 
        required: true
    },
    cartItems:[
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'products', 
            required:true
        },
        quantity:{
            type:Number,
            default:1
        },
        price:{
            type:Number,
            required:true
        },
        
    }
]
});

const Cart = mongoose.model('Cart',cartSchema);
module.exports = Cart
