import React, { Component} from "react";
import "./modal.css";
import LoginForm from "../LoginForm/loginForm";
import SignUpForm from "../SignUpForm/signUpForm";

class Modal extends Component {

    state = {
        login: true,
        signUp: false
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