'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MailchimpForm from './MailchimpForm';
import Image from 'next/image';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-200 px-6 relative overflow-hidden"
      >
        {/* Animated gradient background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 relative w-full flex justify-center"
          >
            {/* Bubble effect behind logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[504px] md:h-[242px] bg-blue-900/30 backdrop-blur-xl border border-blue-400/20 shadow-2xl shadow-blue-900/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
            </div>
            
            <Image 
              src="/Jeani-Logo-08_04_25.png" 
              alt="Jeani Logo" 
              width={400}
              height={150}
              priority={true}
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto relative z-10"
            />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-100 mb-12 sm:mb-16 leading-relaxed"
          >
            The future of movement starts here.
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative text-blue-950 font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-blue-900/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-100/30 backdrop-blur-xl border border-cyan-100/40 shadow-2xl shadow-blue-900/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              <span className="relative z-10">Join the movement</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      <MailchimpForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero; 