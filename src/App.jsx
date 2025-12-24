import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './Components/LanguageSelector/LanguageSelector';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Hero from './Components/Hero/Hero';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects';
import OtherProjects from './Components/OtherProjects/OtherProjects';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WhatsappButton from './Components/WhatsappButton/WhatsappButton';

const App = () => {
  const { i18n } = useTranslation();
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowLanguageSelector(false);
      setShowWelcome(false);
      setShowPortfolio(true);
    }
  }, []);

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setShowLanguageSelector(false);
    setShowWelcome(true);
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setShowPortfolio(true);
    localStorage.setItem('hasVisited', 'true');
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {showLanguageSelector && (
          <LanguageSelector onSelectLanguage={handleLanguageSelect} />
        )}

        {showWelcome && (
          <WelcomeScreen onComplete={handleWelcomeComplete} />
        )}

        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Experience />
            <Skills />
            <FeaturedProjects onViewMore={scrollToProjects} />
            <div ref={projectsRef}>
              <OtherProjects />
            </div>
            <Education />
            <Contact />
            <Footer />
            <WhatsappButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
