const express = require('express')
const router = express.Router()
const chatController = require('../controller/chat')
const getUserMiddleWare = require('../util/getUserMiddleWare')

router.post('/send' ,getUserMiddleWare.getUserEmail, chatController.sendController)
router.get('/allmassages' , getUserMiddleWare.getUserEmail, chatController.allmassages)

module.exports = router