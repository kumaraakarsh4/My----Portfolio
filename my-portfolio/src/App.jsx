import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Conatct from "./sections/Conatct";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";

export default function App(){
  return(
    <div className="realtive gradient text-white">
      <CustomCursor/>
      <ParticlesBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonials/>
      <Conatct/>
      <Footer/>









    </div>
  )
}