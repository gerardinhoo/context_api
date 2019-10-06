import React, { useState } from "react";

export const SportContext = React.createContext("Tennis");
export const FruitContext = React.createContext("Orange");

const Store = ({ children }) => {
  const [sport, setSport] = useState("Tennis");
  const [fruit, setFruit] = useState("Orange");

  return (
    <SportContext.Provider value={[sport, setSport]}>
      <FruitContext.Provider value={[fruit, setFruit]}>
        {children}
      </FruitContext.Provider>
    </SportContext.Provider>
  );
};

export default Store;
