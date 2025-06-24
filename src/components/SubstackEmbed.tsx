'use client';
import { motion } from 'framer-motion';

const SubstackEmbed = () => {
  return (
    <section className="py-24 bg-navy px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">From the Lab</h2>
          <p className="text-gray-300">The latest insights from our research and development.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-navy-light p-8 rounded-lg">
            <iframe 
              src="https://jeani.substack.com/embed" 
              width="100%" 
              height="320" 
              style={{ border: 'none', background: 'transparent' }}
              frameBorder="0" 
              scrolling="no"
              title="Jeani Substack"
              className="rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubstackEmbed; 