import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_see.jpg";
import NewPosts from "../components/NewPosts/newPosts";
// import {Container, Col, Row} from "../components/Grid/grid";

function Profile() {
    return (
        <div>
            <Jumbotron 
                backgroundImage=""
                picTitle=""
                photographer=""
                locationTitle=""
                locationName=""
                searchDisplay="none"

            />
            <NewPosts 
                title="photos"
            />
        </div>
    )
}

export default Profile;
