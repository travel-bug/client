import React, { Component } from 'react';
import { Container, Col, Row } from "../Grid/grid";
import Logo from "../Logo/logo";
import "./aboutHeader.css";
import TheCreators from '../AboutContent/theCreators';
import AboutUs from '../AboutContent/aboutUs';

export class AboutHeader extends Component {

    state = {
        title: "about us",
        about: true
    }

    showCreators = () => {
        this.setState({
            title: "the creators",
            about: false
        })
    }

    showAboutUs = () => {
        this.setState({
            title: "about us",
            about: true
        })
    }

    render() {
        return (
                <Container>
                <div className="aboutHeader-top-div">
                    <Row>
                        <Col size="lg-3 left">
                            <div className="about-left-col">
                                <div className="about-nav">
                                    <span>about</span>
                                </div>
                                <div className="about-the-app-div">
                                <a className="about-nav-link" onClick={this.showAboutUs}>the app</a>
                                </div>
                                <div className="about-the-creators-div">
                                <a className="about-nav-link" onClick={this.showCreators}>the creators</a>
                                </div>
                            </div>
                        </Col>

                        <Col size="lg-9 right">
                            <div className="about-right-col">
                                
                                <div className="title-the-bug-div">
                                <Logo />
                                <span className="title-word-the">travel </span>
                                <span className="title-word-bug"> bug</span>
                                </div>
                                <div className="title-about-div">
                                    <span>{this.state.title}</span>
                                    
                                </div>
                                {this.state.about ? <AboutUs />
                                : <TheCreators />}
                                
                                
                            </div>
                        </Col>
                            </Row>
                    
                    
                    </div>
                </Container>
                
            
        );
    }
}

export default AboutHeader;