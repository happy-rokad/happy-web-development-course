import React, {createContext, useState } from 'react';
export const TheamContextData = createContext();

const TheamContext = ({children}) => {

    const [count, setCount] = useState(0);

  return (
      <>
          <TheamContextData.Provider value={{count, setCount}}>
              {children}
          </TheamContextData.Provider>
        
    </>
  )
}

export default TheamContext