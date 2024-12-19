import React, {useState, useEffect} from 'react'

const Changecolor = () => {

    const [color, setColor] = useState('white');

    useEffect(() => {
        document.body.style.backgroundColor = color ;
    }, [color])
    

  return (
      <>
      
          <button onClick={() => {
             setColor('green');
          }}> Green </button>
          <button onClick={() => {
              setColor('yellow');
          }}> Yellow </button>
          <button onClick={() => {
              setColor('red');
          }}> Red </button>
          <button onClick={() => {
             setColor('blue');
          }}> Blue </button>
          <button onClick={() => {
              setColor('gray');
          }}> Gray </button>
          <button onClick={() => {
              setColor('orange');
          }}> Orange </button>
      
      </>
  )
}

export default Changecolor