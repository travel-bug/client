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
		<div className="card-pic">
		<img className="card-image" src={props.pic} />

		</div>
		<div className="card-body">
			<div className="location-icon-div">
				<i class="fas fa-heart" id="heart-icon"></i>
			</div>
			<div className="place-div">
				<p className="card-place">{props.place}</p>
			</div>
		</div>
		<div className="card-body">
			<div className="location-icon-div">
				<i className="fas fa-map-marker-alt" id="location-icon"></i>
			</div>
			<div className="place-div">
				<p className="card-place">{props.place}</p>
			</div>
		</div>
    </div>

  );
}

export default Card;