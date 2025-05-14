import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import ComparisonSection from './components/sections/ComparisonSection';
import ImpactSection from './components/sections/ImpactSection';
import RoadmapSection from './components/sections/RoadmapSection';
import ClosingSection from './components/sections/ClosingSection';
import Footer from './components/sections/Footer';
import NavigationDots from './components/ui/NavigationDots';
import ThemeToggle from './components/ui/ThemeToggle';
import DyslexiaToggle from './components/ui/DyslexiaToggle';
import AccessibilityPanel from './components/ui/AccessibilityPanel';
import FocusHighlight from './components/ui/FocusHighlight';
import { useScrollPosition } from './hooks/useScrollPosition';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles/globals.css';

const MainApp: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollY } = useScrollPosition();
  const { dyslexiaMode } = useTheme();
  
  const sections = [
    "hero",
    "problem",
    "solution",
    "comparison",
    "impact",
    "roadmap",
    "closing",
    "footer"
  ];
  
  // Determine which section is currently active based on scroll position
  const [activeSection, setActiveSection] = React.useState(0);
  
  useEffect(() => {
    const calculateActiveSection = () => {
      const sectionPositions = sectionsRef.current.map(section => {
        return section?.offsetTop || 0;
      });
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollY >= sectionPositions[i] - window.innerHeight / 2) {
          setActiveSection(i);
          break;
        }
      }
    };
    
    calculateActiveSection();
  }, [scrollY]);
  
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      {/* Skip Link untuk aksesibilitas */}
      <a href="#hero" className="skip-to-content">
        Langsung ke konten utama
      </a>
      <a href="#navigation" className="skip-to-content">
        Langsung ke navigasi
      </a>
      
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
        <NavigationDots 
          sections={sections} 
          activeIndex={activeSection} 
        />
      </div>
      
      <div className="fixed top-5 right-16 z-50 flex gap-3">
        <DyslexiaToggle />
        <ThemeToggle />
      </div>
      
      {dyslexiaMode && (
        <div className="fixed top-20 right-16 z-50 bg-yellow-100 text-yellow-800 p-2 rounded-lg shadow-md text-sm flex items-center">
          <span>Mode ramah disleksia aktif</span>
        </div>
      )}
      
      <AccessibilityPanel />
      <FocusHighlight />
      
      <div 
        ref={el => (sectionsRef.current[0] = el)} 
        id="hero" 
        className="section"
        tabIndex={-1}
      >
        <HeroSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[1] = el)} 
        id="problem" 
        className="section"
        tabIndex={-1}
      >
        <ProblemSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[2] = el)} 
        id="solution" 
        className="section"
        tabIndex={-1}
      >
        <SolutionSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[3] = el)} 
        id="comparison" 
        className="section"
        tabIndex={-1}
      >
        <ComparisonSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[4] = el)} 
        id="impact" 
        className="section"
        tabIndex={-1}
      >
        <ImpactSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[5] = el)} 
        id="roadmap" 
        className="section"
        tabIndex={-1}
      >
        <RoadmapSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[6] = el)} 
        id="closing" 
        className="section"
        tabIndex={-1}
      >
        <ClosingSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[7] = el)} 
        id="footer" 
        className="section"
        tabIndex={-1}
      >
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;