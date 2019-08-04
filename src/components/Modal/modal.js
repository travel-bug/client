import React, { Component} from "react";
import "./modal.css";
import Image from "../../images/avatar.png";

class Modal extends Component {

    state = {
        display: ""
    }

    // clearModal = (event) => {
    //     const modal = document.querySelector(".modal");
    //     if(event.target == modal){
    //         this.setState({display: "none"})
    //     }
    // }
    // clearModal = () => {
    //         this.setState({
    //             display: "none"
    //         })
        
    // }

    render() {
        return (
            <div className="modal">
                <div id="result" className="modal-content" >
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="login-content">
                            login/sign up
                    </div>
                    <div className="image-div">
                    <img className="login-image" src={Image}></img>
                    </div>
                    <div>
                        <input className="username-input" placeholder="username" type="text">

                        </input>
                        <input className="password-input" placeholder="password" type="password">

                        </input>
                    </div>
                </div>
            </div>
        )
    }

}


export default Modal;