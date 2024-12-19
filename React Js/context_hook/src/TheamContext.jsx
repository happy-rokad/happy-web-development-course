import React, { createContext, useState } from "react";
export const TheamContextData = createContext();

const TheamContext = ({ children }) => {
  const [theam, setTheam] = useState("light");

    return (
        <TheamContextData.Provider value={{ theam, setTheam }}>
            {children}
        </TheamContextData.Provider>
    )
};

export default TheamContext;
