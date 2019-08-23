import React, { Component } from 'react';
import Logo from "../Logo/logo";
import Avatar from "../../images/avatar.png";
import NavTabs from "../NavTabs/navTabs.js";
import LoginSignUp from "../LoginSignUp/loginSignUp";
import LoginPic from "../LoginPic/loginPic";
import Tabs from "../NavTabs/navTabs.json";
import Modal from "../Modal/modal";
import PostPhotoModal from "../PostPhotoModal/postPhotoModal";
import PubSub from "../../utilities/pubsub";
import { NOTIF } from "../../utilities/constants";

// import { Container, Row, Col } from "../Grid/grid";
import "./navbar2.css";
import { User } from '../../utilities/auth';


class Navbar2 extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {loggedInName: "login/sign up"};
    //     this.handleSignIn = this.handleSignIn.bind(this);
    // }

    state = {
        Tabs,
        modal: false,
        postPhoto: false,
        loggedInName: "login/sign up",
        profilePic: Avatar,
        loggedInPicDisplay: "none"
    }

    handleSignIn = () => {
        this.setState({
            loggedInName: User.username
        })
    }

    componentDidMount() {
        PubSub.subscribe(NOTIF.SIGN_IN, this, this.handleSignIn)
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.SIGN_IN, this)
    }

    displayModal = () => {
        this.setState({
            modal: true
        })
    }

    displayPostPhotoModal = () => {
        this.setState({
            postPhoto: true
        })
    }

    clearModal = () => {
        this.setState({
            modal: false,
            postPhoto: false
        })
    }

    render() {
        return (
            <div>
            <div className="navbar-content">
            
                <nav className="navbar navbar-expand-lg">
                    <Logo/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars navbar-toggler-btn"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        {this.state.Tabs.map(Tab => (
                            <NavTabs
                                id={Tab.id}
                                key={Tab.id}
                                title={Tab.title}
                                route={Tab.route}
                            />
                        ))}
                            <div className="top-login">
                            <LoginSignUp 
                            onClick={this.displayModal} 
                            loggedInName={this.state.loggedInName}
                            />
                            <LoginPic 
                                profilePic={this.state.profilePic}
                                loggedInPicDisplay={this.state.loggedInPicDisplay}
                            />
                            </div>
                        </ul>
                    </div>
                    <div className="post-btn-div" onClick={this.displayPostPhotoModal}>
                        <button className="post-btn">
                            <i class="fas fa-plus"></i>
                            <div>
                                <span className="post-text">post</span>
                            </div>
                        </button>
                    </div>
                </nav>
               

            </div>
            {this.state.modal ? <Modal 
	        onClick={this.clearModal}
	            /> 
	            : null}

            {this.state.postPhoto ? <PostPhotoModal 
            onClick={this.clearModal}
            /> 
            : null}
            </div>
            
        );
    }
}

export default Navbar2;
