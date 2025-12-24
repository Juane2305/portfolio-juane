import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, when: 'beforeChildren', delayChildren: 0.3 },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Header = ({ language, setLanguage, darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  const navItems =
    language === 'es'
      ? [
          { id: 'projects', label: 'Proyectos' },
          { id: 'aboutme', label: 'Sobre Mí' },
          { id: 'contact', label: 'Contacto' },
        ]
      : [
          { id: 'projects', label: 'Projects' },
          { id: 'aboutme', label: 'About me' },
          { id: 'contact', label: 'Contact' },
        ];

  const containerClasses = darkMode
    ? isScrolled
      ? 'w-[90%] bg-gray-950/70 backdrop-blur-md shadow-md rounded-3xl py-2 text-white mt-5'
      : 'w-full bg-transparent shadow-none rounded-none py-5 text-white'
    : isScrolled
    ? 'w-[90%] bg-white/70 backdrop-blur-md shadow-md rounded-3xl py-2 text-gray-800 mt-5'
    : 'w-full bg-transparent shadow-none rounded-none py-5 text-gray-800';

  return (
    <motion.nav
      className="fixed z-50 w-full transition-all duration-300 top-0"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`mx-auto transition-all duration-300 ${containerClasses}`}>
        <div className="flex items-center justify-between px-8 py-3">
          
          <div className="flex items-center">
            <div className="text-2xl font-bold">Juane &lt;/&gt;</div>
          </div>

          
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, color: darkMode ? '#d1d5db' : '#3b82f6' }}
                transition={{ type: 'tween', duration: 0.15 }}
                className="text-lg transition focus:outline-none focus:text-current"
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 flex items-center rounded ${
                  language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                } transition focus:outline-none focus:text-current`}
              >
                <span role="img" aria-label="España" className="mr-1">
                  🇪🇸
                </span>{' '}
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 flex items-center rounded ${
                  language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                } transition focus:outline-none focus:text-current`}
              >
                <span role="img" aria-label="USA" className="mr-1">
                  🇺🇸
                </span>{' '}
                EN
              </button>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex items-center px-2 py-1 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition focus:outline-none"
            >
              {darkMode ? (
                <FaSun size={20} title="Light Mode" />
              ) : (
                <FaMoon size={20} title="Dark Mode" />
              )}
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-600 hover:text-blue-500 focus:outline-none focus:text-current"
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`md:hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} pt-8 overflow-hidden rounded-b-xl`}
            >
              <div className="px-4 py-2 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05, color: darkMode ? '#d1d5db' : '#3b82f6' }}
                    transition={{ type: 'tween', duration: 0.15 }}
                    onClick={() => handleLinkClick(item.id)}
                    className="transition text-left focus:outline-none focus:text-current"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              <div className="px-4 pt-4 pb-2 flex justify-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center px-2 py-1 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition focus:outline-none"
                >
                  {darkMode ? (
                    <FaSun size={20} title="Light Mode" />
                  ) : (
                    <FaMoon size={20} title="Dark Mode" />
                  )}
                </button>
              </div>
              
              <div className="px-4 pt-7 pb-5 flex justify-center space-x-4 border-t border-gray-200 mt-4">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 flex items-center rounded ${
                    language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  } transition focus:outline-none focus:text-current`}
                >
                  <span role="img" aria-label="España" className="mr-1">
                    🇪🇸
                  </span>{' '}
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 flex items-center rounded ${
                    language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  } transition focus:outline-none focus:text-current`}
                >
                  <span role="img" aria-label="USA" className="mr-1">
                    🇺🇸
                  </span>{' '}
                  EN
                </button>
              </div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;