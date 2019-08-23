import React, { Component} from "react";
import "./postPhotoModal.css";
import AuthService from "../../utilities/auth";
import DataService from "../../utilities/data";


class PostPhotoModal extends Component {

    state = {
        newPic: null,
        place: "",
        content: "",
        category: ""

    }
    
    handleImageFile = event => {
        
        const picPath = event.target.files;
        this.setState({
            newPic: picPath
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        };

        consoleLog = ()=>{
            console.log(this.state.newPic, this.state.content, this.state.place, this.state.category);
           let newPicToPost = {
                image: this.state.newPic,
                content: this.state.content,
                place_name: this.state.place,
                category: this.state.category
            }
            DataService.newPost(newPicToPost);
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
                        <input type="file" name="newPic" accept="image/*" capture="environment" onChange={this.handleImageFile}/>
                        
                    </div>
                    <div>
                    <input className="form-control my-2 my-sm-0 place-input" type="text" name="place" placeholder="enter a location" aria-label="Location" value={this.state.place} onChange={this.handleInputChange}/>
                    <input className="form-control my-2 my-sm-0 comment-input" type="text" name="content" placeholder="enter a comment" aria-label="Comment" value={this.state.content} onChange={this.handleInputChange}/>
                    <input className="form-control my-2 my-sm-0 category-input" type="text" name="category" placeholder="enter see eat or do" aria-label="Comment" value={this.state.category} onChange={this.handleInputChange}/>
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