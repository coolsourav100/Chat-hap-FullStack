import React from 'react';
import avatar1 from '../Assets/avatar1.jpg';
import avatar2 from '../Assets/avatar2.jpg';
import avatar3 from '../Assets/avatar3.jpg';
import avatar4 from '../Assets/avatar4.jpg';

const Chat = () => {
  return (
    // <div className="row">
    
      <div className="col-md-6 col-lg-7 col-xl-8 p-2 m-2">

        <ul className="list-unstyled">
          <li className="d-flex justify-content-between mb-4">
            <img src={avatar4} alt="avatar"
              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-muted small mb-0"><i className="far fa-clock"></i> 12 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="d-flex justify-content-between mb-4">
            <div className="card w-100">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Lara Croft</p>
                <p className="text-muted small mb-0"><i className="far fa-clock"></i> 13 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <img src={avatar2} alt="avatar"
              className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60"/>
          </li>
          <li className="d-flex justify-content-between mb-4">
            <img src={avatar4} alt="avatar"
              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60"/>
            <div className="card">
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-muted small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
          <li className="bg-white mb-3">
            <div className="form-outline">
              <textarea className="form-control" id="textAreaExample2" rows="4"></textarea>
              <label className="form-label" for="textAreaExample2">Type Your Message....</label>
            </div>
          </li>
          <button type="button" className="btn btn-info btn-rounded float-end">Send</button>
        </ul>

      </div>

    // </div>
    
  )
}

export default Chat