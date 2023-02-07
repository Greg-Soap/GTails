import React from "react";
import Card from "./Card";
import "../styles/main.scss";
import { useGlobalContext } from "./ContextAPI";
import Loader from "./Loader";
export default function Cards() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="Page">
        <h2 className="page-text">no cocktails matches your search</h2>
      </div>
    );
  }
  return (
    <>
      <section className="Cards">
        {cocktails.map((cocktail) => {
          const { id } = cocktail;
          return <Card key={id} {...cocktail} />;
        })}
      </section>
    </>
  );
}
