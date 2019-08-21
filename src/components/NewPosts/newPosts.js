import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
import Pic from "../../images/chicago_bean.jpg";
import Posts from "../NewPosts/newPosts.json";
import Avatar from "../../images/avatar.png";
import "./newPosts.css";


class NewPosts extends Component {
  

    render() {
        return (
            <div className="new-posts">
            <Container>
                <Row>
                <Col size="lg-12 sm-12">
                    <div className="posts-title">
                    <p>{this.props.title}</p>
                    </div>
                </Col>
                </Row>
                <Row>
                    {this.props.newPosts.map(post => (
                        
                <Col size="lg-4 sm-12">
                {/* change profilePic to 'this.props.profilePic' when getting from DB */}
                    <Card
                        pics={post.pics_url}
                        id={post.id}
                        // profilePic={post.profilePic}
                        person={post.username}
                        // likes={post.likes}
                        place={post.place_name}
                    >
                    </Card>
                    </Col>
                
                    ))}
                    </Row>
                    
                
                
            </Container>
            </div>
        )
    }
}

export default NewPosts;