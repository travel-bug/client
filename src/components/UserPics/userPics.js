import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import UserPosts from "../NewPosts/userPosts.js";
import Albums from "../Albums/albums";
import "./userPics.css";


class UserPics extends Component {
    state = {
        pic: Pic,
        posts: UserPosts,
        albums: false,
        picsNav: true
    }

    showPics = () => {
        this.setState({
            picsNav: true,
            albums: false
        })
    }

    showAlbums = () => {
        this.setState({
            picsNav: false,
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
                                {this.state.picsNav ? <Card
                                id={post.id}
                                profilePic={post.profilePic}
                                person={post.person}
                                pic={post.pic}
                                likes={post.likes}
                                place={post.place}
                                category={post.category}
                                />
                                : null}
                                {this.state.albumsNav ? <Albums 
                                pic={post.pic}
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