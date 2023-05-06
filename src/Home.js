import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className="wrapper">
        <h1>OTP Verification</h1><hr />
        <div className="main">
          <div className="input">
            Enter the Number : -
            <input type="number" placeholder='+91 63922-3XXXX' disabled />
          </div>
          <Link to='/otp'><button>Send OTP</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
