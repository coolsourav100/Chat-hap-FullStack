const Chat = require('../model/chat');
const Group = require('../model/group');
const User = require('../model/user')
const { Op } = require("sequelize");

exports.sendController = async(req,res,next)=>{
    let groupId = req.params
    let userid = req.user.id
    
    try{
        let userData = await User.findAll({where:{id:userid}})
        console.log(userData[0].name,'+++++++++++++++++++>')
        await Chat.create({
            message:req.body.chat,
             userId:userid,name:userData[0].name,
            }).then(result=>{
            res.status(200).json('send')
        }).catch(err=>{
            throw new Error(err)
        })

    }catch(err){
        res.status(500).json(err)
    }
}

exports.allmassages = async(req,res , next)=>{
    let userid = req.user.id 
    let lastmessage =req.query.lastmessage
    try{
        if(userid){
            // let result =await Chat.findAll({where:{ id:{[Op.gt]:+lastmessage}}})
           let result = await Chat.findAll({
                where: {
                  [Op.and]: [
                    { chatgroupId: null },
                    { userId: userid },
                    {id:{[Op.gt]:+lastmessage}}
                  ]
                }
              })
              console.log(result,'==============================>')
            res.status(200).send({data:result,uid:userid})
        }else{
            res.status(400).json('Unauthorized Access')
        }
    }catch(err){
        res.status(500).json(err)
    }
}

exports.sendGroupMessage = async(req,res,next)=>{
    // console.log(req.params,'paramas')
    let userid = req.user.id 
    let groupid = req.params.id
    let groupName = req.params.name
    try{
        await Chat.create({
            message : req.body.chat,
            name:groupName,
            userId:userid,
            chatgroupId :groupid
        })
        return res.status(200).json('message created')
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.getGroupMessage = async(req,res,next)=>{
    let userid = req.user.id 
    let groupid = req.params.id
    let lastmessage =req.params.lastsms
    try{
        let groupsms = await Chat.findAll({
            
            where: {
                [Op.and]: [
                  { chatgroupId: groupid },
                  { userId: userid },
                  
                ]
              }
        })
        res.status(200).json({data:groupsms,gid:groupid})
    }catch(err){
        res.status(500).json(err)
    }
}