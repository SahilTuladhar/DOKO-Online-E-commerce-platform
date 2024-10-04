const express = require('express')

const controls = require("../controllers/buyerbid-controller")
const BuyerbidRouter = express.Router();
const authBuyer = require("../controllers/authBuyer-controller")

BuyerbidRouter.post("/addbid",authBuyer, controls.addBid)
BuyerbidRouter.get("/userbids",authBuyer, controls.userBid)

module.exports = BuyerbidRouter