const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema ({
    name : { 
        type : String, 
        required : true,
    },
    description : {
        type : String, 
        required :true,
    },
    price : { 
        type : Number, 
        required: true, 
    },
    seller :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Seller",
    },
    image: {
        
        type:String, 
        required: true,
    } , 
    quantity:{
        type: Number,
        required: true,
    }, 
    bid:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }

})

const Product = mongoose.model ("Product", productSchema)

module.exports = Product;