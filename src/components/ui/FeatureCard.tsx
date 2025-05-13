import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="feature-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.1)',
        borderColor: 'rgba(139, 92, 246, 0.5)'
      }}
    >
      <div className="feature-icon">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;