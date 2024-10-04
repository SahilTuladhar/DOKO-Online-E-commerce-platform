const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const sellerSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true, 
    },
    email:{
        type: String, 
        required: true, 
        unique: true,
    },
    password :{
        type: String, 
        required: true,
    },
    phonenumber :{
        type: Number,
        required: true
    }
 
});

sellerSchema.pre("save", async function(next){
        const seller = this;
        if(seller.isModified("password")){
            seller.password = await bcrypt.hash (seller.password, 8);
        }
        next();
})

sellerSchema.statics.findByCredentials = async (email, password) => {
    const seller = await Seller.findOne({ email });
    if (!seller) {
      throw new Error("Invalid login credentials");
    }
    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      throw new Error("Invalid login credentials");
    }
    return seller;
  };

sellerSchema.methods.generateAuthToken = async function(){
    const seller = this; 
    const token  = jwt.sign ({_id: seller._id.toString() }, process.env.secret_key)
   
    return token;
}

const Seller = mongoose.model ('Seller', sellerSchema);

module.exports = Seller;
