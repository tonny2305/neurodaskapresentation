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
    <div className="relative">
      <motion.button
        className={`relative px-8 py-3 rounded-full font-medium bg-gradient-to-r from-[#5B68DF] to-[#36A9E1] text-white overflow-hidden group shadow-lg shadow-blue-500/20 ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-[#4C59D6] to-[#2A9AD8] opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
        <span className="relative flex items-center justify-center gap-2">
          {icon && <span className="text-white">{icon}</span>}
          {text}
          {showChevron && <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />}
        </span>
      </motion.button>
      
      {showChevron && (
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 mt-3"
          initial={{ opacity: 0.7 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ 
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GradientButton;