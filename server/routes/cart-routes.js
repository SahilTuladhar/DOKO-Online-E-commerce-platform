const express = require('express')
const app = express()

const controls = require( '../controllers/cart-controller')
const CartRouter = express.Router()
const auth = require('../controllers/auth-controller')
const authBuyer = require('../controllers/authBuyer-controller')


CartRouter.post('/addtocart' , controls.addtocart)


module.exports = CartRouter; 