import React from "react";
import Bug from "../../images/bug_icon.png";
import "./logo.css";

function Logo() {
    return <a class="navbar-brand" href="/">
            <img src={Bug} className="bug-logo" alt="Logo" />
            </a>
    
}

export default Logo;