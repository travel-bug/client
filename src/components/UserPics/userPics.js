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
            
                <Row>
                    <Col size="lg-12 sm-12 pics">
                        <div className="profile-nav">
                        <button className="profile-nav-tabs" onClick="">{this.props.title}</button>
                        <span className="profile-nav-tabs">|</span>
                        <button className="profile-nav-tabs" onClick="">albums</button>
                        <span className="profile-nav-tabs">|</span>
                        <button className="profile-nav-tabs" onClick="">places</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12 sm-12 pics">
                        {this.state.posts.map(post => (
                        <Card
                            pic={this.state.pic}
                            id={post.id}
                        >
                        </Card>
                        ))}
                    </Col>
                </Row>
                
                
            </Container>
            </div>
        )
    }
}

export default UserPics;