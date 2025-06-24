'use client';
import { motion } from 'framer-motion';

const ProductPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-slate-800 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See Jeani in Action</h2>
          <p className="text-gray-300">Sophisticated technology designed for the way you move. See your data like never before.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10"
        >
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 font-mono">[Product Demo Video / App Preview]</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview; 