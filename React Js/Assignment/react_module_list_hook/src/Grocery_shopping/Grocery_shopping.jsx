import React, { useState } from 'react';
import './Grocery_shopping.css';
import List from './List';

const Grocery_shopping = () => {

    const [grocery, setgrocery] = useState([]);
    const [checkId, setId] = useState(null);
    
    const addgroceryitem = () => {
        let Data = document.getElementById('add_item').value;
        if (checkId == null) {
            setgrocery([...grocery, Data]);
        } else {
            let gro = [...grocery];
            gro[checkId] = Data;
            setgrocery(gro);
            setId(null);
        }
        
        document.getElementById('add_item').value = '';
    }

    const deleteData = (index) => {
        console.log('delete');
        let gro = [...grocery];
        gro.splice(index, 1);
        setgrocery(gro);
    }

    const editData = (result,index) => {
        document.getElementById('add_item').value = result;
        setId(index);
    }

  return (
      <>
          
        <div className="input_box">
            <div className="square">
                <h3> Grocery Shopping </h3>
                <List grocerylist={grocery} deleteAction={deleteData} editAction={editData} />
                <input type="text" id='add_item'/>
                <button onClick={() => {
                      addgroceryitem()
                }}> {checkId == null ? 'Add' : 'Edit'} </button>
            </div>
        </div>
        
      </>
  )
}

export default Grocery_shopping