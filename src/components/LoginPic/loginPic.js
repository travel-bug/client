import React from "react";
import "./loginPic.css";

function LoginPic(props){
    return  (
            // <img className="nav-login-pic" src={props.src}></img>
            <div className="nav-login-pic">
                <i className="fas fa-user-circle" id="nav-login-pic"></i>
            </div>
    )
}

export default LoginPic;