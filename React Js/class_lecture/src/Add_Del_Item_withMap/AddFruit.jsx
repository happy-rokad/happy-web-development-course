import React, { useState } from 'react'
import './AddFruit.css';
import List from './List';

const AddFruit = () => {

  const [fruit, setfruit] = useState([]);
  const [checkId, setId] = useState(null);

  const addFruit = () => {
    let Data = document.getElementById('add_data').value;
    if (checkId == null) {
      setfruit([...fruit, Data]);
    } else {
      let frt = [...fruit];
      frt[checkId] = Data;
      setfruit(frt);
      setId(null);
    }
    document.getElementById('add_data').value = ' ';
  }

  const deleteData = (index) => {
    console.log('delete');
    let frt = [...fruit];
    frt.splice(index, 1);
    setfruit(frt);
  }

  const editData = (result,index) => {
    document.getElementById('add_data').value = result;
    setId(index);
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
          } }> {checkId == null ? 'Add' : 'Edit'} </button>
        </div>
      </div>
    
    
    
    </>
  )
}

export default AddFruit