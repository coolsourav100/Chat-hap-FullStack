const express = require('express')
const router = express.Router()
const chatController = require('../controller/chat')
const getUserMiddleWare = require('../util/getUserMiddleWare')

router.post('/send' ,getUserMiddleWare.getElementById, chatController.sendController)

module.exports = router