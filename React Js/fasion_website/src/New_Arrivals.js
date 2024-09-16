import './App.css';
import React from 'react';
import new_arrival1 from './new_arrival1.png';
import new_arrival2 from './new_arrival2.png';
import new_arrival3 from './new_arrival3.png';


const New_Arrivals = () => {
  return (
    <>
        <div className="new_arrival">
            <div className="container-fluid">
                  <h1> New Arrivals </h1>
                  <div className="arrival_cards">
                    <div class="card">
                        <img src={new_arrival1} alt="card-img1" />
                          <div class="card-body">
                              <div className="content">
                                <h5 class="card-title">Hoodies & Sweetshirt</h5>
                                <p class="card-text">Explore Now!</p>    
                              </div>
                              <div className="arrow">
                                  <p> &#8594; </p>
                              </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src={new_arrival2} alt="card-img1" />
                          <div class="card-body">
                              <div className="content">
                                <h5 class="card-title">Coats & Parkas</h5>
                                <p class="card-text">Explore Now!</p>    
                              </div>
                              <div className="arrow">
                                  <p> &#8594; </p>
                              </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src={new_arrival3} alt="card-img1" />
                          <div class="card-body">
                              <div className="content">
                                <h5 class="card-title">Tees & T-Shirt</h5>
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

export default New_Arrivals