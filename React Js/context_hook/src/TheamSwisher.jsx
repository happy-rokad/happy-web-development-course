import React, {useContext} from 'react';
import { TheamContextData } from './TheamContext';

const TheamSwisher = () => {

    const { theam, setTheam } = useContext(TheamContextData);

  return (
      <>
      
        <h1 style={{backgroundColor:theam == 'dark' ? 'lightblue' : 'whitesmoke'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dolor vero quaerat in, ad eligendi hic quo qui quos incidunt enim optio vitae maxime, facere magnam aut quia. Nulla, eveniet. </h1>
      
      </>
  )
}

export default TheamSwisher