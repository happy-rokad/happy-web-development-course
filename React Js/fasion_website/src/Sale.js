import './App.css'
import React from 'react';
import sale_img1 from './sale-img1.png';
import sale_img2 from './sale-img2.png';
 
const Sale = () => {
  return (
    <>
        <div className="sale">
            <div className="container-fluid">
                <div className="image">
                    <img src={sale_img1} alt="sale-img1" />      
                </div>
                <div className="content">
                    <h1> Payday Sale Now </h1>
                    <p className='pt-2'> Spend minimal $100 get 30% off
                          voucher code for your next purchase </p> 
                    <p className='sale-p pt-3'> 1 June - 10 June 2021 </p>
                    <p> *Terms & Conditions apply </p>  
                    <button> Shop Now </button>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Sale