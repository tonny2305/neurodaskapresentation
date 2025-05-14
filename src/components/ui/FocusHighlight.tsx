import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const FocusHighlight: React.FC = () => {
  const { dyslexiaMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  // Hanya aktifkan jika mode disleksia aktif
  useEffect(() => {
    if (!dyslexiaMode) {
      setIsActive(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ketika pengguna menekan tombol 'F'
      if (e.key === 'f' || e.key === 'F') {
        setIsActive(prev => !prev);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dyslexiaMode]);

  if (!isActive || !dyslexiaMode) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 20%, black 70%)`,
        WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 20%, black 70%)`
      }}
    />
  );
};

export default FocusHighlight; 