import React, { Component } from 'react';
import Logo from "../Logo/logo";
import NavTabs from "../NavTabs/navTabs.js";
import LoginSignUp from "../LoginSignUp/loginSignUp";
import LoginPic from "../LoginPic/loginPic";
import Avatar from "../../images/avatar.png";
import Tabs from "../NavTabs/navTabs.json";
import Modal from "../Modal/modal";
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
        pic: Avatar,
        modal: false,
        loggedInPic: Avatar,
        loggedInName: "login/sign up"
    }

    handleSignIn = () => {
        console.log("handleSignIn called");
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

    clearModal = () => {
        this.setState({
            modal: false
        })
    }

    render() {
        return (
            <div>
            <div className="navbar-content">
            
                <nav className="navbar navbar-expand-lg">
                    <Logo/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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
                            </div>
                            <div className="top-login-pic">
                            {/* <LoginPic 
                                pic={this.state.loggedInPic}
                            /> */}
                            </div>
                        </ul>
                    </div>
                </nav>
               

            </div>
            {this.state.modal ? <Modal 
	            onClick={this.clearModal}
	            /> 
	            : null}
            </div>
        );
    }
}

export default Navbar2;
