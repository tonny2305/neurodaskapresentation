import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  showChevron?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  icon,
  className = '',
  showChevron = false,
}) => {
  return (
    <motion.button
      className={`relative px-8 py-3 rounded-full font-medium bg-gradient-to-r from-indigo-600 to-sky-500 overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-sky-500/80 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      />
      <span className="relative flex items-center justify-center gap-2">
        {icon && <span>{icon}</span>}
        {text}
        {showChevron && <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />}
      </span>
    </motion.button>
  );
};

export default GradientButton;