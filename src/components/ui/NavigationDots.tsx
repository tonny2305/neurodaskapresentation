import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface NavigationDotsProps {
  sections: string[];
  activeIndex: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ sections, activeIndex }) => {
  const { theme } = useTheme();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          className="group relative flex items-center justify-center w-3 h-24 focus:outline-none"
          onClick={() => scrollToSection(section)}
          aria-label={`Scroll to ${section} section`}
        >
          <span className="absolute right-full mr-3 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-foreground">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
          <motion.div
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index
                ? 'bg-primary shadow-md shadow-primary/50'
                : 'bg-foreground-secondary/30 hover:bg-foreground-secondary/50'
            }`}
            animate={{
              scale: activeIndex === index ? 1.2 : 1
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          {activeIndex === index && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default NavigationDots;