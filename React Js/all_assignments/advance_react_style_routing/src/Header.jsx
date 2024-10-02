import React from 'react';
import './App.css';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowsSpin, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  return (
      <>
      
          <div className="main_head">
            <div className="head">
                <div className="logo_img">
                    <img src={logo} alt="" />
                </div>
                <div className="search_bar">
                    <div className="category">
                        <h4> All Categories | </h4>
                    </div>
                    <div className="search_item">
                        <input type="text" placeholder='Search for items...' />
                    </div>
                    <div className="search_icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className="compare">
                    <FontAwesomeIcon icon={faArrowsSpin} />
                    <p> Compare </p>  
                </div> 
                <div className="wishlist">
                    <FontAwesomeIcon icon={faHeart}/>
                    <p> Wishlist </p>  
                </div> 
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p> Cart </p>  
                </div> 
                <div className="account">
                    <FontAwesomeIcon icon={faUser} />
                    <p> Account </p>  
                </div>
                
            </div>
          </div>
      
      </>
  )
}

export default Header