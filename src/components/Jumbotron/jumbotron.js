import React from "react";
import "./jumbotron.css";
import SearchBar from "../SearchBar/search";
import { Row, Col, Container } from "../Grid/grid";


function Jumbotron(props) {
  return (
    <div 
		className="jumbotron text-center" 
		style={{ backgroundImage: `url(${props.backgroundImage})` }}
		>
		<div className="search-bar">
      	<SearchBar 
			  searchDisplay={props.searchDisplay}
		  /> 
		</div>
		<div className="pic-cred">
			<div className="pic-photographer-div">
				<p>{props.picTitle}<strong>{props.photographer}</strong></p>
			</div>
			<div className="pic-location-div">
				<p>{props.locationTitle}<strong>{props.locationName}</strong></p>
			</div>
		</div>
    </div>
  );
}

export default Jumbotron;