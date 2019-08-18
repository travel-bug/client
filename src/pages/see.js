import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_see.jpg";
import NewPosts from "../components/NewPosts/newPosts";
import PubSub from "../utilities/pubsub";
import {NOTIF} from "../utilities/constants";
// import DataService from "../utilities/data";
// import {Container, Col, Row} from "../components/Grid/grid";

class See extends Component {
    state = {
        pic: [],
        id: "",
        profilePic: "",
        person: "",
        likes: "",
        place: ""
    }

    // componentDidMount() {
    //     DataService.getTopSeePosts(response)
    //     .then(
    //         this.setState({
                
    //         })

    //     )
    // }

    // componentWillUnmount() {
    //     PubSub.unsubscribe(NOTIF.SIGN_IN, this)
    // }
    render(){
        return (
            <div>
                <Jumbotron 
                    backgroundImage={Image}
                    picTitle="photo by: "
                    photographer="anne coleman"
                    locationTitle="location: "
                    locationName="merchandise mart"
                />
                <NewPosts 
                    title="see this..."
                    pics={this.state.pics}
                    id={this.state.id}
                    profilePic={this.state.profilePic}
                    person={this.state.person}
                    likes={this.state.likes}
                    place={this.state.place}
                />
            </div>
        )
    }
}

export default See;