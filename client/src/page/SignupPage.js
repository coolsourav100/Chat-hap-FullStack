import React, { useState } from 'react';
import logo from '../Assets/logo.png'

const SignupPage = () => {
  const [ toggle , setToggle] = useState(false)

  const ontoggleHandler=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
    <section className="vh-100">
    <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
    <div className="col-md-8 col-lg-7 col-xl-6">
    <div className='d-flex align-items-center justify-content-center flex-column'><img src={logo}/></div>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
    class="img-fluid" alt="Sample image"/>
    </div>
    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
    <h1 className='display-4 m-4 p-4 text-secondary text-xl font-weight-bold'>Connet With Us ...</h1>
        <form className='form mt-4'>
          
          <div className="form-outline mb-4">
            <input type="text" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Name</label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

        
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>
  
          <div className="d-flex flex-column align-items-center my-4">
          { !toggle && <button type="submit" className="btn btn-primary btn-lg btn-block">Log In</button>}
          {toggle && <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>}

          <div className="d-flex align-items-center my-2 mt-2 pt-4">
          <hr/><p className="text-center h3 fw-bold mx-3 mb-0">Or</p><hr/>
        </div>
          

            <div className="d-flex justify-content-center text-center mt-1 pt-1">
            
            <button className='btn m-1 p-1'><i className="h2 bi bi-facebook p-1 m-1"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-twitter p1 m-3"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-google p-1 m-3"></i></button>
            <button className='btn m-1 p-1'><i className="h2 bi bi-apple p1 m-3"></i></button>
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

export default SignupPage