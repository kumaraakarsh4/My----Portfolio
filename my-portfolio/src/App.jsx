import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Conatct from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Projects";
import Skills from "./sections/Skills";
import React from "react";

export default function App(){
  const [introDone , setIntroDone] = React.useState(false);
  return(
    // the line means when intro false
  <>
  {!introDone && <IntroAnimation onFinish={()=> setIntroDone(true)}/>}

    {introDone && (


    <div className="realtive gradient text-white">
      <CustomCursor/>
       <ParticlesBackground/> 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      
      <Conatct/>
      <Footer/>









    </div>
    )}
    </>
  )
}