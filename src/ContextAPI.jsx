import React, { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  //State Definition

  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("a");
  //Fetch function

  const FetchCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const newData = data.drinks;
      if (newData) {
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
  useEffect(() => {
    FetchCocktail();
  }, [search, FetchCocktail]);

  return (
    <AppContext.Provider value={{ loading, search, setSearch, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
//Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
