import React from "react";
// import CardBtn from "../CardBtn/cardbtn";
import "./card.css";
function Card(props) {
  return (
    <div className="card">
		<div className="person-div">
				<img className="profile-pic" src={props.profilePic}></img>
				<p className="card-username">{props.person}</p>
			</div>
		<img className="card-image" src={props.pic} />
		<div className="card-body">
			<div className="place-div">
			<i className="fas fa-map-marker-alt"></i>
				<p className="card-place">{props.place}</p>
			</div>
		</div>
    </div>

  );
}

export default Card;