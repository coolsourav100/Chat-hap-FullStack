const express = require('express')
const router = express.Router()
const chatController = require('../controller/chat')
const getUserMiddleWare = require('../util/getUserMiddleWare')
const multer = require('multer');
const upload = multer();

router.post('/send/:sender' ,getUserMiddleWare.getUserEmail, chatController.sendController)
router.get('/allmassages/:lastsms/:sender' , getUserMiddleWare.getUserEmail, chatController.allmassages)
router.post('/sendgroupmessage/:id/:name' , getUserMiddleWare.getUserEmail ,chatController.sendGroupMessage)
router.post('/filesendgroupmessage/:id/:name' , getUserMiddleWare.getUserEmail ,upload.single('profileImg'), chatController.s3bucketHandler)
router.get('/getgroupmessage/:id/:lastsms' , getUserMiddleWare.getUserEmail ,chatController.getGroupMessage)

module.exports = router