import React, { createContext, useContext, useState } from 'react';

// Tworzymy kontekst
const GlobalContext = createContext();

// Tworzymy dostawcę kontekstu
export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Tworzymy hook do używania kontekstu
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};