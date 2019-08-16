import React, { Component } from 'react';
import Image from "../../images/avatar.png";
import AuthService from "../../utilities/auth";
import "./loginForm.css";

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        };

    loginSubmit = () => {
        AuthService.sendSigninRequest({
            username: this.state.username, 
            password: this.state.password,
        })
            .then(res => this.setState({ 
                login: false 
            }))
            .catch(err => console.log(err));
        };

    render(props) {
        return (
            <div className="login-content">
                <div className="login-title">
                        login
                </div>
                <div className="image-div">
                <img className="login-image" src={Image}></img>
                </div>
                <div>
                    <input className="username-input" placeholder="username" name="username" type="text" value={this.props.username} onChange={this.props.usernameChange}>
                    </input>
                    <input className="password-input" placeholder="password" name="password" type="password" value={this.props.password} onChange={this.props.passwordChange}>
                    </input>
                </div>
                <div>
                    <button type="button" className="login-btn" onClick={this.loginSubmit}>
                        <span aria-hidden="true">login</span>
                    </button>
                </div>
                <div className="cool-kid">
                    not a cool kid yet?  
                </div>
                <div className="sign-up">
                    <a className="sign-up-link" onClick={this.props.displaySignUpForm}>{" "}sign up</a>
                </div>
            </div>
        )
    }
}


export default LoginForm;