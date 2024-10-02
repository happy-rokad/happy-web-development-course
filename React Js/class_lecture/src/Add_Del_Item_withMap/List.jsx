import React from 'react';
import './List.css';
import deleteicon from './delete.png';
import editicon from './edit.png';


const List = ({fruitList, deleteAction, editAction}) => {
  return (
    <>
    
      {fruitList.map((result, index) => {
        return (
          <>
            <div className="result_box">
              <div className="square" key={index}>
                {result}
              </div>
              <div className='del' onClick={() => {
                deleteAction(index)
              }}> <img src={deleteicon}  /> </div>
              <div className='del' onClick={() => {
                editAction(result,index)
              }}> <img src={editicon} className='editicon'  /> </div>
            </div>
          </>
        )
      })}
      
    </>
  )
}

export default List