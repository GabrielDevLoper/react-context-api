import React, { createContext, useState } from "react";

export const ContadorContext = createContext();

export function ContadorProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <ContadorContext.Provider value={[count, setCount]}>
      {children}
    </ContadorContext.Provider>
  );
}
