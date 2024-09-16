import React, {useState} from 'react';
import './Decr_Incre_use_function.css'

const Decr_Incre_use_function = () => {

    const [Num , ChangeNum ] = useState(0);
   
    const Increase = () => {
        ChangeNum(Num + 1);
    }
    const Decrease = () => {
        ChangeNum(Num - 1);
    }


  return (
      <>
          
          <div className="Incr_dec">
              <h1> {Num} </h1>
              <div className="btns">
                  <button onClick={() => {
                      Increase()
                    }}> Increment </button>
                  <button onClick={() => {
                      Decrease()
                    }} > Decrement </button>
              </div>
          </div>
      
      
      </>
  )
}

export default Decr_Incre_use_function