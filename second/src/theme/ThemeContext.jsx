import React, { createContext, useState, useCallback, useContext } from 'react';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create the provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Use useCallback to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Optional: a custom hook for accessing the theme quickly
export function useTheme() {
  return useContext(ThemeContext);
}
