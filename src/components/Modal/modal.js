import React, { Component} from "react";
import "./modal.css";
import Image from "../../images/avatar.png";

class Modal extends Component {

    state = {
        display: "inline-block"
    }

    // clearModal = (event) => {
    //     const modal = document.querySelector(".modal");
    //     if(event.target == modal){
    //         this.setState({display: "none"})
    //     }
    // }
    clearModal = () => {
            this.setState({display: "none"})
        
    }

    render() {
        return (
            <div class="modal" style={{display: `${this.state.display}`}}>
            
                <div id="result" class="modal-content" >
                    <div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.clearModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="login-content">
                            login or sign up
                    </div>
                    <div className="image-div">
                    <img className="login-image" src={Image}></img>
                    </div>
                </div>
            </div>
        )
    }

}


export default Modal;