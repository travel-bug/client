import React, { Component } from "react";
import Image from "../images/chicago.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";
import NewPosts from "../components/NewPosts/newPosts";
// import {Container, Col, Row} from "../components/Grid/grid";

function Home() {
    return (
        <div>
            <Jumbotron 
                backgroundImage={Image}
                picTitle="photo by: "
                photographer="mike zapata"
                locationTitle="location: "
                locationName="logan square"
            />
            <NewPosts 
                title="new posts"
            />
        </div>
    )
}


export default Home;