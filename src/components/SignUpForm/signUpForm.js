import React, { Component } from 'react';
import AuthService from "../../utilities/auth";
import "./signUpForm.css";

class SignUpForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        eyecon: "fa-eye",
        login: true,
        passwordType: "password"
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log("firstName:" + this.state.firstName,
            "lastName:" + this.state.lastName,
            "username:" + this.state.username, 
            "password:" + this.state.password,
            "email:" + this.state.email)
        this.setState({
            [name]: value
        });
        };
    signUpSubmit = () => {
        
        AuthService.sendSignupRequest({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username, 
            password: this.state.password,
            email: this.state.email
        })
            .then(res => this.setState({ 
                login: false 
            }))
            .catch(err => console.log(err));
        };

    hidePassword = () => {
           let passwordType = this.state.passwordType
        if (passwordType == "password") {
            this.setState({
                eyecon: "fa-eye-slash",
                passwordType: "text"
            })
            
        } else {
            passwordType = "password"
            this.setState({
                eyecon: "fa-eye",
                passwordType: "password"
            })
            
        }
    }

    render() {
        return (
            <div id="result" className="signup-content" >
                <div className="signup-title">
                        sign up
                </div>
                <div>
                    <input className="firstName-input" placeholder="first name" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange}>
                    </input>
                    <input className="lastName-input" placeholder="last name" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange}>
                    </input>
                    <input className="email-input" placeholder="email" name="email" type="email" value={this.state.email} onChange={this.handleInputChange}>
                    </input>
                    <input className="username-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}>
                    </input>
                    <div className="password-div">
                        <input className="password-input" placeholder="password" name="password" type={this.state.passwordType} value={this.state.password} onChange={this.handleInputChange}>
                        </input>
                        <button className="password-display" onClick={this.hidePassword}>
                        <i class={"fas " + this.state.eyecon}></i>
                        </button>
                    </div>
                </div>
                <div>
                    <button type="button" className="signup-btn" onClick={this.signUpSubmit}>
                        <span aria-hidden="true">sign up</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default SignUpForm;