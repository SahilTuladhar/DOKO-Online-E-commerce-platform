const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");
const cookieParser = require('cookie-parser');

const uuidv4 = require('uuid').v4
const sessions ={}


const auth = async (req, res, next) => {
  try {
  
      const authcookie = req.cookies.auth_token
    
     
    if (!authcookie) {
      throw new Error("No token found");
    }
    const decoded = jwt.verify(authcookie, process.env.secret_key);
   
  
    const seller = await Seller.findOne({
      _id: decoded._id,
      "tokens.token": authcookie,
    });
    if (!seller) {
      throw new Error("Seller not found");
    }
   
    req.token = authcookie;
    req.seller = seller;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};



module.exports = auth