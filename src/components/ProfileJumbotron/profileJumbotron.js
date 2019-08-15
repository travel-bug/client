import React from "react";
import "./profileJumbotron.css";
import { Row, Col, Container } from "../Grid/grid";


function ProfileJumbotron(props) {
	return (
		<div className="jumbotron text-center">
		<Container fluid>
			<Row>
				<Col size="4">
					<div className="profile-pic-div">
						<img className="profile-pic" src={props.profilePic}></img>
					</div>
				</Col>
				<Col size="4">
					<div className="user-info">
						<p>name: <strong>clark alms</strong></p>
						<p>username: <strong>clark.alms</strong></p>
					</div>
				</Col>
				<Col size="4">
					<div className="user-post-info">
						<p>albums: <strong>10</strong></p>
						<p>posts: <strong>35</strong></p>
					</div>		
				</Col>
			</Row>
			</Container>
		</div>
	);
}

export default ProfileJumbotron;
