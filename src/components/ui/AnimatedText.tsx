import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'words' | 'letters' | 'sentence';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  type = 'words'
}) => {
  if (type === 'sentence') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
      >
        {text}
      </motion.div>
    );
  }

  const splitText = type === 'words' ? text.split(' ') : text.split('');
  const separator = type === 'words' ? ' ' : '';

  return (
    <span className={className}>
      {splitText.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: delay + i * duration,
            duration: 0.5
          }}
        >
          {item}
          {i !== splitText.length - 1 && separator}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;