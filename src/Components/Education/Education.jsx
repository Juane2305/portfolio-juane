import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCertificate, FaCalendar, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const { t } = useTranslation();
  const educationItems = t('education.items', { returnObjects: true });

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const icons = [
    '🎓',
    '💻',
    '☕',
    '🌐',
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t('education.title')}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            />
          </div>

          <div className="relative">
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="w-full md:w-5/12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 border-l-4 border-blue-600"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl"
                      >
                        {icons[index]}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FaCalendar className="text-blue-600" />
                          <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <FaUniversity className="text-purple-600" />
                          <p className="font-semibold">{item.institution}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>

                  
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-blue-600 rounded-full"
                    />
                  </motion.div>

                  
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <FaGraduationCap />, number: '2', label: t('education.stats.bootcamps') },
                { icon: <FaCertificate />, number: '4+', label: t('education.stats.certifications') },
                { icon: '⏱️', number: '1500+', label: t('education.stats.studyHours') },
                { icon: '📚', number: '∞', label: t('education.stats.continuousLearning') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-white"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-4xl mb-2 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <p className="text-3xl font-bold mb-1">{stat.number}</p>
                  <p className="text-sm text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.4)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg"
            >
              {t('education.badge')}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
