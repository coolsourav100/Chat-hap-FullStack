import React, { useState } from 'react';
import logo from '../Assets/logo.png'

const LoginPage = () => {
  const [toggle , setToggle] = useState(false)

  const toggleHandler=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
    <section className="vh-100">
    <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <div className="col-md-8 col-lg-7 col-xl-6">
    <div className='d-flex align-items-center justify-content-center flex-column'><img src={logo}/></div>
        {!toggle && <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>}
         { toggle && <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
    class="img-fluid" alt="Sample image"/> }
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      {toggle &&<h1 className='display-4 m-4 p-4 text-secondary text-xl font-weight-bold'>Connet With Us ...</h1>}
      {!toggle &&<h1 className='display-4 m-4 p-4 text-secondary text-xl font-weight-bold'>Let's go..</h1>}
        <form className='form mt-4'>
          
          {toggle && <div className="form-outline mb-4">
            <input type="text" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Name</label>
          </div>}
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

        
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
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
              {!toggle && <h3 class="mb-0 mt-4">Don't have an account ?   <a href="#!" class="text-secondary text-decoration-none fw-bold" onClick={toggleHandler}>Sign Up</a>
              </h3>}
              {toggle && <h3 class="mb-0 mt-4">Are you already with Us ?    <a href="#!" class="text-secondary text-decoration-none fw-bold" onClick={toggleHandler}>Log In</a>
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

export default LoginPage