import React from 'react';
import { Row, Col } from "../Grid/grid";
import Clark from "../../images/profile_clark.jpg";

const TheCreators = () => {
    return (
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
    );
}

export default TheCreators;
