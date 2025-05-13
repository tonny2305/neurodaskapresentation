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
import { useScrollPosition } from './hooks/useScrollPosition';
import './styles/globals.css';

const App: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollY } = useScrollPosition();
  
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
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen font-sans">
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
        <NavigationDots 
          sections={sections} 
          activeIndex={activeSection} 
        />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[0] = el)} 
        id="hero" 
        className="section"
      >
        <HeroSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[1] = el)} 
        id="problem" 
        className="section"
      >
        <ProblemSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[2] = el)} 
        id="solution" 
        className="section"
      >
        <SolutionSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[3] = el)} 
        id="comparison" 
        className="section"
      >
        <ComparisonSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[4] = el)} 
        id="impact" 
        className="section"
      >
        <ImpactSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[5] = el)} 
        id="roadmap" 
        className="section"
      >
        <RoadmapSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[6] = el)} 
        id="closing" 
        className="section"
      >
        <ClosingSection />
      </div>
      
      <div 
        ref={el => (sectionsRef.current[7] = el)} 
        id="footer" 
        className="section"
      >
        <Footer />
      </div>
    </div>
  );
};

export default App;