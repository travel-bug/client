import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_home.jpg";
// import {Container, Col, Row} from "../components/Grid/grid";
import Card from "../components/Card/card";

class Home extends Component {
    state ={
        image: ""
    }
    render() {
        return (
            <div>
                <Navbar 
                    backgroundImage={Image}
                    placeholder="let's go places..."
                />
                <h1>Hello World</h1>
                    <Card
                        image="../images/avatar.png"
                    >
                    Hello
                    </Card>
            </div>
        )
    }
}


export default Home;