import React, { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import axios from 'axios';
import api from '../helper/api';
import { Link } from 'react-router-dom';


const Group = () => {
const [ allgroup , setAllgroup] = useState([])

  useEffect(()=>{
    axios.get(`${api}/group/groupdata`,{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res=>{
      setAllgroup(res.data)
    }))
  },[])

  let config1 =genConfig(`joh**%`)
  return (

        <div className=" col-md-4 col-lg-5 col-xl-4 mb-4 mb-md-0 p-2 m-2" style={{height:'500px',width:'400px'}}>

<h5 className="font-weight-bold mb-3 text-center text-lg-start">Group</h5>
<div className='overflow-auto' style={{height:'500px'}}>
{allgroup.length ? <div className="card">
  <div className="card-body">

    <ul className="list-unstyled mb-0">

      { allgroup?.map((item, ind)=>{
        let config = genConfig(item.name)
        return (
      <li className="p-2 border-bottom" style={{backgroundColor: "#eee"}} key={ind+1}>
        <a href="" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
          <div className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config} />
          <span className='text-primary p-2'>UserId - {item.id}</span>
          </div>
            <div className="pt-1">
              <p className="fw-bold mb-0 p-2 mt-2">{item.name}</p>
              {/* <p className="small text-muted">Hello, Are you there?</p> */}
            </div>
          </div>
          {/* <div className="pt-1">
            <p className="small text-muted mb-1">Just now</p>
            <span className="badge bg-danger float-end">1</span>
          </div> */}
        </a>
      </li>)})}
    </ul>

  </div>
</div> : <h3>Create Your Group</h3>}
</div>

</div>
   
  )
}

export default Group