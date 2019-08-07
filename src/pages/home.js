import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_home.jpg";
import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";
import Pic from "../images/chicago_bean.jpg";

class Home extends Component {
    state ={
        pic: "",
        username: "",
        password: ""
    }
  
//   loginSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };


    render() {
        return (
        //     <div>
        //     <Navbar 
        //         backgroundImage={Image}
        //         placeholder="let's go places..."
        //     />
        //     <div className="new-posts">
        //     <Container>
        //     <Col size="lg-12 sm-12">
        //         <Row>
        //             <h1>new posts</h1>
        //         </Row>
        //         <Row>
        //             <Card
        //                 image="../images/avatar.png"
        //             >
        //             Hello
        //             </Card>
        //         </Row>
        //         </Col>
                
        //     </Container>
        //     </div>
        // </div>
            <div>
                <Navbar 
                    backgroundImage={Image}
                    placeholder="let's go places..."
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