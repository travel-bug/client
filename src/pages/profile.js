import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import ProfilePic from "../images/profile_clark.jpg";
import NewPosts from "../components/NewPosts/newPosts";
import ProfileJumbotron from "../components/ProfileJumbotron/profileJumbotron";
import UserPics from "../components/UserPics/userPics";
// import {Container, Col, Row} from "../components/Grid/grid";
import PubSub from "../utilities/pubsub";
import { NOTIF } from "../utilities/constants";
import { User } from '../utilities/auth';

class Profile extends Component {
    state = {
        something: null
    }
    componentDidMount(handleSignIn) {
        PubSub.subscribe(NOTIF.SIGN_IN, this, handleSignIn)
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.SIGN_IN, this)
    }

    handleSignIn = () => {
        this.setState({
            loggedInName: User.username
        })
    }
    render() {
        return (
            <div>
                <ProfileJumbotron 
                    profilePic={ProfilePic}
                />
                <UserPics 
                    title="pics"
                />
            </div>
        )
    }
}

export default Profile;
