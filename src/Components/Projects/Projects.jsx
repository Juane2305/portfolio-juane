import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const projectData = [
  {
    id: 1,
    name: 'Calicata',
    description_es:
      'Página para empresa dedicada a vender paquetes turísticos. Proyecto Real.',
    description_en:
      'Website for a company dedicated to selling tour packages. Real project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743018371/08319558-6c13-4e0b-96ef-c990708bb008.png',
    demoLink: 'https://calicata.vercel.app/',
    repoLink: 'https://github.com/Juane2305/calicata',
  },
  {
    id: 2,
    name: 'Pizzolato Elizondo Seguros',
    description_es:
      'Página para empresa dedicada a la venta de seguros. Proyecto Real.',
    description_en:
      'Website for an insurance company. Real project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743012233/0afe79c4-eeeb-4f26-8200-17ecbe5ea15a.png',
    demoLink: 'https://pizzolatoelizondoseguros.com/',
    repoLink: 'https://github.com/Juane2305/elizondo-pizzolato',
  },
  {
    id: 3,
    name: 'Black GYM',
    description_es:
      'Página para gimnasio ubicado en Mendoza, Argentina. Proyecto Real.',
    description_en:
      'Website for a gym located in Mendoza, Argentina. Real project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743031287/52abf364-4081-4a27-a6bc-6d0a2cdd9231.png',
    demoLink: 'https://blackgymdz.com/',
    repoLink: 'https://github.com/Juane2305/black_gym',
  },
  {
    id: 4,
    name: 'Cosmética Vibras',
    description_es:
      'Página de centro de cosmética. Proyecto Ficticio.',
    description_en:
      'Cosmetic center website. Fictional project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743031662/6892f5ef-99f7-46ff-81f4-29a96c0d439d.png',
    demoLink: 'https://vibras.vercel.app/',
    repoLink: 'https://github.com/Juane2305/estetica',
  },
  {
    id: 5,
    name: 'MJ Agency',
    description_es:
      'Página para empresa de gestión contable. Proyecto Real.',
    description_en:
      'Website for an accounting management company. Real project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743031936/08e54372-9626-42ed-be9d-28bc629bfc25.png',
    demoLink: 'https://www.mjagency.info/',
    repoLink: 'https://github.com/Juane2305/estetica',
  },
];

const Projects = ({ darkMode }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg shadow-lg overflow-hidden flex flex-col ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
              variants={cardVariants}
            >
              
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-60"
              />

              
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {currentLang === 'es'
                      ? project.description_es
                      : project.description_en}
                  </p>

                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                <div className="mt-2 flex justify-between items-center">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiEye size={20} />
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  language: PropTypes.string,
  darkMode: PropTypes.bool,
};

export default Projects;