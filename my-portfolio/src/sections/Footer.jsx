import React from 'react';
// Import your icons here if using react-icons (e.g., FaXTwitter, FaLinkedinIn, FaGithub)

// --- Social Link Data (Customize your URLs here) ---
const socialLinks = [
  {
    icon: 'X', // Placeholder for X/Twitter icon
    url: 'https://twitter.com/yourprofile',
  },
  {
    icon: 'in', // Placeholder for LinkedIn icon
    url: 'https://linkedin.com/in/yourprofile',
  },
  {
    icon: 'GitHub', // Placeholder for GitHub icon
    url: 'https://github.com/yourprofile',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // FIX 1: Increased vertical padding (py-16 instead of py-12) to ensure bottom content has room.
    <footer className="w-full bg-black text-white py-16 px-4 relative overflow-hidden">
      
      {/* --- Background Gradient Effect (Ensured z-0 and low opacity) --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Left Green/Teal Glow */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-500/20 to-transparent blur-3xl"></div>
        {/* Right Blue Glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent blur-3xl"></div>
      </div>
      
      {/* --- Content (FIX 2: Ensure z-10 is high and the wrapper dictates the height) --- */}
      <div className="relative z-10 text-center mx-auto max-w-4xl">
        
        {/* 1. Name */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
         Aakarsh Kumar
        </h1>
        
        {/* 2. Divider Line (Blue-Teal Gradient) */}
        <div className="relative w-20 h-1 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
          <div className="absolute inset-0 bg-black/50 mx-auto w-1/3"></div> 
        </div>
        
        {/* 3. Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition duration-300 transform hover:scale-110 hover:text-teal-400"
              aria-label={link.icon}
            >
              {/* IMPORTANT: Replace the <span> with your actual icon component (e.g., <FaXTwitter />) */}
              <span className="font-semibold">{link.icon}</span> 
            </a>
          ))}
        </div>
        
        {/* 4. Quote/Motto */}
        <p className="text-gray-300 italic mb-8">
          "Success is when preparation meets opportunity."
        </p>
        
        {/* 5. Copyright (This should now be visible due to increased padding) */}
        <p className="text-xs text-gray-500">
          © {currentYear} Aakarsh Kumar. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}