import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // 🟢 FIX 1: Added motion import
// IMPORTANT: Replace this path with the actual path to your astronaut image
import astronautImage from '../assets/Astra.png'; 
import ParticlesBackground from "../components/ParticlesBackground";

// --- EmailJS Configuration ---
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key

// --- Framer Motion Variants for Button ---
const glowVariants = {
  initial : {scale:1 , y:0 , filter : "drop-shadow(0 0 rgba(0,0,0,0))"},
  hover: {
    scale: 1.05 , y: -3, // Adjusted scale slightly for button feel
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition : {type: "spring" , stiffness: 300 , damping :15}
  },
  tap: {scale: 0.95 , y: 0 , transition : {duration:0.08}}
};


export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Send email using EmailJS
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email Sent:', result.text);
                setStatus('success');
                form.current.reset(); // Clear form on success
            }, (error) => {
                console.log('Email Error:', error.text);
                setStatus('error');
            });
    };

    const renderStatusMessage = () => {
        switch (status) {
            case 'sending':
                return <p className="text-blue-400 mt-4 text-center lg:text-left">Sending message...</p>;
            case 'success':
                return <p className="text-green-400 mt-4 text-center lg:text-left">Message sent successfully! 🚀</p>;
            case 'error':
                return <p className="text-red-400 mt-4 text-center lg:text-left">Failed to send message. Please try again.</p>;
            default:
                return null;
        }
    };

    return (
        // 🟢 FIX 2A: Added 'relative' to the section container
        <section className="bg-black text-white min-h-screen py-16 relative overflow-hidden"> 
            
            {/* 🟢 FIX 2B, 2C & 3: Glow/Blur Effect Container */}
            <div className="absolute inset-0">
                <div 
                    className="absolute -top-32 -left-32
                    w-[70vw] sm:w-[50vw] md:w-[40vw]
                    h-[70vw] sm:h-[50vw] md:h-[40vw]
                    max-w-[500px] max-h-[500px]
                    rounded-full
                    bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                    opacity-30 sm:opacity-20 md:opacity-10
                    blur-[100px] sm:blur-[130px] md:blur-[150px]
                    animate-pulse z-20" // z-20 keeps it below the content
                ></div>
            </div>

            {/* 🟢 Particles Background Layer (z-index 1) */}
            <ParticlesBackground />
            
            {/* 🟢 FIX 2B: Main Content Container (z-index 10) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center relative z-10"> 
                
                {/* --- Left Column: Contact Form --- */}
                <div className="w-full lg:w-1/2 p-4"> 
                    <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
                    
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        
                        {/* 1. Name Input */}
                        <div>
                            <label htmlFor="user_name" className="block text-gray-300 mb-1 font-semibold">*Your Name</label>
                            <input
                                type="text" id="user_name" name="user_name" placeholder="Your Name" required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* 2. Email Input */}
                        <div>
                            <label htmlFor="user_email" className="block text-gray-300 mb-1 font-semibold">*Your Email</label>
                            <input
                                type="email" id="user_email" name="user_email" placeholder="Your Email" required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* 3. Service Needed Dropdown */}
                        <div>
                            <label htmlFor="service_needed" className="block text-gray-300 mb-1 font-semibold">*Service Needed</label>
                            <select
                                id="service_needed" name="service_needed" required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 appearance-none transition duration-200"
                            >
                                <option className="bg-[#1d1d27] text-white" value="Web Development">Web Development</option>
                                <option className="bg-[#1d1d27] text-white" value="Mobile App Development">Mobile App Development</option>
                                <option className="bg-[#1d1d27] text-white" value="Design & UI/UX">Design & UI/UX</option>
                                <option className="bg-[#1d1d27] text-white" value="Consulting">Consulting</option>
                            </select>
                        </div>
                        
                        {/* 4. Budget Input */}
                        <div>
                            <label htmlFor="budget" className="block text-gray-300 mb-1 font-semibold">Your Budget</label>
                            <input
                                type="text" id="budget" name="budget" placeholder="Enter your budget"
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* 5. Idea/Description Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-1 font-semibold">Explain Your Idea</label>
                            <textarea
                                id="message" name="message" rows="4" placeholder="Explain your idea..." required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            ></textarea>
                        </div>

                        {/* Submit Button (Now uses Framer Motion) */}
                        <motion.button
                            type="submit"
                            variants={glowVariants} // Use the defined variants
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200"
                            disabled={status === 'sending'}
                        >
                            Send Message
                        </motion.button>
                    </form>
                    {renderStatusMessage()}
                </div>

                {/* --- Right Column: Astronaut Illustration --- */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end relative"> 
                    <img
                        src={astronautImage}
                        alt="Astronaut playing guitar on the moon"
                        className="relative w-full max-w-sm z-10 hidden lg:block"
                        style={{ filter: 'drop-shadow(0 0 15px rgba(120, 120, 255, 0.4))' }}
                    />
                </div>
            </div>
        </section>
    );
}