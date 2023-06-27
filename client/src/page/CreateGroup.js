import React, { useState } from 'react'
import group from '../Assets/group.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import api from '../helper/api'

const CreateGroup = () => {
    const [name , setName] = useState('')
    const [ member , setMember] = useState([])
    const navigate = useNavigate()
    
    const nameHandler=(e)=>{
            setName(e.target.value)
    }
    const memberHandler=(e)=>{
        let arr =e.target.value
        let narr =arr.split(',')
        setMember(narr)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post(`${api}/group/create`,{name:name},{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res=>{
            console.log(res,'group')
        })).catch(err=>console.log(err))
        navigate('/dashboard')
    }
    console.log(member , name)
  return (
    <div>
         <div>
      
    <section className="vh-100">
    <div className="container h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <div className="col-md-8 col-lg-7 col-xl-6">
    <div className='d-flex align-items-center justify-content-center flex-column h-50 p-4 m-4'></div>
         <img src={group}
    className="img-fluid opacity-100" alt="Sample image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <h1 className='d-flex justify-content-center display-6 m-4 p-4 text-secondary text-xl font-weight-bold'>Create Your Chat Group</h1>
      
        <form className='form mt-4' onSubmit={submitHandler}>
          
          <div className="form-outline mb-4">
            <input type="text" name="name" className="form-control form-control-lg" required onChange={nameHandler}/>
            <label className="form-label" for="form1Example13" >Name of Your Group</label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" name="" className="form-control form-control-lg" required placeholder='Enter Their UserId like 1 , 2 , 3' onChange={memberHandler}/>
            <label className="form-label" for="form1Example13">Add Member</label>
          </div>
          
          <div className="d-flex flex-column align-items-center my-4">
          <button type="submit" className="btn btn-primary btn-lg btn-block">Create</button>
          

          
          </div>
        </form>
      </div>
    </div>
  </div>
  
</section>
    </div>
    </div>
  )
}

export default CreateGroup