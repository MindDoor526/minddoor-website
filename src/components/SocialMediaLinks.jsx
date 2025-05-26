import React from "react";

const SocialMediaLinks = () =>{
    return(
        <div className="flex justify-between items-center">
            <a href="https://facebook.com">
               <img src="../assets/facebook.svg" className="w-20 h-20 "/>
            </a>

            <a href="https://www.linkedin.com/company/minddoor">
               <img src="../assets/linkedin.svg" className="w-20 h-20"/>
            </a>

            <a href="https://reddit.com">
               <img src="../assets/reddit.svg" className="w-20 h-20"/>
            </a>

            <a href="https://www.instagram.com/minddoor526/">
               <img src="../assets/instagram.svg" className="w-20 h-20"/>
            </a>
        </div>
    )
}

export default SocialMediaLinks