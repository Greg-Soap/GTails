import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";
const Card = ({ id, name, image, glass, category, type }) => {
  return (
    <React.Fragment>
      <div className="Card">
        <div className="CardTop">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="CardBody">
          <h3 className="Title">{name}</h3>
          <p className="Text" style={{ fontWeight: "bold" }}>
            {category}
          </p>
          <p className="Text">{glass}</p>

          <p className="Text" style={{ fontWeight: "200" }}>
            {type}
          </p>
        </div>
        <Link to={`/cocktail/${id}`} className="btn-link btn">
          Details
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Card;
