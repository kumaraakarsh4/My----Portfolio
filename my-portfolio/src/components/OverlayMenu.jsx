import {motion,AnimatePresence} from "framer-motion"
import { FiX } from "react-icons/fi";

export default function OverlayMenu({isopen , onclose}){
  const ismobile = typeof window !== "undefined"  && window.innerWidth <1024;
  const origin = ismobile ? "95% 8%" : "50% 8%";
  return(
    <AnimatePresence>
   {isopen && (
    <motion.div className="fixed inset-0 flex items-center justify-center z-50"
    
    initial={{clipPath : `circle(0% at ${origin})`}}
    animate={{clipPath: `circle(150% at ${origin})`}}
    exit={{clipPath: `circle(0% at ${origin})`}}
    transition={{duration: 0.7 , ease:[0.4,0,0.2,1]}}
    style={{backgroundColor: "rgba(0,0,0,0.95)"}}
    
    
    
    
    
    
    
    
    
    >
      <button onClick={onclose}
      className="absolute top-6 right-6 text-white text-3xl"
      aria-label="Close Menu"
      >

     <FiX />

     

      </button>

      <ul className="space-y-6 text-center">

        {[
          "Home" ,
          "About" ,
          "Skills" ,
          "Projects" ,
          "Experience" ,
          
          "Contact" , 
        ].map((item,index)=>(
          <motion.li key={item}
          initial={{opacity:0 , y:20}}
          animate={{opacity:1 , y:0}}
          transition={{delay:0.3 + index  *0.1}}
          
          >
            <a href={`#${item.toLowerCase()}`}
            onClick={onclose}
            className="text-4xl text-white font-semibold hover:text-pink-500 transition-colors duration-300"
            >


            {item}

            </a>




          </motion.li>





        ))
          
          
          
          }

      </ul>




    </motion.div>
   )}


    </AnimatePresence>

  )
}