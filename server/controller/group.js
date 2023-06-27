const Group = require('../model/group')
const User = require('../model/user')

exports.createGroup = async(req,res,next)=>{
    let name = req.body.name
    
    try{
        let result = await User.findAll({where:{email:req.user.email}})
        console.log(result[0].id)
             await Group.create({name:name ,  createBy:result[0].id})
            return  res.status(200).json('Group has been Created')
        
        
    }catch(err){
        res.status(500).json(err)
    }
    
}

exports.getGroupData = async(req,res,next)=>{

}