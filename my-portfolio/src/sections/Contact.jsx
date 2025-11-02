import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import astronautImage from '../assets/Astra.png'; 

// Replace these placeholders with your actual EmailJS IDs
const SERVICE_ID = 'YOUR_SERVICE_ID'; 
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    const renderStatusMessage = () => {
        switch (status) {
            case 'sending':
                return <p className="text-blue-400 mt-4">Sending message...</p>;
            case 'success':
                return <p className="text-green-400 mt-4">Message sent successfully! 🚀</p>;
            case 'error':
                return <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>;
            default:
                return null;
        }
    };

    return (
        <section className="bg-black text-white min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
                
                {/* 1. --- Left Column: Contact Form --- */}
                {/* This is the first div, so it appears on the left */}
                <div className="w-full lg:w-1/2 p-4"> 
                    <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
                    
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        
                        {/* Name Input */}
                        <div>
                            <label htmlFor="user_name" className="block text-gray-300 mb-1 font-semibold">*Your Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="user_email" className="block text-gray-300 mb-1 font-semibold">*Your Email</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* Service Needed Dropdown */}
                        <div>
                            <label htmlFor="service_needed" className="block text-gray-300 mb-1 font-semibold">*Service Needed</label>
                            <select
                                id="service_needed"
                                name="service_needed"
                                required
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500 appearance-none transition duration-200"
                            >
                                <option className="bg-[#1d1d27] text-white" value="Web Development">Web Development</option>
                                <option className="bg-[#1d1d27] text-white" value="Mobile App Development">Mobile App Development</option>
                                <option className="bg-[#1d1d27] text-white" value="Design & UI/UX">Design & UI/UX</option>
                                <option className="bg-[#1d1d27] text-white" value="Consulting">Consulting</option>
                            </select>
                        </div>
                        
                        {/* Budget Input */}
                        <div>
                            <label htmlFor="budget" className="block text-gray-300 mb-1 font-semibold">Your Budget</label>
                            <input
                                type="text"
                                id="budget"
                                name="budget"
                                placeholder="Enter your budget"
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                            />
                        </div>

                        {/* Idea/Description Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-1 font-semibold">Explain Your Idea</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Explain your idea..."
                                className="w-full px-4 py-3 bg-[#1d1d27] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200"
                            disabled={status === 'sending'}
                        >
                            Send Message
                        </button>
                    </form>
                    {renderStatusMessage()}
                </div>

                {/* 2. --- Right Column: Astronaut Illustration --- */}
                {/* This is the second div, so it appears on the right */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end relative"> 
                    <div className="absolute inset-0 bg-black overflow-hidden z-0">
                        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `url(${astronautImage})` }}>
                        </div>
                    </div>
                    
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