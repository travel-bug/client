import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_home.jpg";

function Home() {
    return (
        <div>
            <Navbar 
                backgroundImage={Image}
                placeholder="let's go places..."
            />
        </div>
    )
}

export default Home;