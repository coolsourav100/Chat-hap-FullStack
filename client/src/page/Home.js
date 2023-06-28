import React, { useState } from 'react'
import Members from './Members'
import Chat from './Chat'
import Logout from '../helper/Logout';
import logo from '../Assets/logo.png';
import './Home.module.css'
import GroupChat from'./GroupChat'
import Group from './Group';

const Home = () => {
  const [ groupId , setGroupId] = useState('member')
  const [groupDetails , setGroupDetails] = useState()
function onGroupId(id){
  console.log('iD',id)
  setGroupId(id)
}
function groupData(data){
setGroupDetails(data)
}
  return (
    <div className='m-2 mh-50'>
        <div className='d-flex justify-content-between'>
            <img className='img d-flex jusity-content-row-reverse' src={logo}/>
            <div><Logout/></div>
            </div>
        <section className='container mw-100 border  rounded' style={{backgroundColor: "#eee"}}>
  <div className="container d-flex">
<Members onGroupId={onGroupId}/>
{groupId==='member' && <Chat />}
{groupId==='group' && <GroupChat groupData={groupDetails}/>}
<Group onGroupId={onGroupId} groupData={groupData}/>
  </div>
</section>
    </div>
  )
}

export default Home