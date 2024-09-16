import './App.css';
import React from 'react';
import company_logo1 from './company_logo1.png';
import company_logo2 from './company_logo2.png';
import company_logo3 from './company_logo3.png';
import company_logo4 from './company_logo4.png';
import company_logo5 from './company_logo5.png';
import company_logo6 from './company_logo6.png';

const Company_logo = () => {
  return (
    <>
        <div className="company_logo">
            <div className="container-fluid">
                <img src={company_logo1} alt="company-logo1" />
                <img src={company_logo2} alt="company-logo2" />
                <img src={company_logo3} alt="company-logo3" />
                {/* <img src={company_logo4} alt="company-logo4" /> */}
                <img src={company_logo5} alt="company-logo5" />
                <img src={company_logo6} alt="company-logo6" />
            </div>    
        </div>
    </>
  )
}

export default Company_logo