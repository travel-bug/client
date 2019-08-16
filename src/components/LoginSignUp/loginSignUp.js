import React from 'react';
import {Row} from "../Grid/grid";
import LoginPic from "../LoginPic/loginPic";
import "./loginSignUp.css";

function LoginSignUp(props) {
    
    return (
        
            <div className="login-div">
                <li className="nav-item login">
                    <a className="nav-link login" onClick={props.onClick}>
                    {props.loggedInName}
                    </a>
                </li>
                <LoginPic />
            </div>
            
    )
        
}

export default LoginSignUp;