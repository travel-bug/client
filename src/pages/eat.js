import React from "react";
import Image from "../images/Project3_eat.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";
import NewPosts from "../components/NewPosts/newPosts";
// import {Container, Col, Row} from "../components/Grid/grid";


function Eat() {
    return (
        <div>
            <Jumbotron 
                backgroundImage={Image}
                picTitle="photo by: "
                photographer="clark alms"
                locationTitle="location: "
                locationName="molly's cupcakes"
            />
            <NewPosts 
                title="eat this..."
            />
        </div>
    )
}

export default Eat;