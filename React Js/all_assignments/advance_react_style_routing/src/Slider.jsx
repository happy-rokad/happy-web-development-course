import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Slider = () => {
  return (
      <>

          <div className="slider">
              <div className="slide_part">
                  <div className="content">
                    <h1> Don't miss amazing <br /> grocery deals </h1>
                    <p> Signup for the daily newsletter </p>  
                    <div className="emailadd">
                        <button> <FontAwesomeIcon icon={faPaperPlane} style={{paddingLeft:'20px'}}/> <input type="email" placeholder='Your Email Address' /> <button className='subscribe_btn'> Subscribe </button> </button> 
                    </div>
                  </div>
              </div>
          </div>
      
      </>
  )
}

export default Slider