import './App.css';
import React from 'react';
import young_fav1 from './young_fav1.png';
import young_fav2 from './young_fav2.png';

const Young_fav = () => {
  return (
    <>
        <div className="young_fav">
            <div className="container-fluid">
                <h1> Young’s Favourite </h1>
                <div className="young_fav_cards">
                    <div class="card">
                        <img src={young_fav1} alt="card-img1" />
                            <div class="card-body">
                                <div className="content">
                                <h5 class="card-title">Trending on instagram</h5>
                                <p class="card-text">Explore Now!</p>    
                                </div>
                                <div className="arrow">
                                    <p> &#8594; </p>
                                </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src={young_fav2} alt="card-img1" />
                            <div class="card-body">
                                <div className="content">
                                <h5 class="card-title">All Under $40</h5>
                                <p class="card-text">Explore Now!</p>    
                                </div>
                                <div className="arrow">
                                    <p> &#8594; </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </>
  )
}

export default Young_fav