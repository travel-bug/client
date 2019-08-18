import React, { Component } from 'react';
import { Container, Col, Row } from "../Grid/grid";
import "./aboutHeader.css";

export class AboutHeader extends Component {
    render() {
        return (
            <div className="aboutHeader-top-div">
                <Container>
                    <Row>
                        <Col size="lg-12">
                            <div className="about-title">
                                <span>the bug</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default AboutHeader;