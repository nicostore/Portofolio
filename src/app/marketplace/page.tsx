"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";

const MarketplacePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
        } transition-colors duration-300`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* Header */}
      <header className="py-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`text-xl text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Coming Soon
        </motion.p>
      </header>

      {/* Dynamic Island Hopper */}
      <motion.section 
        className="fixed bottom-8 left-0 right-0 z-50"
        initial={{ width: "auto" }}
      >
        <motion.div 
          className={`mx-auto w-fit px-6 py-4 rounded-full ${
            isDarkMode 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-black'
          } shadow-lg backdrop-blur-lg`}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex justify-center items-center space-x-6">
            <motion.a 
              href="/gallery"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.1 }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </motion.a>
            <motion.a 
              href="/"
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.3 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
            </motion.a>
            <motion.a 
              href="/marketplace"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.2 }}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>&copy; {new Date().getFullYear()} Niko Yuniar Nabena. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MarketplacePage;
