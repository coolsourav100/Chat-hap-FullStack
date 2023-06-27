const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.getUserEmail =async(req,res,next)=>{
    let token = req.headers['authorization']
    let userData =jwt.verify(token ,process.env.JWT_KEY )
    req.user= userData
    next()
}
