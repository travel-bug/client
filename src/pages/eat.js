import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_eat.jpg";

function Eat() {
    return (
        <div>
            <Navbar 
                backgroundImage={Image}
                placeholder="let's eat..."
            />
        </div>
    )
}

export default Eat;