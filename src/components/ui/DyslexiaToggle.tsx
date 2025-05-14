import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { BookOpen } from 'lucide-react';

interface DyslexiaToggleProps {
  className?: string;
}

const DyslexiaToggle: React.FC<DyslexiaToggleProps> = ({ className = '' }) => {
  const { dyslexiaMode, toggleDyslexiaMode } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-full bg-background-secondary border border-border hover:bg-background-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${className}`}
      onClick={toggleDyslexiaMode}
      aria-label={dyslexiaMode ? 'Nonaktifkan mode disleksia' : 'Aktifkan mode disleksia'}
      title={dyslexiaMode ? 'Nonaktifkan mode disleksia' : 'Aktifkan mode disleksia'}
    >
      <BookOpen className={`w-5 h-5 ${dyslexiaMode ? 'text-green-500' : 'text-foreground-secondary'}`} />
      {dyslexiaMode && (
        <span className="sr-only">Mode disleksia aktif</span>
      )}
    </motion.button>
  );
};

export default DyslexiaToggle; 