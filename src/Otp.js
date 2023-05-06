import './Otp.css';
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Otp = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (element, index) => {
    if (isNaN(element.value))
      return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKey = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !inputRefs.current[index].value) {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === 'ArrowRight' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);

    for (let i = 0; i < pastedData.length; i++) {
      if (!/^\d*$/.test(pastedData[i])) {
        return;
      }
      inputRefs.current[i].value = pastedData[i];
      inputRefs.current[i].focus();
    }
  };

  return (
    <div className="otp">
      <div className="wrapper">
        <div className="header">
          <h1>Phone Verification</h1>
        </div><hr />
        <div className="main">
          <div className='subHeader'>
            <h3>Enter the OTP you received on 63922-3XXXX</h3>
          </div>
          <div className="inputs">
            {otp.map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                onChange={(e) => handleInputChange(e.target, index)}
                onFocus={e => e.target.select()}
                onKeyDown={(e) => handleKey(index, e)}
                onPaste={(e) => handlePaste(index, e)}
              />
            ))}
          </div>
          <div className="options">
            <Link to='/'><span>Change Number</span></Link>
            <Link to='/otp'><span>Re-send OTP</span></Link>
          </div>
          <button className='button' type='submit'>Verify Phone Number</button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
