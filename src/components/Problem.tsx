'use client';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

const StatCard = ({ number, label, description }: StatCardProps) => (
  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl text-cyan-50 mb-4">{number}</h2>
    <p className="text-blue-100/80">{label}</p>
    <p className="text-blue-200/70 mt-2">{description}</p>
  </div>
);

const Problem = () => {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-cyan-50 mb-4">The Hidden Cost of Sports Injuries</h2>
          <p className="text-blue-100/80">Most injuries are preventable, but current methods fall short.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <StatCard 
              number="70%" 
              label="Predictable"
              description="Of non-contact injuries show predictive patterns beforehand."
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatCard 
              number="6 Months" 
              label="Recovery Time"
              description="Average recovery time, a season-ending duration for many."
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StatCard 
              number="$8.6B" 
              label="Annual Cost"
              description="Annual cost of sports injuries, indicating a massive-scale problem."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem; 