import React, { Component} from "react";
import EditProfileForm from "../EditProfileForm/editProfileForm";
import "./editProfileModal.css";

class EditProfileModal extends Component {

    render(props) {
        return (
            
            <div className="modal">
                <div id="result" className="modal-content" >
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.clearModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="forms">
                        <EditProfileForm />
                    </div>
                            
                </div>
                
            </div>
        )
    }

}


export default EditProfileModal;