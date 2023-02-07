import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

export default function Card({ id, name, image, category }) {
  return (
    <>
      <article className="Card">
        <div className="CardTop">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="CardBody">
          <h3 className="Title">{name}</h3>
          <p className="Text" style={{ fontWeight: "bold" }}>
            {category}
          </p>
        </div>
        <Link to={`/cocktail/${id}`} className="btn-link Btn">
          Details
        </Link>
      </article>
    </>
  );
}
