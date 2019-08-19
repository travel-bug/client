import React, { Component } from 'react';
import { Container, Col, Row } from "../Grid/grid";
import Logo from "../Logo/logo";
import Clark from "../../images/profile_clark.jpg";
import "./aboutHeader.css";

export class AboutHeader extends Component {
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
                                <a className="about-nav-link" onClick="" href="">the app</a>
                                </div>
                                <div className="about-the-creators-div">
                                <a className="about-nav-link" onClick="" href="">the creators</a>
                                </div>
                            </div>
                        </Col>

                        <Col size="lg-9 right">
                            <div className="about-right-col">
                                
                                <div className="title-the-bug-div">
                                <Logo />
                                <span className="title-word-the">the </span>
                                <span className="title-word-bug"> bug</span>
                                </div>
                                <div className="title-about-div">
                                    <span>about us</span>
                                    
                                </div>
                                <div className="about-content-div">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="developers-div">
                                    <Row>
                                        <Col size="lg-6 md-6 sm-12">
                                        
                                        <div className="dev-pic-div">
                                                <img src={Clark} className="dev-profile-pic" />
                                                
                                            </div>
                                        
                                        <div className="dev-name">
                                            <strong>clark alms</strong>
                                        </div>
                                        <div className="dev-info">
                                            
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                        
                                            
                                            
                                        </Col>
                                        <Col size="lg-6 md-6 sm-12">
                                        <div className="dev-pic-div">
                                            <img src={Clark} className="dev-profile-pic" />
                                        </div>
                                        <div className="dev-name">
                                            <strong>chris burke</strong>
                                        </div>
                                        <div className="dev-info">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                            
                                        </Col>
                                    
                                        <Col size="lg-6 md-6 sm-12">
                                            <div className="dev-pic-div">
                                                <img src={Clark} className="dev-profile-pic" />
                                            </div>
                                            <div className="dev-name">
                                            <strong>anne coleman</strong>
                                        </div>
                                            <div className="dev-info">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col size="lg-6 md-6 sm-12">
                                        <div className="dev-pic-div">
                                            <img src={Clark} className="dev-profile-pic" />
                                        </div>
                                        <div className="dev-name">
                                            <strong>mike zapata</strong>
                                        </div>
                                        <div className="dev-info">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </p>
                                            </div>
                                            
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </Col>
                            </Row>
                    
                    
                    </div>
                </Container>
                
            
        );
    }
}

export default AboutHeader;