import React from 'react';
import { Link } from "react-router-dom";
import "./navTabs.css";

function NavTabs(props) {

    return (
        <div>
            <li className={"nav-tab-" + props.id}>
                <Link
                    to={props.route}
                    className={window.location.pathname === props.route ? "nav-link active"  : "nav-link-" + props.id} onClick={props.onClick}
                    >
                    {props.title}
                </Link>
            </li>
        </div>
    )
        
}

export default NavTabs;
