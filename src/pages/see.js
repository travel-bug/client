import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_see.jpg";
import NewPosts from "../components/NewPosts/newPosts";
import PubSub from "../utilities/pubsub";
import {NOTIF} from "../utilities/constants";
import DataService, { TopPostsSee } from "../utilities/data";

class See extends Component {
    state = {
        newPosts: []
    }

    componentDidMount() {
        PubSub.subscribe(NOTIF.TOP_SEE_POSTS, this, this.getSeePosts)
        DataService.getTopSeePosts();
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.TOP_SEE_POSTS, this)
    }

    getSeePosts = () => {
        console.log(TopPostsSee);
        this.setState({
            newPosts: TopPostsSee
        })
        
    }
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
                    newPosts={this.state.newPosts}
                    
                />
            </div>
        )
    }
}

export default See;