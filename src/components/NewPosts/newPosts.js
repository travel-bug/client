import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import Posts from "../NewPosts/newPosts.json";
import Avatar from "../../images/avatar.png";
import "./newPosts.css";


class NewPosts extends Component {
    state = {
        profilePic: Avatar,
        pic: Pic,
        posts: Posts
    }

    render() {
        return (
            <div className="new-posts">
            <Container>
            <Col size="lg-12 sm-12">
                <Row>
                    <div className="posts-title">
                    <p>{this.props.title}</p>
                    </div>
                </Row>
                <Row>
                    {this.state.posts.map(post => (
                    <Card
                        pic={this.state.pic}
                        id={post.id}
                        profilePic={this.state.profilePic}
                        person={post.person}
                        likes={post.likes}
                        place={post.place}
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

export default NewPosts;