const Chat = require('../model/chat')
const User = require('../model/user')

exports.sendController = async(req,res,next)=>{
    let uemail = req.useremail
    console.log(req.body)
    try{
        let userData = await User.findAll({where:{email:uemail}})
        await Chat.create({message:req.body.chat , userId:userData[0].id}).then(result=>{
            res.status(200).json('send')
        }).catch(err=>{
            throw new Error(err)
        })

    }catch(err){
        res.status(500).json(err)
    }
}