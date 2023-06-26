const express = require('express')
const router = express.Router();
const userController = require('../controller/user')

router.post('/register' , userController.registerController)
router.post('/login' ,userController.loginController )

module.exports = router