const Group = require('../model/group')
const GroupUser = require('../model/groupuser')
const User = require('../model/user')

exports.createGroup = async(req,res,next)=>{
    let name = req.body.name
    let userid = req.user.id
    let groupmember = req.body.groupmember
    
    try{
        let newgroup = await Group.create({name:name , admin:userid})
        console.log(newgroup.id,'mewgrouppppp')
            // if(!groupmember.includes(userid.toString())){
            //     groupmember.push(userid.toString())
            // }

            groupmember.forEach(async (item)=>{
                await GroupUser.create({
                    groupId:newgroup.id,
                    userId:item
                })
            })
        
        return  res.status(200).json('Group has been Created')
         }
         catch(err){
        res.status(500).json(err)}
    }

exports.getGroupData = async(req,res,next)=>{
    try{
    let userid = req.user.id
    let groupInfo = await GroupUser.findAll({where: { userId: userid }})
    let data = []
    for(let i=0;i<groupInfo.length;i++){
        let group = await Group.findByPk(groupInfo[i].groupId)
        data.push(group);
    }
    
    res.status(200).json(data)

}catch(err){
res.status(500).json(err)
}
}

exports.deleteGroup = async(req,res,next)=>{
    let groupid = req.params.id
    let userid = req.user.id
    if(userid){
    try{
        let result = await Group.findOne({id:groupid})
        if(result.admin == userid){
           await Group.destroy({where:{id:groupid}})
           res.status(200).json('Group Has Been Deleted !!!')
        }else{
            res.status(400).json('Unauthorized operation!!!!!')
        }
    }catch(err){
        res.status(500).json(err)
    }
}else{
    res.status(400).json('Unauthorized access')
}
}

