import React from "react";
// import CardBtn from "../CardBtn/cardbtn";
import "./card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.image})`
      }}
    >
    </div>
  );
}

export default Card;