import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-full bg-background-secondary border border-border hover:bg-background-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${className}`}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 