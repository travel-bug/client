import React, { Component } from "react";
import "./profileJumbotron.css";
import { Row, Col, Container } from "../Grid/grid";
import EditProfileModal from "../EditProfileModal/editProfileModal";


class ProfileJumbotron extends Component {
	state = {
		editBtnClicked: false
	}

	displayEditProfileModal = () => {
		this.setState({
			editBtnClicked: true
		})
	}

	clearEditProfileModal = () => {
		this.setState({
			editBtnClicked: false
		})
	}
	render(props){

	return (
		<div className="profile-jumbotron text-center">
			<Container fluid>
				<Row>
					<Col size="lg-4 md-6 sm-12">
						<div className="profile-pic-div">
							<img className="p-pic" src={this.props.profilePic}></img>
							{/* <span className="fas fa-user-circle" id="profile-pic-blank"></span> */}
						</div>
					</Col>
					<Col size="lg-4 md-6 sm-12 info">
						<Row>
							<Col size="12">
							<div className="user-info">
								<p>name: <strong>{this.props.firstName} {this.props.lastName}</strong></p>
								<p>username: <strong>{this.props.username}</strong></p>
							</div>
							</Col>
						</Row>
						<Row>
							<Col size="12">
							<div className="user-post-info">
								<p>albums: <strong>{this.props.numOfAlbums}</strong></p>
								<p>pics: <strong>{this.props.numOfPics}</strong></p>
							</div>
							<div>
								<button className="edit-btn" onClick={this.displayEditProfileModal}>edit</button>
							</div>
							</Col>
						</Row>		
					</Col>
				</Row>
			</Container>
			{this.state.editBtnClicked ? <EditProfileModal
				clearModal={this.clearEditProfileModal}
			/>
			: null}
		</div>
	);
	}
}

export default ProfileJumbotron;
