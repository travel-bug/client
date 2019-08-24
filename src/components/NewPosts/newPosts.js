import React, { Component } from 'react';
import Card from "../Card/card";
import { Col, Row, Container } from "../Grid/grid";
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
                    {this.props.Posts.map(post => (
                        
                <Col size="lg-4 sm-12">
                {/* change profilePic to 'this.props.profilePic' when getting from DB */}
                    <Card
                        id={post.id}
                        profilePic={post.profilePic}
                        person={post.person}
                        pic={post.pic}
                        likes={post.likes}
                        place={post.place}
                        category={post.category}
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