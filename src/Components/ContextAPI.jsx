import React, { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import { useCallback } from "react";

// Constants
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

// App Provider Component
const AppProvider = ({ children }) => {
  // State Definition
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("a");

  // Fetch function
  const FetchCocktail = useCallback(async () => {
    setLoading(true);
    try {
      // make an API call to get the cocktails data
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const newData = data.drinks;
      if (newData) {
        // map over the newData and format it
        const newCocktails = newData.map((item) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strCategory,
            strDrinkThumb,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            category: strCategory,
            glass: strGlass,
            type: strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [search]);

  // useEffect hook to call the FetchCocktail function whenever the search state changes
  useEffect(() => {
    FetchCocktail();
  }, [search, FetchCocktail]);

  // return the context provider component with the loading, search, setSearch and cocktails states
  return (
    <AppContext.Provider value={{ loading, search, setSearch, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// Exports
export { AppContext, AppProvider };
