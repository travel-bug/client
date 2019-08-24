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
		<div className="likes-body">
			<div className="heart-icon-div">
				<i class="fas fa-heart" id="heart-icon"></i>
			</div>
			<div className="likes-div">
				<p className="card-likes">{props.likes}</p>
			</div>
		</div>
		<div className="place-body">
			<div className="place-icon-div">
				<i className="fas fa-map-marker-alt" id="place-icon"></i>
			</div>
			<div className="place-div">
				<p className="card-place">{props.place}</p>
			</div>
			<div className="category-div">
			{/* <span className="hashtag">@</span> */}
				<i class="fas fa-hashtag hashtag"></i>
				<span className="category">{ props.category}</span>
			</div>
		</div>
    </div>

  );
}

export default Card;