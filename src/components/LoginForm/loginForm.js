import React, { Component } from 'react';
import Image from "../../images/avatar.png";
import "./loginForm.css";

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    }



    render(props) {
        return (
            <div className="login-content">
                <div className="login-title">
                       <span className="login-title-user">user </span>
                       <span className="login-title-login">login</span>
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
                    <button type="button" className="login-btn" onClick={this.props.loginSubmit}>
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