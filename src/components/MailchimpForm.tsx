'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface MailchimpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailchimpForm = ({ isOpen, onClose }: MailchimpFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const url = form.action;
    const formData = new FormData(form);

    try {
      await fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
    } catch (error) {
      console.error('Mailchimp submission error:', error);
    }

    setStatus('submitted');

    setTimeout(() => {
      onClose();
      // Reset state after the modal has closed
      setTimeout(() => setStatus('idle'), 500);
    }, 2000);
  };
  
  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus('idle'), 500);
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-blue-900/40 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl shadow-blue-900/20"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-blue-100/80 hover:text-cyan-50 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status !== 'submitted' ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl text-cyan-50 mb-2">Join the Movement</h2>
              <p className="text-blue-100/80">
                Stay updated on product drops, athlete stories, and early access.
              </p>
            </div>

            <form
              action="https://jeanihealth.us22.list-manage.com/subscribe/post?u=3cb9967c1aec4a8b9595ac78c&id=1d61bb0704&f_id=0084c2e1f0"
              method="post"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="FNAME"
                  placeholder="First Name"
                  disabled={status === 'submitting'}
                  className="w-full bg-white/5 border border-blue-400/20 text-cyan-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-blue-200/70 disabled:opacity-50"
                />
                <input
                  type="text"
                  name="LNAME"
                  placeholder="Last Name"
                  disabled={status === 'submitting'}
                  className="w-full bg-white/5 border border-blue-400/20 text-cyan-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-blue-200/70 disabled:opacity-50"
                />
              </div>
              <input
                type="email"
                name="EMAIL"
                placeholder="Email Address *"
                required
                disabled={status === 'submitting'}
                className="w-full bg-white/5 border border-blue-400/20 text-cyan-50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-blue-200/70 disabled:opacity-50"
              />

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_3cb9967c1aec4a8b9595ac78c_1d61bb0704" tabIndex={-1} defaultValue="" />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-cyan-50 py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <div className="w-16 h-16 bg-cyan-100/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
            <h2 className="text-3xl text-cyan-50 mb-2">Thank You!</h2>
            <p className="text-blue-100/80">You&apos;re on the list. We&apos;ll be in touch soon.</p>
            <p className="text-sm text-blue-200/70 mt-4">
              We respect your privacy and will never share your email. 
              You&apos;re signing up for the official Jeani newsletter, not a third-party service.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MailchimpForm; 