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
      	<SearchBar 
			  searchDisplay={props.searchDisplay}
		/> 
		<Row>
		<Col size="lg-3 md-4 sm-4">
		<div className="pic-cred">
			<div className="pic-photographer-div">
				<p>{props.picTitle}<strong>{props.photographer}</strong></p>
			</div>
			<div className="pic-location-div">
				<p>{props.locationTitle}<strong>{props.locationName}</strong></p>
			</div>
		</div>
		</Col>
		</Row>
    </div>
  );
}

export default Jumbotron;