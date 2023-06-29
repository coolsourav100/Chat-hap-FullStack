const express = require('express')
const router = express.Router();
const groupController = require('../controller/group')
const getUserMiddleWare = require('../util/getUserMiddleWare')

router.post('/create', getUserMiddleWare.getUserEmail,groupController.createGroup)
router.get('/groupdata' ,getUserMiddleWare.getUserEmail,groupController.getGroupData)
router.delete('/deletegroup/:id' , getUserMiddleWare.getUserEmail,groupController.deleteGroup)


module.exports = router