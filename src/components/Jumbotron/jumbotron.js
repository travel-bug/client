import React from "react";
import "./jumbotron.css";
import SearchBar from "../SearchBar/search";
function Jumbotron(props) {
  return (
    <div className="jumbotron text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {/* <img src={props.image} className="jumbotron-image" /> */}
      <h3>the BUG</h3>
      <SearchBar />
    </div>
  );
}

export default Jumbotron;