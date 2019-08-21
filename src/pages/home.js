import React, { Component } from "react";
import Image from "../images/chicago.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";
import NewPosts from "../components/NewPosts/newPosts";
import PubSub from "../utilities/pubsub";
import {NOTIF} from "../utilities/constants";
import DataService, { TopPostsAll } from "../utilities/data";
// import {Container, Col, Row} from "../components/Grid/grid";

class Home extends Component {
    state = {
        newPosts: []
    }

    componentDidMount() {
        PubSub.subscribe(NOTIF.TOP_POSTS, this, this.getPosts)
        DataService.getTopPosts();
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.TOP_POSTS, this)
    }

    getPosts = () => {
        console.log(TopPostsAll);
        this.setState({
            newPosts: TopPostsAll
        })
        
    }
    render(){
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
                    newPosts={this.state.newPosts}
                />
            </div>
        )
    }
}


export default Home;