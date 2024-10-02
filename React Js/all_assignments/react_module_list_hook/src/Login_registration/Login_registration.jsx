import React, {useState} from 'react';
import './Login_registration.css';
import { Button } from 'react-bootstrap';

const Login_registration = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


  return (
      <>
      
        <h1> Model Login Form </h1>
          <button onClick={openModal}> Open Model </button>
        
        {isOpen && (
            <div className="model">
                <form>
                    <h2> Login to My Account </h2>
                    <input type="text" placeholder='Enter Email Address' />
                    <input type="password" placeholder='Enter Password' />
                    <button className='loginbtn' onClick={closeModal}> Login </button>
                </form>
            </div> 
          )}  
          
          <br />
          <br />
          <br />
          <br />
      
      </>
  )
}

export default Login_registration