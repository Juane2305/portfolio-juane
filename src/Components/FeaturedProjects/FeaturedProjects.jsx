import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaExternalLinkAlt, FaCheckCircle, FaGithub, FaLock } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FeaturedProjects = ({ onViewMore }) => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t('projects.featured', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projectColors = [
    'from-blue-600 to-cyan-600',
    'from-purple-600 to-pink-600',
    'from-green-600 to-teal-600',
    'from-orange-600 to-red-600',
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t('projects.title')}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setSelectedProject(index)}
                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              >
                
                <div className={`h-40 bg-gradient-to-br ${projectColors[index % projectColors.length]} relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-20"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Mi1oMnYtMmgtMnptMC00aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.confidential ? (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaLock className="text-white text-6xl" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaCode className="text-white text-6xl" />
                      </motion.div>
                    )}
                  </div>
                </div>

                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {project.confidential && (
                    <div className="mb-4 flex items-center gap-2 text-sm text-amber-600">
                      <FaLock />
                      <span className="font-medium">{t('projects.confidentialNote')}</span>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Ver detalles <FaExternalLinkAlt className="text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          {onViewMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={onViewMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                {t('projects.viewMore')}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`h-32 bg-gradient-to-br ${projectColors[selectedProject % projectColors.length]} relative`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                >
                  ✕
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  {projects[selectedProject].confidential ? (
                    <FaLock className="text-white text-5xl" />
                  ) : (
                    <FaCode className="text-white text-5xl" />
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {projects[selectedProject].description}
                </p>

                
                {projects[selectedProject].confidential && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FaLock className="text-amber-600 text-2xl" />
                      <div>
                        <p className="font-bold text-amber-800">{t('projects.confidentialNote')}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Características principales:
                  </h4>
                  <div className="space-y-2">
                    {projects[selectedProject].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                {!projects[selectedProject].confidential && (
                  <div className="flex flex-wrap gap-4">
                    {projects[selectedProject].link && (
                      <motion.a
                        href={projects[selectedProject].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                      >
                        <FaExternalLinkAlt />
                        Ver sitio web
                      </motion.a>
                    )}
                    {projects[selectedProject].repo && (
                      <motion.a
                        href={projects[selectedProject].repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                      >
                        <FaGithub />
                        Ver código
                      </motion.a>
                    )}
                  </div>
                )}

                
                {projects[selectedProject].note && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 font-medium">{projects[selectedProject].note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

FeaturedProjects.propTypes = {
  onViewMore: PropTypes.func,
};

export default FeaturedProjects;
