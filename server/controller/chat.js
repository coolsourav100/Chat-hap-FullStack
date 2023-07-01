const Chat = require('../model/chat');
const Group = require('../model/group');
const User = require('../model/user')
const { Op } = require("sequelize");
const multer = require('multer');
const s3services = require('../services/s3services');

const upload = multer();

exports.sendController = async(req,res,next)=>{
    let sender = req.params.sender
    let userid = req.user.id
    // console.log(sender,'senderererererr')
    
    try{
        let userData = await User.findAll({where:{id:userid}})
        console.log(userData[0].name,'+++++++++++++++++++>')
        await Chat.create({
            message:req.body.chat,
             userId:userid,name:userData[0].name,
             senderId:sender
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
    let lastmessage =req.params.lastsms
    let sender = req.params.sender
    console.log(sender,'hajaghsjagsjaj')
    try{
        if(userid){
            // let result =await Chat.findAll({where:{ id:{[Op.gt]:+lastmessage}}})
           let result = await Chat.findAll({
                // where: {
                 
                    //  chatgroupId: null ,
                    // userId: userid ,
                    // senderId:sender,
                  
                // }
                where: {
                    chatgroupId : null,
                    userId: {
                        [Op.gt]: req.query.lastMessage
                    }
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
        let userData = await User.findAll({where:{id:userid}})
        await Chat.create({
            message : req.body.chat,
            name:groupName,
            userId:userid,
            chatgroupId :groupid,
            senderId:userData[0].name
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
    console.log(lastmessage,'last sams')
    try{
        let groupsms = await Chat.findAll({
            
            where: {
                
                  chatgroupId: groupid ,
                  
              },
            //   limit:10
        })
        res.status(200).json({data:groupsms,gid:groupid})
    }catch(err){
        res.status(500).json(err)
    }
}

exports.s3bucketHandler = async (req, res, next) => {
    let groupid = req.params.id;
    let groupName = req.params.name;
    let userid = req.user.id;
    let file = req.file;
    console.log(file, "======================>");
  
    if (userid) {
      try {
        const filename = `pic/${new Date()}.jpg`;
        const fileurl = await s3services.uploadToS3(file.buffer, filename);
        console.log(fileurl, 'oioioioiiiioioiioi');
        
        let userData = await User.findAll({ where: { id: userid } });
        
        await Chat.create({
          message: fileurl,
          name: groupName,
          userId: userid,
          chatgroupId: groupid,
          senderId: userData[0].name
        });
        
        res.status(200).json('File Uploaded');
        
      } catch (err) {
        res.status(400).json('failed to upload');
      }
      
    } else {
      res.status(400).json('Unauthorized Access');
    }
  };