import React, { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar'
import axios from 'axios';
import api from '../helper/api';

const Chat = () => {
    const [chat , setChat] = useState('');
    const [message , setMessage] = useState([])
    

    useEffect(()=>{
      let interval = setInterval(async()=>{
        if(localStorage.getItem('token')){
     await axios.get(`${api}/chat/allmassages` ,{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res)=>{
        console.log(res , new Date().getMinutes())
        setMessage(res.data)
      })}
      return ()=> clearInterval(interval)
      
    },3000)},[chat])

    const getMin=(time)=>{
      let min1 = new Date().getTime()
      let min2 = new Date(time).getTime()
       return Math.floor((min1 - min2)/60000)
      
    }
    // getMin()

    const changeHandler =(e)=>{
        e.preventDefault();
        setChat(e.target.value)
    }
    
    const sendChatHandler=async(e)=>{
        try{
let responce = await axios.post(`${api}/chat/send` , {chat} ,{ headers: {"Authorization" : localStorage.getItem('token')} })
          console.log(responce)
        }catch(err){

        }
        setChat('')
    }
  return (
    <div >
    
      <div className="overflow-auto col-md-6 col-lg-7 col-xl-8 p-2 m-2" style={{height:'500px',width:'800px'}}>
      <ul className=" list-unstyled">
      {message?.map((item,index)=>{
        let config = genConfig(item.name)
          return (<li className="d-flex justify-content-between mb-4" key={index+1}>
          <diV className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config} /><span className='text-primary p-2'>{item.name}</span>
          </diV>

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

export default Chat