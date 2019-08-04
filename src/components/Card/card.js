import React from "react";
// import CardBtn from "../CardBtn/cardbtn";
import "./card.css";
// import Avatar from "../../images/avatar.png";
function Card(props) {
  return (
    <div className="card">
		<img className="card-image" src={props.image} />
		<div className="card-body">
			<p>chicago</p>
			<p>clark alms</p>
		</div>
    </div>

  );
}

export default Card;