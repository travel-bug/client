import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid/grid";


export default class ProfileCard extends Component {

  render(props) {
    return (
        <Container className="profile-container">
            <div className="profile-card mb-3">
                <div className="row no-gutters">
                    <Col size="lg-4 md-4 sm-12">
                        <img src={this.props.profilePic} className="card-img" alt="..." />
                    </Col>
                    <Col size="lg-8 md-8 sm-12">
                        <div className="profile-info">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </Col>
                </div>
            </div>
        </Container>
    );
  }
}
