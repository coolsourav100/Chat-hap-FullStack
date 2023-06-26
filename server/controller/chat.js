const Chat = require('../model/chat')
const User = require('../model/user')

exports.sendController = async(req,res,next)=>{
    let uemail = req.useremail
    console.log(req.body)
    try{
        let userData = await User.findAll({where:{email:uemail}})
        await Chat.create({message:req.body.chat , userId:userData[0].id ,name:userData[0].name}).then(result=>{
            res.status(200).json('send')
        }).catch(err=>{
            throw new Error(err)
        })

    }catch(err){
        res.status(500).json(err)
    }
}

exports.allmassages = async(req,res , next)=>{
    let useremail = req.useremail 
    try{
        if(useremail){
        let result =await Chat.findAll()
        res.status(200).send(result)
        }else{
            res.status(400).json('Unauthorized Access')
        }
    }catch(err){
        res.status(500).json(err)
    }
}