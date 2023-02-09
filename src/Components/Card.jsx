import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

// Function component that displays a card component with information about a cocktail
export default function Card({ id, name, image, category }) {
  return (
    <>
      {/* Main card component */}
      <article className="Card">
        {/* Top section of the card, displaying the image */}
        <div className="CardTop">
          <img className="Img" src={image} alt={name} />
        </div>
        {/*  Body section of the card, displaying the title and category  */}
        <div className="CardBody">
          <h3 className="Title">{name}</h3>
          <p className="Text" style={{ fontWeight: "bold" }}>
            {category}
          </p>
        </div>
        {/*  Link to the detailed information about the cocktail */}
        <Link to={`/cocktail/${id}`} className="btn-link Btn">
          Details
        </Link>
      </article>
    </>
  );
}
