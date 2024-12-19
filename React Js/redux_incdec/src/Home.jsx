import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment } from './Action';

const Home = () => {

    const dispatch = useDispatch();

    const state = useSelector((res) => {
        console.log(res);

        return res.IncDec.count;
       
    }) 

  return (
      <>
      
        <button onClick={() => {
            dispatch(Increment(1))
          }}> Increment </button> 
          
          <button onClick={() => {
            dispatch(Increment(-1))
          }}> Decrement </button>
          
          <h1> {state} </h1>
      
      </>
  )
}

export default Home