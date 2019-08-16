import React from 'react';
import {Row} from "../Grid/grid";
import "./loginSignUp.css";

function LoginSignUp(props) {
    
    return (
        <Row>
            <div className="login-div">
                <li className="nav-item login">
                    <a className="nav-link login" onClick={props.onClick}>
                    {props.loggedInName}
                    </a>
                </li>
            </div>
        </Row>
    )
        
}

export default LoginSignUp;