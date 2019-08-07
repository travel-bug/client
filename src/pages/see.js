import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_see.jpg";
import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";
import Hero from "../components/Hero/hero";


function See() {
    return (
        <div>
            <Hero
                backgroundImage={Image}
            />
            <Container>
                <Col size="lg-12 sm-12">
                    <Row>
                        <Col size="lg-12 sm-12">
                            <h1>new posts</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Card
                            image="../images/avatar.png"
                        >
                        Hello
                        </Card>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default See;