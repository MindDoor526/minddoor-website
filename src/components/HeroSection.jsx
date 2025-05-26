import React from "react";

const HeroSection = () => {
    return(
        <div className="bg-[url(/assets/HeroBackgroundNew.png)] bg-cover bg-center min-h-150">
            <div className="flex flex-col justify-center items-center">
                <p className="text-8xl text-center font-semibold text-wrap mt-20 text-blue-700">Find the Calm Within Yourself.</p>
                <p className="text-6xl text-center text-gray-700 mr-10 ml-10 mt-20">MindDoor helps you navigate your inner world and cultivate a deeper sense of peace and purpose.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSewbRVfImvrAT773g_V7oN3W0fO7cEzUKaLYzULrXnk2AIQRw/viewform?usp=sharing&ouid=105569821472078853006" target="_blank" rel="noopener noreferrer">                
                <button className="mt-20 mb-20 text-center text-4xl rounded-full bg-cyan-600 h-35 w-80 cursor-pointer hover:bg-cyan-800 transition duration-400" href="https://docs.google.com/forms/d/e/1FAIpQLSewbRVfImvrAT773g_V7oN3W0fO7cEzUKaLYzULrXnk2AIQRw/viewform?usp=sharing&ouid=105569821472078853006">Join the Waitlist</button>
                </a>
            </div>
        </div>
    )
}

export default HeroSection
