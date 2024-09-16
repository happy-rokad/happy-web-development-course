import './App.css';
import display_section_img from './display_section.png'
import React from 'react'

const Display_section = () => {
  return (
    <>
    
    <div className="display_section">
        <div className="container-fluid">
            <div className="content">
                <h1> Let's Explore Unique Clothes. </h1> 
                <p> Live for Influential and Innovative fashion! </p>
                <button> Shop Now </button>      
            </div>  
            <div className="display_image">
                <img src={display_section_img} alt="display_section_img" />
            </div>
         </div>
    </div>
          
    </>
  )
}

export default Display_section