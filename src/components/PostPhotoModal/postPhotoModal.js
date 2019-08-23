import React, { Component} from "react";
import "./postPhotoModal.css";
import AuthService from "../../utilities/auth";
import DataService from "../../utilities/data";


class PostPhotoModal extends Component {

    state = {
        login: true,
        signUp: false,
        username: "",
        password: "",
        newPic: "",

    }
    
    displaySignUpForm = () => {
        this.setState({
            login: false,
            signUp: true
        })
    }

    displayLoginForm = () => {
        this.setState({
            login: true,
            signUp: false
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        };

    loginSubmit = () => {
        console.log(this.state.username + " " + this.state.password);
        AuthService.sendSigninRequest({
            username: this.state.username, 
            password: this.state.password,
        })
            .then(res => this.setState({ 
                login: false 
            }))
            .catch(err => console.log(err));
        };

        consoleLog = ()=>{
           let newPicToPost = {
                image: this.state.newPic,
                content: this.state.content,
            }
            DataService.newPost()
        }

        
    render() {

        return (
            
            <div className="modal">
                <div id="result" className="modal-content" >
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClick}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <h3>photo goes here</h3>
                        <input type="file" name="newPic" accept="image/*" capture="environment" onChange={this.handleInputChange}/>
                        
                    </div>
                    <div>
                    <input className="form-control my-2 my-sm-0 place-input" type="text" placeholder="enter a location" aria-label="Location" value={this.state.place} onChange={this.handleInputChange}/>
                    <input className="form-control my-2 my-sm-0 comment-input" type="text" placeholder="enter a comment" aria-label="Comment" value={this.state.content} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <button onClick={this.consoleLog}>
                            <span>post</span>
                        </button>
                    </div>
                            
                </div>
                
            </div>
        )
    }
}

export default PostPhotoModal;