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
						</div>
					</Col>
					<Col size="lg-4 md-6 sm-12">
						<Row>
							<Col size="12">
							<div className="user-info">
								<p>name: <strong>clark alms</strong></p>
								<p>username: <strong>clark.alms</strong></p>
							</div>
							</Col>
						</Row>
						<Row>
							<Col size="12">
							<div className="user-post-info">
								<p>albums: <strong>10</strong></p>
								<p>pics: <strong>35</strong></p>
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
