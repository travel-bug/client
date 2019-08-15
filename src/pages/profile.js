import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import ProfilePic from "../images/profile_clark.jpg";
import NewPosts from "../components/NewPosts/newPosts";
import ProfileJumbotron from "../components/ProfileJumbotron/profileJumbotron";
// import {Container, Col, Row} from "../components/Grid/grid";

function Profile() {
    return (
        <div>
            <ProfileJumbotron 
                profilePic={ProfilePic}
            />
        </div>
    )
}

export default Profile;
