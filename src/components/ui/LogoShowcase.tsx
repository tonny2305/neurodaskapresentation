import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Logo-logo dari folder public/logos
const logos = [
  {
    id: 'unesa',
    name: 'UNESA',
    image: '/logos/Logo Unesa.png',
    height: 'h-10 md:h-14',
    brightnessDark: 'brightness-125'
  },
  {
    id: 'bem-fip',
    name: 'BEM FIP UNESA',
    image: '/logos/Logo BEM FIP UNESA.png',
    height: 'h-10 md:h-14',
    brightnessDark: 'brightness-110'
  },
  {
    id: 'kabinet',
    name: 'Kabinet',
    image: '/logos/Logo Kabinet.png',
    height: 'h-9 md:h-12',
    brightnessDark: 'brightness-110'
  },
  {
    id: 'stmkg',
    name: 'STMKG',
    image: '/logos/cropped-Stmkg-new.png',
    height: 'h-9 md:h-12',
    brightnessDark: 'brightness-110'
  }
];

const LogoShowcase: React.FC = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Efek animasi untuk logo
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5 // Menunda animasi setelah teks judul
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="w-full flex justify-center pt-2 md:pt-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-4xl w-full backdrop-blur-sm py-2 rounded-lg">
        <p className="text-center text-foreground-secondary text-xs md:text-sm mb-2 font-medium">Didukung oleh:</p>
        <motion.div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {logos.map(logo => (
            <motion.div 
              key={logo.id}
              className="logo-item flex items-center justify-center"
              variants={itemVariants}
              onMouseEnter={() => setHoveredLogo(logo.id)}
              onMouseLeave={() => setHoveredLogo(null)}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className={`${logo.height} w-auto transition-all duration-300 relative px-1`}
              >
                <motion.img 
                  src={logo.image} 
                  alt={`Logo ${logo.name}`} 
                  className={`h-full w-auto object-contain 
                    ${isDarkMode ? `drop-shadow-[0_0_3px_rgba(255,255,255,0.15)] ${logo.brightnessDark}` : 'drop-shadow-[0_0_2px_rgba(0,0,0,0.1)]'}
                    ${hoveredLogo === logo.id ? (isDarkMode ? 'brightness-125' : 'brightness-110') : ''}
                  `}
                  loading="lazy"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredLogo === logo.id ? 1.05 : 1,
                    filter: hoveredLogo === logo.id ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' : 'none'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Tooltip nama logo */}
                <motion.div 
                  className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-background-secondary/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-foreground-secondary whitespace-nowrap shadow-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ 
                    opacity: hoveredLogo === logo.id ? 1 : 0,
                    y: hoveredLogo === logo.id ? 0 : -5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {logo.name}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LogoShowcase; 