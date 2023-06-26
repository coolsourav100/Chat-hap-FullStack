import React from 'react'
import Members from './Members'
import Chat from './Chat'
import Logout from '../helper/Logout';
import logo from '../Assets/logo.png';
import './Home.module.css'

const Home = () => {
  return (
    <div className='m-2'>
        <div className='d-flex justify-content-between'>
            <img className='img d-flex jusity-content-row-reverse' src={logo}/>
            <div><Logout/></div>
            </div>
        <section className='container mw-100 border  rounded' style={{backgroundColor: "#eee"}}>
  <div className="container d-flex justify-content-between py-5 p-4">
<Members/>
<Chat/>
    

  </div>
</section>
    </div>
  )
}

export default Home