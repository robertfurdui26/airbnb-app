import React from "react";
import star from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card--image" />
      <div className="card--stats">
        <img src={star} alt=" " className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">{props.reviewCount}</span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="card-price ">{props.price}</span>
      </p>
    </div>
  );
}

export default Card;
