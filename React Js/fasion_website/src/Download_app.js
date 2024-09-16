import './App.css';
import React from 'react';
import display_img from './Vouchers.png';
import download_app from './download_app.png';

const Download_app = () => {
  return (
    <>
        <div className="download_app">
            <div className="container-fluid">
                <div className="content">
                    <h1> DOWNLOAD APP & GET THE VOUCHER! </h1> 
                    <p> Get 30% off for first transaction using Rondovision mobile app for now. </p>    
                    <img src={download_app} alt="download_app_img" />
                </div>  
                <div className="download_image">
                    <img src={display_img} alt="display_section_img" />
                </div>
            </div>
        </div>      
    </>
  )
}

export default Download_app