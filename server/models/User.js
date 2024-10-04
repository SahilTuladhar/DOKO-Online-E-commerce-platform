const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
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
        type : Number,
        required : true,
    } , 
    address :{
        type: String,
        required :true
    }
 
});

userSchema.pre("save", async function(next){
        const user = this;
        if(user.isModified("password")){
            user.password = await bcrypt.hash (user.password, 8);
        }
        next();
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid login credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid login credentials");
    }
    return user;
  };

userSchema.methods.generateAuthToken = async function(){
    const user = this; 
    const token  = jwt.sign ({_id: user._id.toString() }, process.env.secret_key)
    return token;
}

const User = mongoose.model ('User', userSchema);

module.exports = User;
