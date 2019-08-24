import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_do.jpg";
import NewPosts from "../components/NewPosts/newPosts";
import DoPosts from "../components/NewPosts/doPosts.js";
// import DataService, { TopPostsDo } from "../utilities/data";
// import PubSub from "../utilities/pubsub";
// import { NOTIF } from "../utilities/constants";


class Do extends Component {
    state = {
        Posts: DoPosts,
    }

    // componentDidMount() {
    //     PubSub.subscribe(NOTIF.TOP_DO_POSTS, this, this.getDoPosts)
    //     DataService.getTopDoPosts();
    // }

    // componentWillUnmount() {
    //     PubSub.unsubscribe(NOTIF.TOP_DO_POSTS, this)
    // }

    // getDoPosts = () => {
    //     console.log(TopPostsDo);
    //     this.setState({
    //         Posts: TopPostsDo
    //     })
        
    // }
    render(){
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
                    Posts={this.state.Posts}
                />
            </div>
        )
    }
}

export default Do;