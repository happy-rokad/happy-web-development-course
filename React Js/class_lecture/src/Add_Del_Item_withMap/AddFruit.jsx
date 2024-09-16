import React, { useState } from 'react'
import './AddFruit.css';
import List from './List';

const AddFruit = () => {

  const [fruit, setfruit] = useState([]);

  const addFruit = () => {
    let Data = document.getElementById('add_data').value;
    setfruit([...fruit, Data]);
    document.getElementById('add_data').value = ' ';
  }

  const deleteData = (index) => {
    console.log('delete');
    let frt = [...fruit];
    frt.splice(index, 1);
    setfruit(frt);
  }

  const editData = (index) => {
    let frt = [...fruit];
    frt.slice(index, 1);
    setfruit(document.getElementById('add_data').value = frt);
    
  }

  return (
    <>
      
      <br />
      <br />
      
      <div className="input_box">
        <div className="box">
          <h3> Fruit Shopping </h3>
          <List fruitList = {fruit} deleteAction = {deleteData} editAction = {editData} />
          <input type="text" id='add_data'/>
          <button onClick={() => {
            addFruit()
          } }> Add </button>
        </div>
      </div>
    
    
    
    </>
  )
}

export default AddFruit