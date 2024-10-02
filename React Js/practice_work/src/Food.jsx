import React, { useEffect, useRef , useState} from 'react';
import './Food.css';

const Food = () => {

    useEffect(() => {
        document.title = 'Food App';
    }, [])

    const input = useRef(null);
    const [foodItems, setFoodItems] = useState([]);
    const [index, setindex] = useState(null)
    
    const addFood = () => {
        const food = input.current.value;
        if (food) {
            if (index !== null) {
                // update 
                foodItems[index] = food;
                setFoodItems([...foodItems]);
                setindex(null);
            } else { 
                  setFoodItems([...foodItems, food]); // Update state
            }

        }
        input.current.value = '';
    }

    const delitem = (index) => {
        let item = [...foodItems];
        item.splice(index, 1);
        setFoodItems(item);   
    }

    const updateitem = (result, h) => {
        input.current.value = result; 
        setindex(h)
    }

    

  return (
      <>
      
        <div className="foodlist">
            <h1> Food List </h1>
              <div className="content">
                    <div className="box">
                        <input type="text" ref={input} />
                      <button onClick={addFood}> {index !== null ? 'Update' : 'Add'} </button>     
                    </div>
                    <div className='itemadd'> {foodItems.map((result, index) => (
                        <>
                            <div className="itemwithbutton">
                                <p key={index}> {result} </p>
                                <button className='delbtn' onClick={() => {
                                    delitem(index)
                                }}> Delete </button>
                                <button className='delbtn' onClick={() => {
                                    updateitem(result, index)
                                }}> Update </button>
                            </div>
                        </>))} 
                    </div>
            </div>
        </div>  
          
      </>
  )
}

export default Food