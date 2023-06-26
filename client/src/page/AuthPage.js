import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import api from '../helper/api';
import logo from '../Assets/logo.png';
import login from '../Assets/login.jpg';
import sign from '../Assets/sign.jpg';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [userDetails , setUserDetails] = useState({name:'',email:'',password:""})
  const [toggle , setToggle] = useState(false)
  const navigate = useNavigate()
  

  const onChangeHandler=(e)=>{
    e.preventDefault()
setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }
  const onSubmitHandler =async(e)=>{
    e.preventDefault();
    if(toggle){
      try{
        const responec = await axios.post(`${api}/auth/register`,{...userDetails}).catch(err=>{
          toast.error(err.response.data,{ theme: "colored"}, {
            position: toast.POSITION.TOP_RIGHT
          })})
        if(responec.statusText=='OK'){
          toast.success(responec.data,{theme:'colored'},{
            position:toast.POSITION.TOP_RIGHT
          })
        }
      }catch(err){
        console.log(err)
      }
    }else{
      try{
        let responec =await axios.post(`${api}/auth/login`,{...userDetails}).catch(err=>{
          toast.error(err.response.data,{ theme: "colored"}, {
            position: toast.POSITION.TOP_RIGHT
          })})
          console.log(responec,'-==================>')
        if(responec.statusText=='OK'){
          toast.success(responec.data.message,{theme:'colored'},{
            position:toast.POSITION.TOP_RIGHT
          })
          localStorage.setItem('token',responec.data.token)
          navigate('/dashboard')
        }

      }catch(err){
        console.log(err)
      }
    }

    setUserDetails({
      name:"",
      email:"",
      password:""
    })

  }
  const toggleHandler=(e)=>{
    e.preventDefault()
    setToggle(!toggle)
  }
  console.log(userDetails)
  console.log(toggle)
  return (
    <div>
      <ToastContainer/>
    <section className="vh-100">
    <div className="container h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <div className="col-md-8 col-lg-7 col-xl-6">
    <div className='d-flex align-items-center justify-content-center flex-column h-50'><img  src={logo}/></div>
        {!toggle && <img src={login}
          className="img-fluid" alt="Phone image"/>}
         { toggle && <img src={sign}
    className="img-fluid" alt="Sample image"/> }
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      {toggle &&<h1 className='d-flex justify-content-center display-4 m-4 p-4 text-secondary text-xl font-weight-bold'>Connet With Us ...</h1>}
      {!toggle &&<h1 className='d-flex justify-content-center display-4 m-4 p-4 text-secondary text-xl font-weight-bold'>Let's go..</h1>}
        <form className='form mt-4' onSubmit={onSubmitHandler}>
          
          {toggle && <div className="form-outline mb-4">
            <input type="text" name="name" className="form-control form-control-lg" required 
            onChange={onChangeHandler} value={userDetails.name}/>
            <label className="form-label" for="form1Example13">Name</label>
          </div>}
          <div className="form-outline mb-4">
            <input type="email" name="email" className="form-control form-control-lg" required 
            onChange={onChangeHandler} value={userDetails.email}/>
            <label className="form-label" for="form1Example13">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" name="password" className="form-control form-control-lg" required 
            onChange={onChangeHandler} value={userDetails.password}/>
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          {!toggle && <div className="d-flex justify-content-around align-items-center mb-4">
            
            
            <a href="#!">Forgot password?</a>
          </div>}

          
          <div className="d-flex flex-column align-items-center my-4">
          {toggle && <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>}
          {!toggle && <button type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>}

          <div className="d-flex align-items-center my-2 mt-2 pt-4">
          <hr/><p className="text-center h3 fw-bold mx-3 mb-0">Or</p><hr/>
        </div>
          

            <div className="d-flex justify-content-center text-center mt-1 pt-1">
            
            <button className='btn m-1 p-1'><i className="h2 bi bi-facebook p-1 m-1"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-twitter p1 m-3"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-google p-1 m-3"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-apple p1 m-3"></i></button>
          </div>
          <div className='d-flex justify-content-center text-center mt-4 pt-1'>
              {!toggle && <h3 className="mb-0 mt-4">Don't have an account ?   <a href="" className="text-secondary text-decoration-none fw-bold" onClick={toggleHandler}>Sign Up</a>
              </h3>}
              {toggle && <h3 className="mb-0 mt-4">Are you already with Us ?    <a href="" className="text-secondary text-decoration-none fw-bold" onClick={toggleHandler}>Log In</a>
              </h3>}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</section>
    </div>
    
  )
}

export default AuthPage