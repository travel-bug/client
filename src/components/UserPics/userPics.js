import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import Posts from "../NewPosts/newPosts.json";
import Avatar from "../../images/avatar.png";
import Albums from "../Albums/albums";
import "./userPics.css";


class UserPics extends Component {
    state = {
        pic: Pic,
        posts: Posts,
        albums: false,
        pics: true
    }

    showPics = () => {
        this.setState({
            pics: true,
            albums: false
        })
    }

    showAlbums = () => {
        this.setState({
            pics: false,
            albums: true
        })
    }

    render() {
        return (
            <div className="user-pics">
                <Container>
                
                    <Row>
                        <Col size="lg-12 sm-12 pics">
                            <div className="profile-nav">
                                <button className="profile-nav-tabs pics" onClick={this.showPics}>pics</button>
                                <button className="profile-nav-tabs albums" onClick={this.showAlbums}>albums</button> 
                                <button className="profile-nav-tabs places" onClick="">places</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.posts.map(post => (
                            <Col size="lg-4 md-6 sm-12 pics">
                                {this.state.pics ? <Card
                                pic={this.state.pic}
                                id={post.id}
                                />
                                : null}
                                {this.state.albums ? <Albums 
                                pic={this.state.pic}
                                id={post.id}
                                />
                                : null}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserPics;