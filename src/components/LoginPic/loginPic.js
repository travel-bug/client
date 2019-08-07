import React from "react";
import "./loginPic.css";

function LoginPic(props){
    return (    
        <img className="nav-login-pic" src={props.src}></img>
    )
}

export default LoginPic;