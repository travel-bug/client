import React from 'react';
import { Row, Col } from "../Grid/grid";
import Clark from "../../images/Clark.jpg";
import Chris from "../../images/Chris.png";
import Anne from "../../images/Anne.JPG";
import Mike from "../../images/Mike.png";


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
                        My name is Clark. You'll never guess who my favorite Superhero is...
                        </p>
                    </div>
                
                    
                    
                </Col>
                <Col size="lg-6 md-6 sm-12">
                <div className="dev-pic-div">
                    <img src={Chris} className="dev-profile-pic" />
                </div>
                <div className="dev-name">
                    <strong>chris burke</strong>
                </div>
                <div className="dev-info">
                        <p>
                        I'm a Nuclear Engineer turned Computer Engineer. My favorite food is Fission Chips.
                        </p>
                    </div>
                    
                </Col>
            
                <Col size="lg-6 md-6 sm-12">
                    <div className="dev-pic-div">
                        <img src={Anne} className="dev-profile-pic" />
                    </div>
                    <div className="dev-name">
                    <strong>anne coleman</strong>
                </div>
                    <div className="dev-info">
                        <p>
                        My last name is Coleman. That makes me "Cooler" than you!
                        </p>
                    </div>
                </Col>
                <Col size="lg-6 md-6 sm-12">
                <div className="dev-pic-div">
                    <img src={Mike} className="dev-profile-pic" />
                </div>
                <div className="dev-name">
                    <strong>mike zapata</strong>
                </div>
                <div className="dev-info">
                        <p>
                        If you want to know what the cool kids are doing, just ask. I have first hand knowledge.
                        </p>
                    </div>
                    
                </Col>
            </Row>

                                </div>
    );
}

export default TheCreators;
