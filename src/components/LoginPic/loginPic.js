import React from "react";
import "./loginPic.css";

function LoginPic(props){
    return  (
        // <img className="nav-login-pic" src={props.src}></img>
        <div className="nav-login-pic">
            <a class="profile-btn" href="/profile">
            <span className="fas fa-user-circle" id="nav-login-pic"></span>
            <img className="logged-in-pic" src={props.img}></img>
            </a> 
        </div>
    )
}

export default LoginPic;