'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email.includes('@')) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="signup" className="py-24 bg-slate-800 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join the Waitlist</h2>
          <p className="text-gray-300 mb-8">Be the first to know when Jeani is available.</p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
              className="flex-grow bg-slate-700 border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition-colors font-medium disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Join'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="mt-4 text-green-400">Thanks for joining! We'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400">Please enter a valid email address.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default EmailSignup; 