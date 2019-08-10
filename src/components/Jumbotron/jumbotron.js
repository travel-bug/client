import React from "react";
import "./jumbotron.css";
import SearchBar from "../SearchBar/search";
import { Row, Col, Container } from "../Grid/grid";
function Jumbotron(props) {
  return (
    <div className="jumbotron text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      	
                    <SearchBar />
        
    </div>
  );
}

export default Jumbotron;