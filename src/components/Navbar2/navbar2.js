import React, { Component } from 'react';
import Logo from "../Logo/logo";
import NavTabs from "../NavTabs/navTabs.js";
import LoginSignUp from "../LoginSignUp/loginSignUp";
import LoginPic from "../LoginPic/loginPic";
import Avatar from "../../images/avatar.png";
import Tabs from "../NavTabs/navTabs.json";
import Modal from "../Modal/modal";
// import AuthService from "../../utilities/auth";
import "./navbar2.css";


class Navbar2 extends Component {
    state = {
        Tabs,
        pic: Avatar,
        display: "",
        login: false,
        username: "",
        password: ""
    }
    
      handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log("username: " + this.state.username + " password: " + this.state.password);
      };
    
      loginSubmit = () => {
        AuthService.sendSigninRequest({
            username: this.state.username, 
            password: this.state.password
        })
          .then(res => this.setState({ recipes: res.data }))
          .catch(err => console.log(err));
      };
    
    displayModal = () => {
        this.setState({login: true})
    }

    clearModal = event => {
        const modal = document.querySelector(".modal");
        console.log(this.state);
            this.setState({
                display: "none",
                login: false
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
                {this.state.login ? <Modal 
	            onClick={this.clearModal}
                username={this.state.username}
                password={this.state.password}
                usernameChange={this.handleInputChange}
                passwordChange={this.handleInputChange}
                loginSubmit={this.loginSubmit}
	            /> 
	            : null}
            </div>
        );
    }
}

export default Navbar2;
