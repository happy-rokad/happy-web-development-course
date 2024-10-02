import React, { useState } from 'react';
import './Mouse_move.css'
import context from 'react-bootstrap/esm/AccordionContext';

const Mouse_move = () => {

    const [position, setposition] = useState({x : 25, y : 25})

    const mousemove = (e) => {
        console.log(e.screenX, e.screenY);
        setposition({x: e.clientX, y: e.clientY})
    }

  return (
      <>
      
          <div onMouseMove={mousemove} style={{position:'relative' , height:'100vh'}}>
              
            <div className="circle" style={{ top : position.y-25 , left:position.x-25}}></div>
          </div>
      
          <br />
          <br />
          <br />
          <br />
          <br />

      </>
  )
}

export default Mouse_move