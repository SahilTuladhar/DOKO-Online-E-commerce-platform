const express = require('express')
const app = express()

const controls = require( '../controllers/product-controller')
const authBuyer = require('../controllers/authBuyer-controller')
const Productrouter = express.Router()


Productrouter.get('/getallproduct', authBuyer, controls.getallproduct)
Productrouter.get('/:searchProduct' ,authBuyer, controls.getOneproduct)

module.exports = Productrouter; 