import React from 'react';
import "./navTabs.css";

function NavTabs(props) {
    return (
        <div>
            <li className={"nav-tab-" + props.id}>
                <a class="nav-link" href="#">{props.title}</a>
            </li>
        </div>
    )
}

export default NavTabs;
