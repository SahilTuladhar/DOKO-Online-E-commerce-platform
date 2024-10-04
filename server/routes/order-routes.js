const express = require('express')

const controls = require( '../controllers/order-controller')
const OrderRouter = express.Router()
const authBuyer = require("../controllers/authBuyer-controller")

OrderRouter.post('/newOrder',authBuyer ,controls.placeOrder)
OrderRouter.get('/userOrder',authBuyer ,controls.userOrder)
OrderRouter.get('/:id',controls.findOrder)

module.exports = OrderRouter