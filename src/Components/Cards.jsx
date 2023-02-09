import React from "react";
import Card from "./Card";
import "../styles/main.scss";
import { useGlobalContext } from "./ContextAPI";
import Loader from "./Loader";

// Function component that displays a list of cards with information about cocktails
export default function Cards() {
  // Destructuring the state from the global context
  const { cocktails, loading } = useGlobalContext();

  // If the data is still loading, display the Loader component
  if (loading) {
    return <Loader />;
  }
  // If there are no cocktails that match the search, display a message
  if (cocktails.length < 1) {
    return (
      <div className="Page">
        <h2 className="page-text">no cocktails matches your search</h2>
      </div>
    );
  }
  return (
    <>
      {/* Main section for displaying the cards  */}
      <section className="Cards">
        {/*  Map through the cocktails array and display a card for each one */}
        {cocktails.map((cocktail) => {
          const { id } = cocktail;
          return <Card key={id} {...cocktail} />;
        })}
      </section>
    </>
  );
}
