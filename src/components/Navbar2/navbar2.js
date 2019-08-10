import React, { Component } from 'react';
import Logo from "../Logo/logo";
import NavTabs from "../NavTabs/navTabs.js";
import LoginSignUp from "../LoginSignUp/loginSignUp";
import LoginPic from "../LoginPic/loginPic";
import Avatar from "../../images/avatar.png";
import Tabs from "../NavTabs/navTabs.json";
import Modal from "../Modal/modal";
import AuthService from "../../utilities/auth";
import "./navbar2.css";


class Navbar2 extends Component {
    state = {
        Tabs,
        pic: Avatar,
        modal: false,
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
            <div className="navbar-content">
                <nav class="navbar navbar-expand-lg">
                    <Logo/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                        {this.state.Tabs.map(Tab => (
                            <NavTabs
                                id={Tab.id}
                                key={Tab.id}
                                title={Tab.title}
                                route={Tab.route}
                            />
                        ))}
                            <LoginSignUp onClick={this.displayModal} />
                            <LoginPic src={this.state.pic} />
                        </ul>
                    </div>
                </nav>
                {this.state.modal ? <Modal 
	            onClick={this.clearModal}
	            /> 
	            : null}
            </div>
        );
    }
}

export default Navbar2;
