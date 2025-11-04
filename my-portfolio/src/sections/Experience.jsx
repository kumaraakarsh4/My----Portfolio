import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Experience Data ---
const EXPERIENCE_DATA = [
  {
    title: "WEB DEVELOPMENT INTERN",
    company: " Cognizant Virtual Internship | 2024",
    description: "Focused on front-end development, specifically designing and implementing responsive userinterfaces using React and Tailwind CSS.Participated in Agile development cycles and contributed to structured code reviews, ensuringadherence to quality standards.Gained practical experience in resolving front-end bugs and optimizing component loadingtimes.",
    layoutPosition: "right-top", // Card will be on the right side
  },
  {
    title: "WEB DEVELOPMENT INTERN",
    company: "Accenture Virtual Internship | 2024 – 2025",
    description: "In this internship, I gained valuable hands-on experience and exposure to various aspects of web development.",
    layoutPosition: "left-top", // Card will be on the left side
  },
  
];

// --- Spacing Constant ---
const ITEM_SPACING_PX = 500; // Pixels vertical distance between each timeline item

// --- Timeline Item Component (Updated for Vertical Scroll) ---
const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);

  // CALCULATE VERTICAL POSITION (spacing of 500px, starts after some initial padding)
  const verticalPosition = (index * ITEM_SPACING_PX) + 200; 

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
    // If left-top, start from the left (-50), if right-top, start from the right (50)
    data.layoutPosition === 'left-top' ? -50 : (data.layoutPosition === 'right-top' ? 50 : 0),
    0
  ]);

  // Base classes for the card
  let cardClasses = "absolute w-[350px] p-6 bg-[#161a29] rounded-xl shadow-lg border border-gray-700/50 min-h-[160px] transform";

  // --- Positioning Logic relative to the vertical line ---
  switch (data.layoutPosition) {
    case 'left-top': // Card positioned on the left of the center line
      cardClasses += " right-[40px] top-1/2 -translate-y-1/2"; 
      break;
    case 'right-top': // Card positioned on the right of the center line
      cardClasses += " left-[40px] top-1/2 -translate-y-1/2"; 
      break;
    case 'bottom-center': // Fallback to right side if layoutPosition is ambiguous
      cardClasses += " left-[40px] top-1/2 -translate-y-1/2"; 
      break;
    default:
      cardClasses += " left-[40px] top-1/2 -translate-y-1/2";
  }

  return (
    // This outer motion.div establishes the vertical scroll point for each item.
    <motion.div
      ref={itemRef}
      className="absolute h-1 w-full" // h-1 for scroll tracking point
      style={{ 
        top: verticalPosition, // Vertical positioning down the scroll container
        zIndex: EXPERIENCE_DATA.length - index,
      }} 
    >
      {/* The Dot on the Timeline (positioned on the central line) */}
      <motion.div 
        className="absolute w-5 h-5 bg-white rounded-full z-20 border-4 border-gray-600"
        style={{
            left: '50%', 
            transform: 'translateX(-50%)',
            scale: useTransform(itemScrollProgress, [0, 1], [0.8, 1.2]),
        }}
      />

      {/* The Experience Box (Card) */}
      <motion.div
        className={cardClasses}
        style={{ scale, opacity, x: xTransform }} 
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
  
  // Calculate total scroll height needed
  const totalHeight = (EXPERIENCE_DATA.length * ITEM_SPACING_PX) + 400; // Extra padding for start/end points

  // Get the vertical scroll progress of the main container (to draw the line)
  const { scrollYProgress: containerScrollYProgress } = useScroll({ target: containerRef });

  // Define the Growing Line Transform (scaleY)
  // This draws the line from top (0) to bottom (1) as the user scrolls.
  const lineScaleY = useTransform(containerScrollYProgress, [0, 1], [0, 1]);


  return (
    <div className="bg-black min-h-screen text-white pt-20 pb-40">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
      
      {/* Scrollable Container (Defines the total vertical scroll area) */}
      <div 
        ref={containerRef} 
        className="relative mx-auto max-w-[1200px] py-10" // Added vertical padding
        style={{ height: `${totalHeight}px` }} 
      >
        
        {/* Sticky Timeline Bar (The visible part: line + dots) */}
        <div className="sticky top-0 h-screen flex justify-center">
            
            {/* The Background (Gray) Vertical Timeline Line - CHANGED w-0.5 to w-0.25 */}
            <div 
                className="absolute w-0.25 h-full bg-gray-600 z-10"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            ></div> 
            
            {/* The Foreground (White) Animated Line - CHANGED w-0.5 to w-0.25 */}
            <motion.div 
                className="absolute w-0.25 h-full bg-white z-10 origin-top"
                style={{ 
                    scaleY: lineScaleY, // Animates the height from 0 to 1
                    left: '50%', 
                    transform: `translateX(-50%) scaleY(${lineScaleY})`, // Apply scaleY correctly
                }} 
            />
        </div>
        
        {/* Container for the items, which are positioned vertically down the scroll */}
        <div className="absolute top-0 w-full h-full">
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