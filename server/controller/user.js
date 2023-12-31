const User = require('../model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.registerController = async(req,res,next)=>{
    try{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
       let result=await User.findAll({where:{
            email:email
        }})
    
    if(!result.length>0){
    bcrypt.hash(password , saltRounds,async(err,hash)=>{
        if(!err){
    await User.create({name:name,email:email,password:hash}).then(()=>{
    res.status(200).json('User Created')
    }).catch(err=>{
    console.log(err)
    })}})
    }else{
        res.status(400).json('User Already Exists')
    }}
    catch(err){
    res.status(500).json(err)
    }}

    
    exports.loginController=async(req,res,next)=>{
        
        let email = req.body.email
        let password = req.body.password
        try{
            const result =  await User.findAll({where:{email:email}})
            if(result.length>0){
               let jwttokon = jwt.sign({id:result[0].id},process.env.JWT_KEY)
            let comparePassword = result[0].password
            bcrypt.compare(password , comparePassword, async(err,hashResult)=>{
                if(!err){
                if(hashResult==true){
                    res.status(200).json({message:'User Logged in successfully !!' , token:jwttokon ,username:result[0].name , userid:result[0].id})
                }else{
                    res.status(401).json('User not Authorized')
                }}else{
                    console.log(err)
                }
            })
        }else{
            res.status(404).json('User not Found')
        }

        }catch(err){

        }
    }

    exports.allmemberController = async(req,res,next)=>{
        let useremail = req.user.email 
        try{
             let result =  await User.findAll({attributes: ['name', 'id']})
               res.status(200).json(result)
        }catch(err){
            res.status(500).json(err)
        }
    }