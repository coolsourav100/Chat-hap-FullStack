import React, { useEffect, useRef, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import {io} from 'socket.io-client'
import axios from 'axios';
import api from '../helper/api';

const ENDPOINT = 'http://localhost:4000';
let socket = io(ENDPOINT)

const GroupChat = ({groupData}) => {
    const [chat , setChat] = useState('');
    const [file1 , setFile1] = useState()
    const [toggle , setToggle] = useState(false)
    const [ message , setMessage] = useState(JSON.parse(localStorage.getItem('mdata')))
    
    

    useEffect(()=>{
      (async()=>{ 
      await fetchmessage(groupData)
    })()
    
    },[toggle,groupData.id])

    useEffect(()=>{
      socket.emit('join-room', groupData.id)
      socket.on('receive-message', async (data) => {
        if(groupData.id == data){
          await fetchmessage(groupData)
          setToggle(!toggle)
        }
        
      });
  
    },[])

    async function fetchmessage(groupData){
      await axios.get(`${api}/chat/getgroupmessage/${groupData.id}/${localStorage.getItem('gmid') || 0}` ,{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res)=>{
        if(res.data.data.length){
          // console.log(res,'===============>')
          // console.log(groupData.id == res.data.gid)
          if(res.data.gid != groupData.id){
            localStorage.removeItem('gmdata')
            localStorage.removeItem('gmid')
          }
          localStorage.setItem('gmid' ,res.data.data[res.data.data.length-1].id)
          // if(localStorage.getItem('gmdata') !==null){
            // let oldmData = localStorage.getItem('gmdata')
            // let oldmData1 = JSON.parse(oldmData)
            // let arr =[...oldmData1 , ...res.data.data]
            // let arr1 = arr.slice(-10)
            // localStorage.setItem('gmdata',JSON.stringify(arr1))
            // setMessage(JSON.parse(localStorage.getItem('gmdata')))
          // }else{
            localStorage.setItem('gmdata',JSON.stringify(res.data.data))
            setMessage(JSON.parse(localStorage.getItem('gmdata')))
          // }
        }
      })
    }

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
      if(chat.length<1){
        return window.alert('Please write your message')
      }
        try{
let responce = await axios.post(`${api}/chat/sendgroupmessage/${groupData.id}/${groupData.name}`,{chat} ,{ headers: {"Authorization" : localStorage.getItem('token')} })

socket.emit('send-message',groupData.id)
setToggle(setTimeout(()=>{
  return !toggle
},1000))
          console.log(responce)
        }catch(err){

        }
        setChat('')
    }
    // console.log('GroupChat')
    // console.log(file1)

    const sendMediaHandler = async (e) => {
      e.preventDefault();
      if(file1.length<1){
        return window.alert('Please upload your picture')
      }
      
      const bodyFormData = new FormData();
      bodyFormData.append('profileImg', file1,);
      
      try {
        const response = await axios.post(
          `${api}/chat/filesendgroupmessage/${groupData.id}/${groupData.name}`,
          bodyFormData,
          {
            headers: {
              "Authorization": localStorage.getItem('token'),
              "Content-Type": "multipart/form-data"
            }
          }
        );
        
        if(response.data){
          setTimeout(setToggle(!toggle),1000)
        };
      } catch (error) {
        console.log(error);
      }
      setFile1('')
    }
  return (
    <div >
        <h3 className="font-weight-bold mb-3 text-center text-secondary text-lg-start">Group Name : {groupData?.name}</h3>
      <div className="overflow-auto col-md-6 col-lg-7 col-xl-8 p-2 m-2" style={{height:'500px',width:'800px'}}>
      <ul className=" list-unstyled" >
      {message?.map((item,index)=>{
        let config = genConfig(item.id)
        // console.log(item.message.includes('.jpg'))
          return (
            <li className="d-flex justify-content-between mb-4" key={index+1}>
          <div className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config} /><span className='text-primary p-2'>{item.name}</span>
          </div>
{!item.message.includes('.jpg') &&
            <div className="card">
              
                 <div className="overflow card-body d-flex justify-content-around">
                 
                <p className="display-8 mb-0 text-bold text-dark">
                {item.message}
                
                <span className="text-muted small mb-0 p-2"><i class="bi bi-clock"></i>  {getMin(item.updatedAt)}  Mins</span></p>
              </div>
              <span className="text-info p-1">{item.senderId}</span>
            </div>
}
{item.message.includes('.jpg') &&
            <img src={item.message} alt={item.message} style={{width:'20rem', height:'20rem'}}/>
}
          </li>)})}
         
          
        </ul>

      </div>
      <li className="opacity-100 bg-transparent mb-3">
      <div className="form-group purple-border">
        <textarea className="bg-transparent form form-control " id="textAreaExample2" rows="4" placeholder='Type Your Message....' onChange={changeHandler} value={chat}></textarea>
        <input type='file' className='btn bg-transparent'onChange={(e)=>setFile1(e.target.files[0])}/>
      </div>
    </li>
    <button type="button" className="btn btn-info btn-rounded float-end mx-4 px-4" onClick={sendMediaHandler}>Send Media</button>
    <button type="button" className="btn btn-info btn-rounded float-end mx-4 px-4" onClick={sendChatHandler}>Send</button>
    
    </div>
    
  )
}

export default GroupChat