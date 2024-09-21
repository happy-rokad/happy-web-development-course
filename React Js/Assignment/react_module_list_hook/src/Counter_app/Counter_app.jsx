import React , {useState} from 'react';
import './Counter_app.css'

const Counter_app = () => {

    const [num, setnum] = useState(0);

    const Incnum = () => {
        setnum(num + 1);
    }
    const Decnum = () => {
        setnum(num - 1);
    }

  return (
      <>
      
          <div className='box'>
              <h1> Counter App </h1>
              <h1> {num} </h1>
              <div className="buttons">
                  <button className='inc' onClick={() => {
                      Incnum();
                }}> Increament </button>
                  <button className='dec' onClick={() => {
                      Decnum();
                }}> Decreament </button>    
              </div>
          </div>

      </>
  )
}

export default Counter_app