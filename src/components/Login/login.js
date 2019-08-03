import React, {Component} from "react";
import Avatar from "../../images/avatar.png";
import { Row } from "../Grid/grid";
import "./login.css";

class Login extends Component {

    render(props){
        return ( 
            <div>
                <Row>
                <li className="nav-item login">
                    <a className="nav-link login">
                    login/sign up
                    </a>
                </li>
                <div className="avatar-div">
                    <img className="avatar-img" src={Avatar} alt="Avatar"></img>
                </div>
                </Row>
            </div>
        
        )
    }
}

export default Login;