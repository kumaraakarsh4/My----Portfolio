import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Experience Data ---
const EXPERIENCE_DATA = [
  {
    title: "Web Developer",
    company: "Brain Mentors | 2022",
    description: "Worked with team to build high-performance apps, integrated AI features, and improved engagement by 10%.",
    position: "left", // Position relative to the timeline line
  },
  {
    title: "Web Developer Intern",
    company: "Mobisoft Technologies | 2022 – 2023",
    description: "In this internship, I gained valuable hands-on experience and exposure to various aspects of web development.",
    position: "bottom",
  },
  {
    title: "Graduate Engineer",
    company: "HCL Technologies | 2024 – 2025",
    description: "Built the frontend of a GenAI-powered PV Intake Application using Next.js and TypeScript for a U.S life sciences client, enabling automated patient report processing across global regions.",
    position: "right",
  },
];

// --- Timeline Item Component ---

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);

  // We track the scroll progress specifically for this item
  const { scrollYProgress: itemScrollProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.8", "center 0.5"], // Start animation when 80% is visible, complete at 50%
  });

  // Scale and opacity transformation for the reveal effect
  const scale = useTransform(itemScrollProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(itemScrollProgress, [0, 1], [0, 1]);
  
  // Custom transform for the "right" positioned box to move it slightly left-to-right
  const x = data.position === 'right' ? useTransform(itemScrollProgress, [0, 1], [50, 0]) : 0;
  
  // Determine Tailwind classes for placement
  const isLeft = data.position === 'left';
  const isRight = data.position === 'right';
  const isBottom = data.position === 'bottom';
  
   let itemClasses = "absolute w-[calc(50%-50px)] p-6 bg-[#161a29] rounded-xl shadow-lg border border-gray-700/50";
  
  if (isLeft) itemClasses += " top-[-100px] left-0";
  if (isRight) itemClasses += " top-[-100px] right-0";
  if (isBottom) itemClasses += " bottom-[-100px] left-1/2 transform -translate-x-1/2";


  return (
    <motion.div
      ref={itemRef}
      className="absolute h-0 flex justify-center"
     style={{ top: `${index * 30}vh`, width: '100%' }} // Vertical spacing for the sticky effect
    >
      {/* The Experience Box (Card) */}
      <motion.div
        className={itemClasses}
        style={{ scale, opacity, x }}
      >
        <h3 className="text-xl font-bold text-white">{data.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{data.company}</p>
        <p className="text-sm text-gray-300">{data.description}</p>
      </motion.div>
      
      {/* The Dot on the Timeline */}
      <motion.div 
        className="absolute w-5 h-5 bg-white rounded-full z-10 border-4 border-gray-600"
        style={{
          left: isBottom ? '50%' : isLeft ? '50%' : '50%', // Center dot on the line
          transform: isBottom ? 'translate(-50%, 0)' : 'translate(-50%, 0)', 
          // Animate the dot's size or color based on scroll for extra effect
          scale: useTransform(itemScrollProgress, [0, 1], [0.8, 1.2]),
        }}
      />
    </motion.div>
  );
};

// --- Main Component ---

export default function Experience() {
  const containerRef = useRef(null);
  
  // Calculate the total scroll space needed (30vh per item + a buffer)
  const totalHeight = EXPERIENCE_DATA.length * 30 + 100; // 30vh per item + 100vh of padding

  return (
    <div className="bg-black min-h-screen text-white pt-20 pb-40">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
      
      {/* Scrollable Container */}
      <div 
        ref={containerRef} 
        className="relative mx-auto"
        style={{ height: `${totalHeight}vh` }} // Defines the scrollable height
      >
        
        {/* Sticky Timeline Bar Container */}
        <div className="sticky top-0 h-screen flex justify-center items-center">
          
          {/* The Horizontal Timeline Line */}
          <div className="absolute top-1/2 w-4/5 h-1 bg-gray-600 transform -translate-y-1/2"></div>
          
          {/* Mapping through data to create scroll-revealing items */}
          {EXPERIENCE_DATA.map((data, index) => (
            <TimelineItem 
              key={index} 
              data={data} 
              index={index}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}