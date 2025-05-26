import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Header = () => {
    return(
        <div className="flex justify-between items-center min-h-30 w-full flex-wrap bg-white">
            <div className="ml-20 w-20">
                <h1 className="text-blue-900 font-bold text-7xl">MindDoor</h1>
            </div>
            <div className="mr-10 ml-10" >
                <SocialMediaLinks/>
            </div>
        </div>
    )
}

export default Header