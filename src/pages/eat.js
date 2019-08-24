import React, {Component} from "react";
import Image from "../images/Project3_eat.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";
import NewPosts from "../components/NewPosts/newPosts";
import EatPosts from "../components/NewPosts/eatPosts.js";
// import DataService, { TopPostsEat } from "../utilities/data";
// import PubSub from "../utilities/pubsub";
// import { NOTIF } from "../utilities/constants";




class Eat extends Component {
    state = {
        Posts: EatPosts
    }

    // componentDidMount() {
    //     PubSub.subscribe(NOTIF.TOP_EAT_POSTS, this, this.getEatPosts)
    //     DataService.getTopEatPosts();
    // }

    // componentWillUnmount() {
    //     PubSub.unsubscribe(NOTIF.TOP_EAT_POSTS, this)
    // }

    // getEatPosts = () => {
    //     console.log(TopPostsEat);
    //     this.setState({
    //         newPosts: TopPostsEat
    //     })
        
    // }

    render(){
        return (
            <div>
                <Jumbotron 
                    backgroundImage={Image}
                    picTitle="photo by: "
                    photographer="clark alms"
                    locationTitle="location: "
                    locationName="molly's cupcakes"
                />
                <NewPosts 
                    title="eat this..."
                    Posts={this.state.Posts}
                />
            </div>
        )
    }
}

export default Eat;