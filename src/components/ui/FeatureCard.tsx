import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

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
  const { dyslexiaMode } = useTheme();

  return (
    <motion.div
      className={`feature-item ${dyslexiaMode ? 'p-5' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 25px -5px rgba(var(--color-primary), 0.1)',
        borderColor: 'rgba(var(--color-secondary), 0.5)'
      }}
    >
      <div className="feature-icon">{icon}</div>
      <div>
        <h3 className={`font-semibold ${dyslexiaMode ? 'text-xl mb-3' : 'text-lg mb-2'}`}>{title}</h3>
        <p className={`text-foreground-secondary ${dyslexiaMode ? 'text-base' : 'text-sm'}`}>{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;