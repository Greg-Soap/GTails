import React from "react";
import Card from "./Card";
import "../styles/main.scss";
import { useGlobalContext } from "../ContextAPI";
import Loader from "./Loader";
const Cards = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="Page">
        <h2 className="page-text">no cocktails matched your search criteria</h2>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="Cards">
        {cocktails.map((cocktail) => {
          const { id } = cocktail;
          return <Card key={id} {...cocktail} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Cards;
