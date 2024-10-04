const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const controls = require( '../controllers/seller-controller')
const Sellerrouter = express.Router()
const auth = require('../controllers/auth-controller')

Sellerrouter.use(cookieParser());

Sellerrouter.post('/signup' , controls.register);
Sellerrouter.get('/product'  ,auth,  controls.product);
Sellerrouter.delete('/product/:id',auth,  controls.deleteproduct)
Sellerrouter.get('/product/:id', controls.productdetails)
Sellerrouter.patch('/product/update/:id',auth,  controls.updateproduct)
Sellerrouter.post('/addproduct',auth,  controls.addproduct);
Sellerrouter.post('/login' , controls.login)
Sellerrouter.post('/logout',controls.logout)
Sellerrouter.get('/offers',auth , controls.offers)
Sellerrouter.patch('/bid/update/:id',auth, controls.bidAccept)
Sellerrouter.patch('/updateprofile',auth, controls.updateprofile)
Sellerrouter.put('/updatepassword',auth,controls.updatePassword)
Sellerrouter.get('/analytics',auth, controls.selleranalytics)
Sellerrouter.get('/tableanalytics', auth, controls.sellertableanalytics)

module.exports = Sellerrouter; 