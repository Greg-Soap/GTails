import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import "../styles/main.scss";
import "../styles/Cocktail.scss";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
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
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="Cocktail">
        <Link className="Btn" to="/">
          back home
        </Link>
        <div className="Wrapper">
          <img className="Img" src={image} alt={name}></img>
          <div className="Info">
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
              {ingredients.map((item, index) => {
                return item ? (
                  <span className="DrinkData" key={index}>
                    {" "}
                    {item}
                  </span>
                ) : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
