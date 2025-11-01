
import {motion} from "framer-motion";
import aakarsh from "../assets/aakarsh.png";
export default function About(){
  const stack =[
    {label:"Experience" , value:"1 years"},
     {label:"Specialty" , value:"Full Stack"},
      {label:"Focus" , value:"Performance & UX"},
  ]
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ]
  return(
    <section id="about"
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c,i)=>(
       <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animation-pulse ${c}`}/>

        ))}


      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
        initial={{opacity:0 , y:24}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:0.6}}
       viewport={{once:true , amount:0.4}}
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]
          rounded-2xl overflow-hidden shadow-2xl bg:gradient-to-br from-[#272637] to-[#302b63]/20 border border-[#02010b]

          
          "
          whileHover={{scale:1.02}}
          transition={{type:"spring" , stiffness:200 , damping:80}}
          >
            <img src={aakarsh} alt="profile" className="absolute inset-0"/>

          </motion.div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent 
           bg-gradient-to-r from-[#a3bdbc] via-[#1b16c4] to-[#5f5b8d]
            ">
              Aakarsh Kumar</h2>

              <p className="mt-2 text-lg sm:text-xl  font-semibold bg-clip-text text-transparent 
               bg-gradient-to-r from-[#a3bdbc] via-[#1b16c4] to-[#5f5b8d]
              
              ">
                Full Stack Developer
              </p>
              <p className="mt-4  leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl bg-clip-text text-transparent
               bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1704e7]
              
              ">
              I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, 
              React, Next.js, TypeScript, Tailwind CSS, and RestfulAPI— bringing ideas to life from concept to production with robust APIs and smooth interfaces.

              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3  sm:gap-4  max-w-xl">
                {stack.map((item,i)=>(
              <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 pd-4 py-3 text-center"
              initial={{opacity:0 , y:10}}
              whileInView={{opacity:1 , y:0}}
              transition={{delay:0.05*i , duration:0.4}}
              viewport={{once:true , amount:0.3}}
              >
                <div className="text-sm text-blue-300">
                  {item.label}
                </div>
                <div className="text-base text-blue-600 font-semibold ">{item.value}</div>

              </motion.div>

                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="#Projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-400 transition">View Project</a>
                <a href="#Contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white font-semibold px-5 py-3 hover:bg-blue-400 transition">Get in Touch</a>
              </div>
          </div>

        </motion.div>
        <motion.div className="text-center md:text-left"
        initial={{opacity:0 , x:-30}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6}}
        viewport={{once:true , amount:0.4}}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className="text-gray-400 leading-realaxed text-base sm:text-lg">
            B.Tech Computer Science graduate specializing in efficient Full-Stack Development, 
            proficient in a strong focus on Data Structures and Algorithms.

          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            
            Seeking a challenging role to apply optimization skills and technical expertise in developing scalable web
             applications.
            

          </p>

        </motion.div>


      </div>

    </section>
  )
}