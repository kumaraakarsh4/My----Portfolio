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
  return(

    <section id="skills" className="h-1/2 w-full pb-8 flex-col items-center justify-center relative bg-pink-700 text-white overflow-hidden" >
   <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-graident-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-20 blur-[120px] animate-pulse
    "/>
    <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-graident-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
    opacity-20 blur-[120px] animate-pulse delay-500"/>
   </div>
    </section>
  )
}