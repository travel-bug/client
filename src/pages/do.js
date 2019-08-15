import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_do.jpg";
import NewPosts from "../components/NewPosts/newPosts";
// import {Container, Col, Row} from "../components/Grid/grid";


function Do() {
    return (
        <div>
            <Jumbotron 
                backgroundImage={Image}
                picTitle="photo by: "
                photographer="chris burke"
                locationTitle="location: "
                locationName="second city"
            />
            <NewPosts 
                title="do this..."
            />
        </div>
    )
}

export default Do;