import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_see.jpg";

function See() {
    return (
        <div>
            <Navbar 
                backgroundImage={Image}
                placeholder="let's see the world..."
            />
        </div>
    )
}

export default See;