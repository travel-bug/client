import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_eat.jpg";
import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";



function Eat() {
    return (
        <div>
            <Container>
                <Col size="lg-12 sm-12">
                    <Row>
                        <h1>new posts</h1>
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

export default Eat;