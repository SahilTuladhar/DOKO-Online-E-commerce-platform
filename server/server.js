require('dotenv').config({path: "./vars/.env"})
const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer")
const path = require("path")


app.use(cors(
    {
        credentials: true,
         origin:'http://localhost:3000',
        
        },
    
));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,"public/images");
    },
    filename: (req,file,cb) => {
        cb(null, req.body.name)
    }

});

const upload = multer({storage});
app.post("/upload", upload.single("file") , (req,res) =>{
    try{
       return res.status(200).json("File uploaded successfully")
    }catch(err){
        console.log(err)
    }
})

const router = require( './routes/user-routes')
const Productrouter = require( './routes/product-routes')
const Sellerrouter = require('./routes/seller-routes')
const Userrouter = require('./routes/user-routes')
const Cartrouter = require('./routes/cart-routes')
const Orderrouter = require('./routes/order-routes')
const Buyerbidrouter = require("./routes/buyerbid-routes")

app.use(router)
app.use('/product',Productrouter)
app.use('/seller',Sellerrouter)
app.use('/user',Userrouter)
app.use('/cart',Cartrouter)
app.use('/order',Orderrouter)
app.use('/buyerbid', Buyerbidrouter)


mongoose.connect(
    process.env.conn_str,
    { 
  
    useNewUrlParser: true, 
    useUnifiedTopology: true ,

    },(err) => {
    if (err) {
    console.log(err);
    } else {
    console.log("mongodb is connected");
}});





mongoose.connection.once('open',() => { 
    app.emit('ready'); 
});

app.on('ready', function() { 
    app.listen(port, () => {
    console.log(`Server started at port ${port}`); 
  });
});

