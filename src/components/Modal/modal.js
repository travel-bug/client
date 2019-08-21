import React, { Component} from "react";
import "./modal.css";
import LoginForm from "../LoginForm/loginForm";
import SignUpForm from "../SignUpForm/signUpForm";
import AuthService from "../../utilities/auth";

class Modal extends Component {

    state = {
        login: true,
        signUp: false,
        username: "",
        password: ""
    }
    
    displaySignUpForm = () => {
        this.setState({
            login: false,
            signUp: true
        })
    }

    displayLoginForm = () => {
        this.setState({
            login: true,
            signUp: false
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(this.state.username, this.state.password);
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

    render() {
        return (
            
            <div className="modal">
                <div id="result" className="modal-content" >
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="forms">
                        {this.state.login ? <LoginForm 
                        displaySignUpForm={this.displaySignUpForm}
                        loginSubmit={this.loginSubmit}
                        />
                        : null}

                        {this.state.signUp ? <SignUpForm 
                        displayLoginForm={this.displayLoginForm}
                        /> 
                        : null}
                    </div>
                            
                </div>
                
            </div>
        )
    }

}


export default Modal;