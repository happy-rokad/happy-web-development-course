import React, { useReducer } from 'react';
import './App.css'

const initialState = {
    count: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 }
            break;
        case 'SUBTRACT':
            return { count: state.count - 1 }
            break;
        default:
            return { count: state.count }
            break;
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    

  return (
      <>
          
          <button onClick={() => {
              dispatch({type: 'ADD'})
          }}> Increment </button>

          <h1> {state.count} </h1>

          <button onClick={() => {
              dispatch({type: 'SUBTRACT'})
          }}> Decrement </button>
      
      </>
  )
}

export default Reducer