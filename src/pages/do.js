import React from "react";
import Navbar from "../components/Navbar/navbar";
import Image from "../images/Project3_do.jpg";

function Do() {
    return (
        <div>
            <Navbar 
                backgroundImage={Image}
                placeholder="let's do this..."
            />
        </div>
    )
}

export default Do;