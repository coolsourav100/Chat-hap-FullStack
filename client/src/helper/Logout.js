import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const logOutHandler=()=>{
        localStorage.clear()
        navigate('/')
    }
  return (
    <button className='h2 display-2 btn' onClick={logOutHandler}>Logout</button>
  )
}

export default Logout