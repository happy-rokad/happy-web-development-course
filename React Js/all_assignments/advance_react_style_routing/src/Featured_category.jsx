import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';

const Featured_category = () => {
  return (
      <>
    
          <div className="featured">
              <div className="featured_cateory">
                    <div className="content_category">
                        <div className="heading">
                            <h1> Featured Categories </h1>  
                        </div>
                        <div className="categories">
                            <a href=""> Cake & Milk </a>
                            <a href=""> Coffee & Teas </a>
                            <a href="" style={{color:'#3BB77E'}}> Pet Foods </a>
                            <a href=""> Vagetables </a>     
                        </div>
                    </div>
                    <div className="arrow_btns">
                        <button> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                        <button> <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
              </div>
          </div>
      
          

          {/* pet foods */}

          <div className="pet_foods">
              <div className="food food1">
                  <img src={img1} alt="" />
                  <h4> Cake & Milk </h4>
                  <p> 26 items </p>
              </div>
              <div className="food food2">
                  <img src={img2} alt="" />
                  <h4> Oganic kiwi </h4>
                  <p> 28 items </p>
              </div>
              <div className="food food3">
                  <img src={img3} alt="" />
                  <h4> Peach </h4>
                  <p> 14 items </p>
              </div>
              <div className="food food4">
                  <img src={img4} alt="" />
                  <h4> Red Apple </h4>
                  <p>  54 items </p>
              </div>
              <div className="food food5">
                  <img src={img5} alt="" />
                  <h4> Snack </h4>
                  <p> 56 items </p>
              </div>
              <div className="food food6">
                  <img src={img6} alt="" />
                  <h4> Vagetables </h4>
                  <p> 72 items </p>
              </div>
              <div className="food food7">
                  <img src={img7} alt="" />
                  <h4> Strawberry </h4>
                  <p> 36 items </p>
              </div>
              <div className="food food8">
                  <img src={img8} alt="" />
                  <h4> Black Plum </h4>
                  <p> 123 items </p>
              </div>
              {/* <div className="food food9">
                  <img src={img9} alt="" />
                  <h4> Custard Apple </h4>
                  <p>  34 items </p>
              </div> */}
              <div className="food food10">
                  <img src={img10} alt="" />
                  <h4> Coffee & Tea </h4>
                  <p> 89 items </p>
              </div>
          </div>


      
          <br />
          <br />
          <br />
          <br />
          <br />

      </>
  )
}

export default Featured_category