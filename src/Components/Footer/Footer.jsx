import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Juan Emilio Elizondo
              </h3>
              <p className="text-gray-400 text-sm">
                {t('footer.description')}
              </p>
            </div>

            
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                {['experience', 'skills', 'projects', 'education', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {t(`nav.${section}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>
              <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 juane.elizondo23@gmail.com</p>
                <p>📍 Argentina</p>
                <div className="flex gap-4 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="mailto:juane.elizondo23@gmail.com"
                    className="text-2xl hover:text-blue-400 transition"
                  >
                    <FaEnvelope />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="https://github.com/Juane2305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-400 transition"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="https://www.linkedin.com/in/juan-emilio-elizondo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-400 transition"
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="border-t border-gray-800 my-8"></div>

          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              {t('footer.madeWith')}{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <FaHeart className="inline text-red-500" />
              </motion.span>{' '}
              {t('footer.by')} <span className="text-blue-400 font-semibold">Juane</span>
            </p>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Juan Emilio Elizondo. {t('footer.rights')}
            </p>

            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
            >
              <FaArrowUp />
            </motion.button>
          </div>

          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              {t('footer.developedWith')}{' '}
              <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-cyan-400 font-semibold">Tailwind CSS</span> y{' '}
              <span className="text-purple-400 font-semibold">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
