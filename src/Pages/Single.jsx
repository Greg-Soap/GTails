javascript;

import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import "../styles/main.scss";
import "../styles/Cocktail.scss";

// SingleCocktail component for display of the details of a specific cocktail
export default function SingleCocktail() {
  // Use useParams hook to access the id parameter from the URL
  const { id } = useParams();

  // State variables to manage loading status and cocktail details
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  // Use useEffect hook to fetch the cocktail details from the API
  useEffect(() => {
    setLoading(true); // Set loading status to true while fetching the details

    // Async function to fetch the cocktail details
    async function getCocktail() {
      try {
        // Fetch the details from the API using the id parameter
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        // Check if the drinks data exists in the response
        if (data.drinks) {
          // Destructure the response data
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          // Array of ingredients
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          // Object to store the cocktail details
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          // Update the state with the cocktail details
          setCocktail(newCocktail);
        } else {
          setCocktail(null); // Set cocktail details to null if data not found
        }
      } catch (error) {
        console.log(error); // Log the error in the console
      }
      setLoading(false); // Set loading status to false after fetching the details
    }
    getCocktail(); // Call the getCocktail function to fetch the details
  }, [id]);

  // Display the loader if the details are being fetched
  if (loading) {
    return <Loader />;
  }
  // check if there is a cocktail to display
  if (!cocktail) {
    // if there is no cocktail, display a message
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    // if there is a cocktail, destructure the properties from the cocktail object
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;

    return (
      <section className="Cocktail">
        {/* back button to navigate to home page */}
        <Link className="Btn" to="/">
          back home
        </Link>
        <div className="Wrapper">
          {/* display the cocktail image */}
          <img className="Img" src={image} alt={name}></img>
          <div className="Info">
            {/* display cocktail information */}
            <p className="DrinkP">
              <span className="DrinkData">name:</span> {name}
            </p>
            <p className="DrinkP">
              <span className="DrinkData">category:</span> {category}
            </p>
            <p className="DrinkP">
              <span className="DrinkData">info:</span> {info}
            </p>
            <p className="DrinkP">
              <span className="DrinkData">glass:</span> {glass}
            </p>
            <p className="DrinkP">
              <span className="DrinkData">instructions:</span>{" "}
              <span className="Drink">{instructions}</span>
            </p>
            <p className="DrinkP">
              <span className="DrinkData">ingredients:</span>
              <div className="contain">
                // display ingredients using map
                {ingredients.map((item, index) => {
                  return item ? (
                    <span className="DrinkData" key={index}>
                      {" "}
                      {item}
                    </span>
                  ) : null;
                })}
              </div>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
