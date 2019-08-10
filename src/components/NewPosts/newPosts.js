import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import "./newPosts.css";


class NewPosts extends Component {
    render() {
        return (
            <div className="new-posts">
            <Container>
            <Col size="lg-12 sm-12">
                <Row>
                    <div className="new-posts">
                    <p>new posts</p>
                    </div>
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
        )
    }
}

export default NewPosts;