import React, { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar'
import axios from 'axios';
import api from '../helper/api';

const GroupChat = ({groupData}) => {
    const [chat , setChat] = useState('');
    const [toggle , setToggle] = useState(false)
    const [ message , setMessage] = useState(JSON.parse(localStorage.getItem('mdata')))
    
    

    useEffect(()=>{
    axios.get(`${api}/chat/getgroupmessage/${groupData.id}/${localStorage.getItem('gmid') || 0}` ,{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res)=>{
      if(res.data.data.length){
        console.log(groupData.id == res.data.gid)
        if(res.data.gid != groupData.id){
          localStorage.removeItem('gmdata')}
        localStorage.setItem('gmid' ,res.data.data[res.data.data.length-1].id)
        if(localStorage.getItem('gmdata') !==null){
          let oldmData = localStorage.getItem('gmdata')
          let oldmData1 = JSON.parse(oldmData)
          let arr =[...oldmData1 , ...res.data.data]
          let arr1 = arr.slice(-10)
          localStorage.setItem('gmdata',JSON.stringify(arr1))
          setMessage(JSON.parse(localStorage.getItem('gmdata')))
        }else{
          localStorage.setItem('gmdata',JSON.stringify(res.data.data))
          setMessage(JSON.parse(localStorage.getItem('gmdata')))
        }
      }
    })
    },[toggle,groupData.id])

// console.log(lastmessageid,'yyyyyy')
    const getMin=(time)=>{
      let min1 = new Date().getTime()
      let min2 = new Date(time).getTime()
       return Math.floor((min1 - min2)/60000)
      
    }
   

    const changeHandler =(e)=>{
        e.preventDefault();
        setChat(e.target.value)
    }
    
    const sendChatHandler=async(e)=>{
        try{
let responce = await axios.post(`${api}/chat/sendgroupmessage/${groupData.id}/${groupData.name}`,{chat} ,{ headers: {"Authorization" : localStorage.getItem('token')} })
setToggle(setTimeout(()=>{
  return !toggle
},1000))
          console.log(responce)
        }catch(err){

        }
        setChat('')
    }
    console.log('GroupChat')
  return (
    <div >
        <h3 className="font-weight-bold mb-3 text-center text-secondary text-lg-start">Group Name : {groupData?.name}</h3>
      <div className="overflow-auto col-md-6 col-lg-7 col-xl-8 p-2 m-2" style={{height:'500px',width:'800px'}}>
      <ul className=" list-unstyled">
      {message?.map((item,index)=>{
        let config = genConfig(item.id)
          return (<li className="d-flex justify-content-between mb-4" key={index+1}>
          <div className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config} /><span className='text-primary p-2'>{item.name}</span>
          </div>

            <div className="card">
              
                 <div className="card-body d-flex justify-content-around">
                <p className="display-8 mb-0 text-bold text-dark p-2">
                {item.message}
                
                <span className="text-muted small mb-0 p-2"><i class="bi bi-clock"></i>  {getMin(item.updatedAt)}  Mins</span></p>
              </div>
              <span className="text-info p-1">{item.name}</span>
            </div>
          </li>)})}
         
          
        </ul>

      </div>
      <li className="opacity-100 bg-transparent mb-3">
      <div className="form-group purple-border">
        <textarea className="bg-transparent form form-control " id="textAreaExample2" rows="4" placeholder='Type Your Message....' onChange={changeHandler} value={chat}></textarea>
      </div>
    </li>
    <button type="button" className="btn btn-info btn-rounded float-end mx-4 px-4" onClick={sendChatHandler}>Send</button>
    </div>
    
  )
}

export default GroupChat