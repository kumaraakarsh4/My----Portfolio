import { useEffect, useMemo, useRef, useState } from "react"
import bmi from "../assets/bmi.png"
import bmi1 from "../assets/bmi1.png"
import guees from "../assets/guess.png"
import guees1 from "../assets/guess1.png"
import clock from "../assets/clock.png"
import clock1 from "../assets/clock1.png"
import {motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"

const useIsMobile =(query = "(max-width :639px)") => {
  const [isMobile , setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(()=>{
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler =(e)=> setIsMobile(e.matches);
    mql.addEventListener('change' , handler);
    setIsMobile(mql.matches);
    return ()=> mql.removeEventListener('change' , handler);

  },[query])
  return isMobile;
}


export default function Projects(){
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);
  const projects = useMemo(()=>[
    {
      title: " Animated Bmi Calculator",
      link: "https://kumaraakarsh4.github.io/BMI----GAME/",
      bgcolor : "#00B5A7",
      image: isMobile ? bmi : bmi1 

    },
      {
        title: "Guess Game",
        link: "https://kumaraakarsh4.github.io/GUESS-......-GAME/",
        bgColor: "#3884d3",
        image: isMobile ? guees : guees1,
      },
      {
        title: "Digital Clock",
        link: "https://kumaraakarsh4.github.io/DIGITAL---CLOCK-/",
        bgColor: "#3F4247",
        image: isMobile ? clock : clock1,
      },
    ],
    [isMobile] // re-run only when `isMobile` changes
  );
  const {scrollYProgress} = useScroll({
    target: sceneRef,
    offset: ["start start " , "end end"]
  })
  // in this we check scroll equation means how much user scroll to change for new project
  const thresholds = projects.map((_,i) => (i+1)/projects.length)
  const [activeIndex , setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress , "change" , (v) => {
    const idx = thresholds.findIndex((t)=> v <= t);
    setActiveIndex(idx === -1 ? thresholds.length -1 : idx)
  });

  const activeProject = projects[activeIndex];


return(
  <section id="projects"
  ref={sceneRef}
  className="relative text-white"
  style={{
    height: `${100*projects.length}vh`,
    backgroundColor: activeProject.bgColor,
    transition : "background-color 400ms ease"
  }}
  
  >


    <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
      <h2 className={`text-3xl font-semibold z-10 text-center ${
        isMobile ? "mt-4" : "mt-8"
        }`}>
        My Work
      </h2>
      <div className={`relative w-full flex-1 flex items-center justify-center${
        isMobile ? "-mt-4" : ""
        }`}>
        {projects.map((projects , idx)=>(
          <div key={projects.title} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"
          }`}
          style={{width:"85%" , maxWidth:"1200px"}}
          >
            <AnimatePresence mode="wait">
              {activeIndex===idx && (
                <motion.h3 key={projects.title}
                initial={{opacity:0 , y:-30}}
                animate={{opacity:1 , y:0}}
                exit={{opacity:0 , y:30}}
                transition={{duration:0.5 , ease: "easeOut"}}
                className={`block text-center text--[clamp(2rem,6vw,5rem)] text-white/90 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 italic font-semibold ${
                  isMobile ? "-mt-24" : ""
                  
                  }`}
                  style={{
                    zIndex: 5,
                    textAlign: isMobile ? "center" : "left" ,
                  }}
                
                >
                  {projects.title}

                </motion.h3>
              )}


            </AnimatePresence>

            <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
              md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
              isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
              }

              h-[62vh] sm:h-[66vh]
              `}
              style={{
                position: "relative",
                zIndex: 10 ,
                
                transition: "filter 250ms ease",
              }}
              
              >
              <img src={projects.image} alt={projects.title}
              className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"

              style={{
                position: "relative",
                zIndex: 10 ,
                filter : "drop-shadow(0,16px 40px rgba(0,0,0,0.65)",
                transition: "filter 200 ms ease",
              }}

              loading="lazy"
              />
            </div>

          </div>
        ))}
      </div>
      <div className={`absolute ${
        isMobile ? "bottom-20" : "bottom-10"
        }`}>
        <a href={activeProject?.link}
        target="_blank"
        className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-400  transition-all "
        aria-label={`View${activeProject?.title}`}
        
        >View Project</a>
      </div>


    </div>

  </section>


)


}