import React from 'react';
import styles from './daynight.module.css';

const Day_Night = () => {

    const isDayTime = () => {
        const now = new Date();
        const hours = now.getHours();
        console.log(hours);
        return hours >= 6 && hours <= 18; //Assuming day 6 AM to 6 PM
    }

    const dayTime = isDayTime();

  return (
      <>
      
          <br />
          <br />
          <br />
          
          <div className={dayTime ? styles.day : styles.night} >
              <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
          </div>
      
      </>
  )
}

export default Day_Night