import React, { Component} from "react";
import "./modal.css";
import Image from "../../images/avatar.png";

class Modal extends Component {

    render(props) {
        return (
            <div className="modal">
                <div id="result" className="modal-content" >
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="login-content">
                            login
                    </div>
                    <div className="image-div">
                    <img className="login-image" src={Image}></img>
                    </div>
                    <div>
                        <input className="username-input" placeholder="username" name="username" type="text" value={this.props.username} onChange={this.props.usernameChange}>
                        </input>
                        <input className="password-input" placeholder="password" name="password" type="password" value={this.props.password} onChange={this.props.passwordChange}>
                        </input>
                    </div>
                    <div>
                        <button type="button" className="login-btn" onClick={this.props.submitLogin}>
                            <span aria-hidden="true">login</span>
                        </button>
                    </div>
                    <div className="cool-kid">
                        not a cool kid yet?  
                    </div>
                    <div className="sign-up">
                        <a className="sign-up-link">{" "}sign up</a>
                    </div>
                </div>
            </div>
        )
    }

}


export default Modal;