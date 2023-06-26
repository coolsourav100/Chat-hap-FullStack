import React from 'react';
import avatar1 from '../Assets/avatar1.jpg';
import avatar2 from '../Assets/avatar2.jpg';
import avatar3 from '../Assets/avatar3.jpg';
import avatar4 from '../Assets/avatar4.jpg';


const Members = () => {
  return (
    // <div className='row'>
        <div className="col-md-4 col-lg-5 col-xl-4 mb-4 mb-md-0 p-2 m-2">

<h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>

<div className="card">
  <div className="card-body">

    <ul className="list-unstyled mb-0">
      <li className="p-2 border-bottom" style={{backgroundColor: "#eee"}}>
        <a href="" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar1} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0 ">John Doe</p>
              <p className="small text-muted">Hello, Are you there?</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">Just now</p>
            <span className="badge bg-danger float-end">1</span>
          </div>
        </a>
      </li>
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar2} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Danny Smith</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">5 mins ago</p>
          </div>
        </a>
      </li>
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar3}alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Alex Steward</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">Yesterday</p>
          </div>
        </a>
      </li>
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar4} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Ashley Olsen</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">Yesterday</p>
          </div>
        </a>
      </li>
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar1} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Kate Moss</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">Yesterday</p>
          </div>
        </a>
      </li>
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar2} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Lara Croft</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">Yesterday</p>
          </div>
        </a>
      </li>
      <li className="p-2">
        <a href="#!" className="d-flex justify-content-between text-decoration-none">
          <div className="d-flex flex-row">
            <img src={avatar2} alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div className="pt-1">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="small text-muted">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">5 mins ago</p>
            <span className="text-muted float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
          </div>
        </a>
      </li>
    </ul>

  </div>
</div>

</div>
    // </div>
  )
}

export default Members