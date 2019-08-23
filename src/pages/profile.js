import React, { Component } from "react";
import ProfilePic from "../images/profile_clark.jpg";
import ProfileJumbotron from "../components/ProfileJumbotron/profileJumbotron";
import UserPics from "../components/UserPics/userPics";
// import {Container, Col, Row} from "../components/Grid/grid";
import PubSub from "../utilities/pubsub";
import { NOTIF } from "../utilities/constants";
import { User } from '../utilities/auth';

class Profile extends Component {
    state = {
        profilePic: ProfilePic,
        firstName: "clark",
        lastName: "alms",
        username: "clark.alms",
        numOfAlbums: "12",
        numOfPics: "43"  

    }
    componentDidMount(handleSignIn) {
        PubSub.subscribe(NOTIF.SIGN_IN, this, handleSignIn)
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.SIGN_IN, this)
    }

    handleSignIn = () => {
        console.log(User);
        this.setState({
            loggedInName: User.username
        })
    }
    render() {
        return (
            <div>
                <ProfileJumbotron 
                    profilePic={this.state.profilePic}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    username={this.state.username}
                    numOfAlbums={this.state.numOfAlbums}
                    numOfPics={this.state.numOfPics}    
                />
                <UserPics />
            </div>
        )
    }
}

export default Profile;
