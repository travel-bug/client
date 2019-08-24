import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Avatar from "../../images/avatar.png";
import PubSub from "../../utilities/pubsub";
import { NOTIF } from "../../utilities/constants";
import "./loginPic.css";

class LoginPic extends Component{

    render(){
    return  (        
        <Link to='/profile'>
            <span className="fas fa-user-circle" id="nav-blank-user"></span>
            <img className="logged-in-pic" src={this.props.profilePic} style={{display: this.props.loggedInPicDisplay}}></img>
        </Link>
        
    )
    }
}

export default LoginPic;