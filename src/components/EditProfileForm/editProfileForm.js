import React, { Component } from 'react';
// import AuthService, { User } from "../../utilities/auth";
import PubSub from '../../utilities/pubsub';
import { NOTIF } from '../../utilities/constants';
// import DataService from "../../utilities/data"
import {Row, Col, Container} from "../Grid/grid";
import "./editProfileForm.css";
// import { userInfo } from 'os';

class EditProfileForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        eyecon: "fa-eye",
        passwordType: "password",
        showHidePasswordTitle: "show password"
    }
    componentDidMount() {
        PubSub.subscribe(NOTIF.SIGN_IN, this, this.handleSignIn)
    }

    componentWillUnmount() {
        PubSub.unsubscribe(NOTIF.SIGN_IN, this)
    }

    // handleSignIn = () => {
    //     this.setState({
    //         username: User.username,
    //         firstName: User.firstName,
    //         lastName: User.lastName
    //     })
    // }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        };
    // saveSubmit = () => {
        
    //     DataService.getUserInfo({
    //         firstName: UserInfo.firstName,
    //         lastName: UserInfo.lastName,
    //         username: UserInfo.username, 
    //         password: UserInfo.password,
    //         email: UserInfo.email
    //     })
    //         .then(res => this.setState({ 
    //             login: false, 
    //             firstName: UserInfo.firstName,
    //             lastName: UserInfo.lastName,
    //             username: UserInfo.username, 
    //             password: UserInfo.password,
    //             email: UserInfo.email
    //         }))
    //         .catch(err => console.log(err));
    //     };

    hidePassword = () => {
           let passwordType = this.state.passwordType
        if (passwordType == "password") {
            this.setState({
                eyecon: "fa-eye-slash",
                passwordType: "text",
                showHidePasswordTitle: "hide password"
            })
            
        } else {
            passwordType = "password"
            this.setState({
                eyecon: "fa-eye",
                passwordType: "password",
                showHidePasswordTitle: "show password"
            })
            
        }
    }

    render() {
        return (
            <Container>
            <div id="result" className="profile-edit-content" >
            <Row fluid>
                <Col size="12">
            <div className="profile-title">
                        <span><strong>edit profile info</strong></span>
                </div>
                </Col>
            </Row>
                <Row fluid>
                <Col size="12">
                <div>
                    <div>
                        <span>first name </span>
                        <input className="firstName-input" placeholder="first name" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}>
                        </input>
                    </div>
                    <div>
                        <span>last name </span>
                        <input className="lastName-input" placeholder="last name" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}>
                    </input>
                    </div>
                    <div>
                        <span>email </span>
                        <input className="email-input" placeholder="email" name="email" type="email" value={this.state.email} onChange={this.handleInputChange}>
                    </input>
                    </div>
                    <div>
                        <span>username </span>
                        <input className="username-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}>
                    </input>
                    </div>
                    <div className="password-div">
                        <span>password </span>
                        <input className="password-input" placeholder="password" name="password" type={this.state.passwordType} value={this.state.password} onChange={this.handleInputChange}>
                        </input>
                        <span className="showHideTitle">{this.state.showHidePasswordTitle}</span>
                        <a className="password-display-icon" onClick={this.hidePassword}>
                        <i class={"fas " + this.state.eyecon}></i>
                        </a>
                        
                    </div>
                    
                    
                    
                    
                    
                </div>
                </Col>
                </Row>
                <div>
                    <button type="button" className="save-btn" onClick={this.saveSubmit}>
                        <span aria-hidden="true">save</span>
                    </button>
                </div>
            </div>
            </Container>
        )
    }
}

export default EditProfileForm;