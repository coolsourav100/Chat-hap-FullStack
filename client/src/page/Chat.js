import React, { useEffect, useState } from 'react';
import avatar1 from '../Assets/avatar1.jpg';
import avatar2 from '../Assets/avatar2.jpg';
import avatar3 from '../Assets/avatar3.jpg';
import avatar4 from '../Assets/avatar4.jpg';
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
      
    },30000)},[])

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
    }
  return (
    <div >
    
      <div className="overflow-auto col-md-6 col-lg-7 col-xl-8 p-2 m-2" style={{height:'500px',width:'800px'}}>
      <ul className=" list-unstyled">
      {message?.map((item,index)=>{
          return (<li className="d-flex justify-content-between mb-4" key={index+1}>
            <img src={avatar4} alt="avatar"
              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card">
              <div className="card-header d-flex justify-content-around p-4 m-2" style={{width:'15rem'}}>
                <p className="fw-bold mb-0"> {item.name}</p>
                <span className="text-muted small mb-0"><i class="bi bi-clock"></i>  {getMin(item.updatedAt)}  Mins</span>
              </div>
              <div className="card-body ">
                <p className="display -4 mb-0 text-bold">
                  {item.message}
                </p>
              </div>
            </div>
          </li>)})}
         
          
        </ul>

      </div>
      <li className="bg-white mb-3">
      <div className="form-outline">
        <textarea className="form-control" id="textAreaExample2" rows="4" onChange={changeHandler}></textarea>
        <label className="form-label" for="textAreaExample2">Type Your Message....</label>
      </div>
    </li>
    <button type="button" className="btn btn-info btn-rounded float-end" onClick={sendChatHandler}>Send</button>
    </div>
    
  )
}

export default Chat