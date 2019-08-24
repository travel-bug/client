import React, { Component } from "react";
import Image from "../images/chicago.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";
import NewPosts from "../components/NewPosts/newPosts";
import AllPosts from "../components/NewPosts/allPosts.js";

// import PubSub from "../utilities/pubsub";
// import {NOTIF} from "../utilities/constants";
// import DataService, { TopPostsAll } from "../utilities/data";

class Home extends Component {
    state = {
        Posts: AllPosts,
        searchInput: "",
        searchName: "searchInput"
    }

    // componentDidMount() {
    //     PubSub.subscribe(NOTIF.TOP_POSTS, this, this.getPosts)
    //     DataService.getTopPosts();
    // }

    // componentWillUnmount() {
    //     PubSub.unsubscribe(NOTIF.TOP_POSTS, this)
    // }

    // getPosts = () => {
    //     console.log(TopPostsAll);
    //     this.setState({
    //         newPosts: TopPostsAll
    //     })
        
    // }



    render(){
        return (
            <div>
                <Jumbotron 
                    backgroundImage={Image}
                    picTitle="photo by: "
                    photographer="mike zapata"
                    locationTitle="location: "
                    locationName="logan square"
                    // handleInputChange={this.handleInputChange}
                    // searchInput={this.state.searchInput}
                    // searchName={this.state.searchName}
                    // searchSubmit={this.searchSubmit}
                />
                <NewPosts 
                    title="new posts"
                    Posts={this.state.Posts}
                />
            </div>
        )
    }
}


export default Home;