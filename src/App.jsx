import React from "react";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProblemSolution from "./components/ProblemSolution";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return(
    <body>
      <header className="sticky top-0">
        <Header/>
      </header>
      <div>
        <HeroSection/>
      </div>
      <div className="flex justify-center items-center">
        <ProblemSolution/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </body>
  )
}

export default App