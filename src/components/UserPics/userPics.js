import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import Posts from "../NewPosts/newPosts.json";
import Avatar from "../../images/avatar.png";
import "./userPics.css";


class UserPics extends Component {
    state = {
        pic: Pic,
        posts: Posts
    }

    render() {
        return (
            <div className="user-pics">
            <Container>
            <Col size="lg-12 sm-12 pics">
                <Row>
                    <div className="profile-nav">
                    <span className="profile-nav-tabs">{this.props.title}</span>
                    <span className="profile-nav-tabs">|</span>
                    <span className="profile-nav-tabs">albums</span>
                    <span className="profile-nav-tabs">|</span>
                    <span className="profile-nav-tabs">places</span>
                    </div>
                </Row>
                <Row>
                    {this.state.posts.map(post => (
                    <Card
                        pic={this.state.pic}
                        id={post.id}
                    >
                    </Card>
                    ))}
                </Row>
                </Col>
                
            </Container>
            </div>
        )
    }
}

export default UserPics;