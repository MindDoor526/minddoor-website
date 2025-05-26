import React from "react";

const About = () => {
    return(
        <div className="flex flex-col mt-10 ml-10 mr-10 bg-gradient-to-r from-gray-200 to-gray-300 h-auto">
            <div className="ml-10 mb-10">
                <p className="mt-10 text-6xl font-bold text-blue-900">About</p>
            </div>
            <div className="ml-10 mr-10 mb-10">
                <p className="text-4xl text-start">MindDoor grew out of my own journey to find clarity and intention in life. I'm building MindDoor to share the ideas and insights that have helped me, in hopes of supporting others on their paths to self discovery.</p>
                <p className="text-4xl font-semibold mt-10">-Founder</p>           
            </div>
        </div>
    )
}

export default About