import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Image from "../images/Project3_see.jpg";
import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";
import Pic from "../images/chicago_bean.jpg";


function See() {
    return (
        <div>
        <Jumbotron 
            backgroundImage={Image}
        />
        <div className="new-posts">
        <Container>
        <Col size="lg-12 sm-12">
            <Row>
                <Col size="lg-4">
                    <h1>new posts</h1>
                </Col>
            </Row>
            <Row>
                <Card pic={Pic} />
            </Row>
            </Col>
            
        </Container>
        </div>
    </div>
    )
}

export default See;