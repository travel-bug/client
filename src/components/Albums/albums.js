import React from "react";
// import CardBtn from "../CardBtn/cardbtn";
import "./albums.css";
function Albums(props) {
  return (
    <div className="card">
		<div className="album-div">
		    <img className="album-image" src={props.pic} />
		</div>
    </div>

  );
}

export default Albums;