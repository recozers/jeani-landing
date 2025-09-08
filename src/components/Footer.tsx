'use client';
import { useState } from 'react';
import MailchimpForm from './MailchimpForm';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="py-12 md:py-16 bg-blue-950">
        <div className="max-w-7xl mx-auto px-6 text-center text-cyan-100/80">
          <p className="text-lg text-cyan-50 mb-2 md:mb-4">Jeani</p>
          <p className="mb-6 md:mb-8 text-sm md:text-base">The future of movement starts here.</p>
          <div className="flex justify-center space-x-6 md:space-x-8 text-sm">
            <a href="#" className="hover:text-cyan-100 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-100 transition-colors">Terms</a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hover:text-cyan-100 transition-colors"
            >
              Contact
            </button>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-blue-300/60">© 2024 Jeani. All rights reserved.</p>
        </div>
      </footer>
      <MailchimpForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer; 