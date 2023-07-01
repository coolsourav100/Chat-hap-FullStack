const AWS = require('aws-sdk')
const uploadToS3 =async(data , filename)=>{
    try{
    const BUCKET_NAME ='chat-hap';
    const IAM_USER_KEY = process.env.IAM_USER_KEY
    const IAM_USER_SECRET=process.env.IAM_USER_SECRET
  
    let s3bucket = new AWS.S3({
      accessKeyId : IAM_USER_KEY ,
      secretAccessKey : IAM_USER_SECRET,
    })
    
      let params = {
        Bucket :BUCKET_NAME,
        Key : filename , 
        Body : data ,
        ACL : 'public-read'
  
      }
      return new Promise((resolve , reject)=>{
      s3bucket.upload(params ,async(err,s3res)=>{
        if(err){
          console.log(err, 'something went wrong')
          reject(err)
        }else{
          console.log(s3res , 'Success')
            resolve(s3res.Location)
        }
      })})
    
    }catch(err){
      console.log(err)
    }
  }

  module.exports ={
uploadToS3
  }