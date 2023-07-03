import React, { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import axios from 'axios';
import api from '../helper/api';
import { Link } from 'react-router-dom';


const Group = (props) => {
const [ allgroup , setAllgroup] = useState([])
const [toggle , setToggle] = useState(false)
let userid  = localStorage.getItem('userid')
  useEffect(()=>{
    axios.get(`${api}/group/groupdata`,{ headers: {"Authorization" : localStorage.getItem('token')}}).then((res=>{
      console.log(res.data)
      if(res.data !=null){
        let arr = res.data.filter(i=>i !=null)
        setAllgroup(arr)
      }
    })).catch(err=>console.log(err))
  },[toggle])

  let config1 =genConfig(`joh**%`)

const groupClickHandler=(data)=>{
  // e.preventDefault();
  props.onGroupId('group')
  props.groupData(data)
}

const groupDeleteHandler=(id)=>{
  axios.delete(`${api}/group/deletegroup/${id}`,{ headers: {"Authorization" : localStorage.getItem('token')}}).then(res=>{
    console.log(res,'delete')
  }).catch(err=>{
    console.log(err)
  })
  setToggle(!toggle)
}
console.log(allgroup , 'oioii')
  return (

        <div className=" col-md-4 col-lg-5 col-xl-4 mb-4 mb-md-0 p-2 m-2" style={{height:'500px',width:'400px'}}>

<h5 className="font-weight-bold mb-3 text-center text-lg-start">Group</h5>
<div className='overflow-auto' style={{height:'500px'}}>

 <div className="card">
  <div className="card-body">

    <ul className="list-unstyled mb-0">
<li className="p-2 border-bottom" style={{backgroundColor: "#eee"}}>
        <Link to='/group' className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
          <div className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config1} />
          </div>
            <div className="pt-1">
              <p className="fw-bold mb-0 p-2 mt-2 text-dark">Create A Group</p>
            </div>
          </div>
        </Link>
      </li>
{ allgroup.length > 0  && <> 
      {allgroup?.map((item, ind)=>{
        let config = genConfig(item.name)
        return (
      <li className="p-2 border-bottom" style={{backgroundColor: "#eee"}} key={ind+1}>
        <a  className="d-flex justify-content-between text-decoration-none" onClick={()=>groupClickHandler(item)}>
          <div className="d-flex flex-row" >
          <div className='d-flex flex-column'>
          <Avatar style={{ width: '4rem', height: '4rem' }} {...config} />
          {/* <span className='text-primary p-2'>UserId - {item.id}</span> */}
          </div>
            <div className="pt-1">
              <p className="fw-bold mb-0 p-2 mt-2">{item.name}</p>
              {/* <p className="small text-muted">Hello, Are you there?</p> */}
            </div>
          </div>
          {localStorage.getItem('userid') == item.admin && <div className="pt-1">
            <span className="float-end"><button className='btn btn-danger' onClick={()=>groupDeleteHandler(item.id)}>Delete</button></span>
          </div>}
        </a>
      </li>)})}
      </>}
    </ul>

  </div>
</div>
</div>

</div>
   
  )
}

export default Group