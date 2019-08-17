import React from "react";
import "./profileJumbotron.css";
import { Row, Col, Container } from "../Grid/grid";


function ProfileJumbotron(props) {
	return (
		<div className="profile-jumbotron text-center">
			<Container fluid>
				<Row>
					<Col size="lg-4 md-6 sm-12">
						<div className="profile-pic-div">
							<img className="p-pic" src={props.profilePic}></img>
							{/* <span className="fas fa-user-circle" id="profile-pic-blank"></span> */}
						</div>
					</Col>
					<Col size="lg-4 md-6 sm-12 info">
						<Row>
							<Col size="12">
							<div className="user-info">
								<p>name: <strong>{props.firstName} {props.lastName}</strong></p>
								<p>username: <strong>{props.username}</strong></p>
							</div>
							</Col>
						</Row>
						<Row>
							<Col size="12">
							<div className="user-post-info">
								<p>albums: <strong>{props.numOfAlbums}</strong></p>
								<p>pics: <strong>{props.numOfPics}</strong></p>
							</div>
							</Col>
						</Row>		
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ProfileJumbotron;
