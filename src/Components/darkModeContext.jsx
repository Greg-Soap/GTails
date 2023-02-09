// Import React and the createContext and useEffect and useState hooks
import { createContext, useEffect, useState } from "react";

// Create a context for the dark mode theme
export const DarkModeContext = createContext();

// A provider component that wraps the children and provides the state and toggle method to its children
export const DarkModeContextProvider = ({ children }) => {
  // State to store the dark mode setting
  const [darkMode, setDarkMode] = useState(
    // Get the dark mode setting from local storage, or false if not available
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // Function to toggle dark mode on or off
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  // Update the local storage with the new dark mode setting
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Return the context provider with the dark mode state and toggle method as value
  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
