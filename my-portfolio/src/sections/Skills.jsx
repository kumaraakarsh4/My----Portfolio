import { LiaJava } from "react-icons/lia";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io5";
import { SiHtml5 ,SiPython} from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import {motion} from "framer-motion";









export default function Skills(){

  const skills =[
    {icon:<LiaJava /> , name:"Java"},
    { icon: <SiPython />, name: "Python" },
    { icon: <TbBrandJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <IoLogoCss3 />, name: "CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <SiAngular />, name: "Angular.js" },
    { icon: <RiTailwindCssLine />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiMysql />, name: "My Sql" },
    { icon: <FaGitSquare />, name: "Git" },
    { icon: <FaGithub />, name: "Github" },
     { icon: <SiSpringboot />, name: "Springboot" },


  ];
  const repeated = [...skills , ...skills]
  return(

    <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden" >
   <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-20 blur-[120px] animate-pulse
    "/>
    <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-20 blur-[120px] animate-pulse delay-500"/>
   </div>
   <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
   initial={{opacity:0 , y:-30}}
   whileInView={{opacity:1 , y:0}}
   transition={{duration:0.5 , delay:0.1}}
   >
   My Skills
   </motion.h2>
   <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
   initial={{opacity:0 , y:-10}}
   whileInView={{opacity:1 , y:0}}
   transition={{duration:0.5 , delay:0.1}}
   >
    Modern Applications | Modern Technologies

   </motion.p>
  <div className="relative w-full overflow-hidden">
    <motion.div className="flex gap-10 text-6xl text-[#1cd8d2]">
      {repeated.map((s,i)=>(
        <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]"
        aria-label={s.name}
        title={s.name}
        
        >
          <span className="hover:scale-125 transition-transform duration-300">{s.icon}</span>
          <p className="text-sm">
            {s.name}
          </p>

        </div>
      ))}

    </motion.div>

  </div>


    </section>
  )
}