import React, { useContext } from "react";
import { TheamContextData } from "./TheamContext";

const ChangeTheam = () => {

    const { theam, setTheam } = useContext(TheamContextData);

    return (
      <button onClick={() => {
            setTheam(theam === 'light' ? 'dark' : 'light');
        }} style={{padding:'10px 20px', fontSize:'20px'}}> {theam == 'light' ? 'Dark' : 'Light'} </button>
  )
};

export default ChangeTheam;
