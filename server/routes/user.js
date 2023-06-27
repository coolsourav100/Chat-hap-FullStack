const express = require('express')
const router = express.Router();
const userController = require('../controller/user')
const getUserMiddleWare = require('../util/getUserMiddleWare')

router.post('/register' , userController.registerController)
router.post('/login' ,userController.loginController )
router.get('/allmember' , getUserMiddleWare.getUserEmail , userController.allmemberController)

module.exports = router