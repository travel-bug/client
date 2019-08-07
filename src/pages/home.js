import React, { Component } from "react";
import Image from "../images/chicago.jpg";
import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";
import Pic from "../images/chicago_bean.jpg";
import Jumbotron from "../components/Jumbotron/jumbotron";

class Home extends Component {
    state ={
        pic: "",
        username: "",
        password: ""
    }

    render() {
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
                        <Card
                            pic={Pic}
                        >
                        Hello
                        </Card>
                    </Row>
                    </Col>
                    
                </Container>
                </div>
            </div>
        )
    }
}


export default Home;