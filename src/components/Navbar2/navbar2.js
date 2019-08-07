import React, { Component } from 'react';
import Logo from "../Logo/logo";
import NavTabs from "../NavTabs/navTabs.js";
import LoginPic from "../LoginPic/loginPic";
import Avatar from "../../images/avatar.png";
import Tabs from "../NavTabs/navTabs.json";
import "./navbar2.css";

class Navbar2 extends Component {
    state = {
        Tabs,
        pic: Avatar
    }
    render() {
        return (
            <div className="navbar-content">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#">
                        <Logo/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                        {this.state.Tabs.map(Tab => (
                            <NavTabs
                                id={Tab.id}
                                key={Tab.id}
                                title={Tab.title}
                            />
                        ))}
                            <LoginPic 
                                src={this.state.pic}
                            />
                        </ul>
                        {/* <SearchBar /> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar2;
