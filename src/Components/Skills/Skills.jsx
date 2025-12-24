import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaNode, FaGitAlt, 
  FaUsers, FaBolt, FaLightbulb, FaHandshake 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiRedux, SiJavascript, 
  SiSpringboot, SiMysql, SiAxios 
} from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();

  const skillIcons = {
    'React': <FaReact className="text-[#61DAFB]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Redux': <SiRedux className="text-[#764ABC]" />,
    'JavaScript (ES6+)': <SiJavascript className="text-[#F7DF1E]" />,
    'HTML5': <FaHtml5 className="text-[#E34F26]" />,
    'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
    'Java': <FaJava className="text-[#007396]" />,
    'Spring Boot': <SiSpringboot className="text-[#6DB33F]" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'Node.js': <FaNode className="text-[#339933]" />,
    'Git & GitHub': <FaGitAlt className="text-[#F05032]" />,
    'Axios': <SiAxios className="text-[#5A29E4]" />,
  };

  const softSkillIcons = {
    'Autodidacta': <FaLightbulb className="text-yellow-500" />,
    'Aprendizaje rápido': <FaBolt className="text-orange-500" />,
    'Colaboración con seniors': <FaUsers className="text-blue-500" />,
    'Adaptabilidad': <FaBolt className="text-purple-500" />,
    'Comunicación efectiva': <FaHandshake className="text-green-500" />,
  };

  const categories = t('skills.categories', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
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
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {t('skills.title')}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(categories).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => {
                    const icon = key === 'soft' ? softSkillIcons[skill] : skillIcons[skill];
                    
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="text-2xl flex-shrink-0"
                        >
                          {icon || <FaBolt className="text-blue-400" />}
                        </motion.div>
                        <span className="text-gray-200 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <FaReact className="text-6xl text-blue-400" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('skills.specialization.title')}
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t('skills.specialization.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
