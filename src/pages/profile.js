import React, { Component } from 'react';
import Clark from "../images/profile_clark.jpg";
import { Col, Row, Container } from "../components/Grid/grid";
import Card from "../components/Card/card";
import ProfileCard from "../components/ProfileCard/profileCard";

class Profile extends Component {

  render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-4 md-12 sm-12">
                        <ProfileCard 
                        profilePic={Clark}
                        />
                    </Col>
                </Row>    
          </Container>
        </div>
    );
  }
}

export default Profile;
