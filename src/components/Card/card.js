import React from "react";
// import CardBtn from "../CardBtn/cardbtn";
import "./card.css";
// import Avatar from "../../images/avatar.png";
function Card(props) {
  return (
    <div className="card">
		<img className="card-image" src={props.pic} />
		<div className="card-body">
			<p className="card-place">chicago</p>
			<p className="card-username">clark alms</p>
		</div>
    </div>

  );
}

export default Card;