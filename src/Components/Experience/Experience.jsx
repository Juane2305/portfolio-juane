import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaReact, FaCode, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const { t } = useTranslation();

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
    { icon: FaReact, color: 'text-blue-500' },
    { icon: FaCode, color: 'text-green-500' },
    { icon: FaUsers, color: 'text-purple-500' },
    { icon: FaLightbulb, color: 'text-yellow-500' },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
              {t('experience.title')}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

            
            <div className="absolute top-8 right-8 opacity-10">
              {icons.map((item, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`${item.color} mb-4`}
                >
                  <item.icon size={48} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {t('experience.subtitle')}
                </h3>
                <p className="text-lg text-gray-600 italic">
                  {t('experience.description')}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {t('experience.responsibilities', { returnObjects: true }).map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <FaCheckCircle className="text-green-500 text-xl group-hover:text-green-600" />
                    </motion.div>
                    <p className="text-gray-700 text-lg leading-relaxed">{responsibility}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-600"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-bold text-blue-600">{t('experience.realExperience')}</span> {t('experience.realExperienceText')}
                </p>
              </motion.div>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: '5+', label: t('experience.stats.projects') },
              { number: '100%', label: t('experience.stats.dedication') },
              { number: '3+', label: t('experience.stats.experience') },
              { number: '∞', label: t('experience.stats.learning') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
