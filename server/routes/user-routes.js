const express = require('express')
const app = express()
const auth = require('../controllers/authBuyer-controller')
const controls = require( '../controllers/user-controller')
const Userrouter = express.Router()

Userrouter.post('/signup',controls.register)
Userrouter.post('/login' , controls.login)
Userrouter.get('/allproduct',auth, controls.getallproduct)
Userrouter.post('/logout',controls.logout)
Userrouter.put('/updatepassword',auth,controls.updatePassword)
Userrouter.patch('/updateprofile',auth, controls.updateprofile)
Userrouter.get('/details',auth,controls.userdetails)

module.exports = Userrouter; 