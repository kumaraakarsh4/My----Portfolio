import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Experience Data ---
// Using specific positions to map to the image layout
const EXPERIENCE_DATA = [
  {
    title: "WEB DEVELOPMENT INTERN",
    company: " Cognizant Virtual Internship | 2022",
    description: "Focused on front-end development, specifically designing and implementing responsive userinterfaces using React and Tailwind CSS.Participated in Agile development cycles and contributed to structured code reviews, ensuringadherence to quality standards.Gained practical experience in resolving front-end bugs and optimizing component loadingtimes.",
    layoutPosition: "left-top", 
  },
  {
    title: "WEB DEVELOPMENT INTERN",
    company: "Accenture Virtual Internship | 2022 – 2023",
    description: "In this internship, I gained valuable hands-on experience and exposure to various aspects of web development.",
    layoutPosition: "bottom-center",
  },
  
];

// --- Timeline Item Component ---

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);

  // We track the scroll progress specifically for this item
  const { scrollYProgress: itemScrollProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.8", "center 0.5"], // Start animation when 80% visible, complete at 50%
  });

  // Scale and opacity transformation for the reveal effect
  const scale = useTransform(itemScrollProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(itemScrollProgress, [0, 1], [0, 1]);
  
  // X-axis movement for the reveal effect (for left/right cards)
  const xTransform = useTransform(itemScrollProgress, [0, 1], [
    data.layoutPosition === 'left-top' ? -50 : (data.layoutPosition === 'right-top' ? 50 : 0),
    0
  ]);

  // Base classes for the card
  let cardClasses = "absolute w-[350px] p-6 bg-[#161a29] rounded-xl shadow-lg border border-gray-700/50 min-h-[160px]";

  // --- Exact Positioning Logic based on image ---
  switch (data.layoutPosition) {
    case 'left-top':
      // Aligned left, positioned above the line. Adjust bottom for exact spacing from dot.
      cardClasses += " right-[calc(50%+40px)] bottom-[calc(100%+30px)]"; 
      break;
    case 'right-top':
      // Aligned right, positioned above the line. Adjust bottom for exact spacing from dot.
      cardClasses += " left-[calc(50%+40px)] bottom-[calc(100%+30px)]"; 
      break;
    case 'bottom-center':
      // Centered, positioned below the line. Adjust top for exact spacing from dot.
      cardClasses += " left-1/2 transform -translate-x-1/2 top-[calc(100%+30px)]"; 
      break;
    default:
      // Fallback or default styling
      cardClasses += " top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
  }

  return (
    // This outer motion.div establishes the vertical scroll point for each item.
    // It's positioned along the scrollable height.
    <motion.div
      ref={itemRef}
      className="absolute h-0" // Important: h-0 to not consume vertical space, just mark a point
      style={{ 
        top: `${index * 50 + 20}vh`, // Vertical spacing for the sticky effect
        width: '100%', 
        // Ensure z-index for correct stacking if cards overlap slightly during animation
        zIndex: EXPERIENCE_DATA.length - index 
      }} 
    >
      {/* The Dot on the Timeline (positioned first so cards overlap it correctly) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-5 h-5 bg-white rounded-full z-20 border-4 border-gray-600 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          scale: useTransform(itemScrollProgress, [0, 1], [0.8, 1.2]), // Dot grows on reveal
        }}
      />

      {/* The Experience Box (Card) */}
      <motion.div
        className={cardClasses}
        style={{ scale, opacity, x: xTransform }} // Apply x-transform for left/right reveal
      >
        <h3 className="text-xl font-bold text-white">{data.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{data.company}</p>
        <p className="text-sm text-gray-300">{data.description}</p>
      </motion.div>
    </motion.div>
  );
};

// --- Main Experience Component ---

export default function Experience() {
  const containerRef = useRef(null);
  
  // Calculate total height needed. Adjusted for more space between items.
  // Each item takes approx 50vh, plus some initial/final padding for scrolling
  const totalHeight = EXPERIENCE_DATA.length * 60; // Increased spacing for a smoother scroll

  return (
    <div className="bg-black min-h-screen text-white pt-20 pb-40">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
      
      {/* Scrollable Container (Defines the total scroll area) */}
      <div 
        ref={containerRef} 
        className="relative mx-auto max-w-[1200px]" // Added max-width to constrain timeline
        style={{ height: `${totalHeight}vh` }} 
      >
        
        {/* Sticky Timeline Bar Container (Stays in viewport while scrolling) */}
        <div className="sticky top-0 h-screen flex justify-center items-center">
          
          {/* The Horizontal Timeline Line */}
          <div className="absolute top-1/2 w-full h-1 bg-gray-600 transform -translate-y-1/2 z-10"></div> {/* w-full for full width */}
          
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