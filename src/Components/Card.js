import React from "react";
import star from "../star.png";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "ONLINE") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.img} alt={props.item.name} className="card--image" />
      <div className="card--stats">
        <img src={star} alt=" " className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">{props.item.stats.reviewCount}</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p>
        <span className="card-price ">{props.item.price}</span>
      </p>
    </div>
  );
}

export default Card;
