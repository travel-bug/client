import React, { Component } from 'react';
import "./loginSignUp.css";

class LoginSignUp extends Component {
    
    render(props) {
        return(
            <div className="login-div">
                <li className="nav-item login">
                    <a className="nav-link login" onClick={this.props.onClick}>
                    {this.props.loggedInName}
                    </a>
                </li>
             
            </div>
        )
    }  
}

export default LoginSignUp;