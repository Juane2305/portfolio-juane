import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LanguageSelector = ({ onSelectLanguage }) => {
  const { t } = useTranslation();

  const handleLanguageSelect = (lang) => {
    onSelectLanguage(lang);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {t('languageSelector.title')}
        </motion.h1>
        
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          {t('languageSelector.subtitle')}
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect('es')}
            className="bg-white text-purple-900 px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:bg-gray-100 transition-colors min-w-[200px]"
          >
            <span className="inline-flex items-center justify-center gap-3"><FiGlobe aria-hidden="true" /> Español</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect('en')}
            className="bg-white text-purple-900 px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:bg-gray-100 transition-colors min-w-[200px]"
          >
            <span className="inline-flex items-center justify-center gap-3"><FiGlobe aria-hidden="true" /> English</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

LanguageSelector.propTypes = {
  onSelectLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;
