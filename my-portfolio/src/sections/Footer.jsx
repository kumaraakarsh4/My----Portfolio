import React from 'react';
// 1. Importing the necessary icons from react-icons
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
// 2. Importing motion for animations
import { motion } from "framer-motion";

// --- Social Data (Using your data) ---
const socialLinks = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/home" },
  { Icon: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/aakarsh-kumar-612760356/" },
  { Icon: FaGithub, label: "Github", href: "https://github.com/kumaraakarsh4" },
];

// --- Framer Motion Variants for Glow Effect ---
const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
};


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Footer container with sufficient padding and relative positioning for background
    <footer className="w-full bg-black text-white py-16 px-4 relative overflow-hidden">
      
      {/* --- Background Gradient Effect Layer (z-0) --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Left Green/Teal Glow */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-500/20 to-transparent blur-3xl"></div>
        {/* Right Blue Glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent blur-3xl"></div>
      </div>
      
      {/* --- Content Wrapper (z-10 to stay above background) --- */}
      <div className="relative z-10 text-center mx-auto max-w-4xl">
        
        {/* 1. Name */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text 
            bg-gradient-to-r from-[#1b39bd] via-[#1b16c4] to-[#090819] drop-shadow-l">
         Aakarsh Kumar
        </h1>
        
        {/* 2. Divider Line (Blue-Teal Gradient) */}
        <div className="relative w-20 h-1 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
          <div className="absolute inset-0 bg-black/50 mx-auto w-1/3"></div> 
        </div>
        
        {/* 3. Social Icons (Integrated with motion and glow variants) */}
        <div className="flex justify-center gap-5 text-2xl md:text-3xl mb-6">
          {socialLinks.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              rel="noopener noreferrer"
              // Applying Framer Motion variants
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-500 transition-colors duration-200" // Base color for icons
            >
              <Icon/>
            </motion.a>
          ))}
        </div>
        
        {/* 4. Quote/Motto */}
        <p className="text-gray-300 italic mb-8">
          "Success is when preparation meets opportunity."
        </p>
        
        {/* 5. Copyright */}
        <p className="text-xs text-gray-500  text-transparent bg-clip-text   bg-gradient-to-r from-[#a3bdbc] via-[#1b16c4] to-[#5f5b8d] ">
          © {currentYear} Aakarsh Kumar. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}