import React, { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground"
import {motion} from "framer-motion";


export default function Home(){

  const roles = useMemo(()=>["Full stack Web Developer" , " Software Developer  "],[])
const [index , setIndex] = React.useState(0);
const  [subIndex , setSubIndex] = React.useState(0);
const  [deleting , setDeleting] = React.useState(false);

React.useEffect(()=>{
const current = roles[index];
const timeout = setTimeout(()=>{
  // to check the word is typing if current length is greater 
if(!deleting && subIndex < current.length) setSubIndex(v => v+1);
// this line give time to rewrite the roles between two roles
 else if(!deleting && subIndex === current.length) setTimeout(()=> setDeleting(true),1200);
 // this line is for checking that jab tak zero na ho jai tab tak word delete hoata rahe
 else if(deleting && subIndex > 0 ) setSubIndex(v => v-1);
 else if(deleting && subIndex === 0 ) {setDeleting(false); setIndex(p => (p+1) % roles.length);}




} , deleting ? 40:60)

return() => clearTimeout(timeout);

},[subIndex , index , deleting , roles])

  return(
    <section
    id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground/>
      <div className="absolute inset-0">
     <div className="absolute -top-32 -left-32
     w-[70vw] sm:w-[z-50vw] md:w-[40vw]
     h-[70vw] sm:h-[50vw] md:h-[40vw]
     max-w-[500px] max-h-[500px]
     rounded-full
     bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
     opacity-30 sm:opacity-20 md:opacity-10
     blur-[100px] sm:blur-[130px] md:blur-[150px]
     animate-pulse
     
     
     "
     
     
     
     >

     </div>
     <div className="absolute -bottom-0 -right-0
     w-[70vw] sm:w-[z-500vw] md:w-[40vw]
     h-[70vw] sm:h-[50vw] md:h-[40vw]
     max-w-[500px] max-h-[500px]
     rounded-full
     bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
     opacity-30 sm:opacity-20 md:opacity-10
     blur-[100px] sm:blur-[130px] md:blur-[150px]
     animate-pulse delay-500
     
     
     "
     >




     </div>



      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">

            <motion.div
            className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
            initial={{opacity:0 , y:12}}
            animate={{opacity:1 , y:0}}
            transition={{duration:0.6}}
            
            
            >
              <span>
               
                {roles[index].substring(0,subIndex)}
              </span>

              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
              
              style={{height:"1em"}}
              >

              </span>


            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
            initial={{opacity:0, y:40}}
            animate={{opacity:1 ,y:0}}
            transition={{duration:1}}
            >
           Hello I'm 
           <br />
           <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
            Aakarsh Kumar
           </span>

            </motion.h1>

            <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{opacity:0 , y:2}}
            animate={{opacity:1 ,y:0}}
            transition={{delay:0.4 , duration:0.8}}
            
            
            >
             I architect and deploy robust, end-to-end software solutions, seamlessly bridging front-end user experience with scalable back-end logic and systems. 
            </motion.p>

            <div className="">
            <a href="">View My Work</a>
            <a href="">My resume</a>

            </div>



          </div>



        </div>




      </div>




    </section>
  )
}