// src/Components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    name: 'Invitarly',
    description_es:
      'Plataforma para crear invitaciones digitales y gestionar eventos con pasarela de pago integrada. Proyecto Real.',
    description_en:
      'Platform for creating digital invitations and managing events with an integrated payment gateway. Real project.',
    technologies: ['React', 'Tailwind CSS', 'Java (Spring)', 'MySQL'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743012024/84b522fe-73ac-46ab-acc8-ccb317537989.png',
    demoLink: 'https://invitarly.com',
    repoLink: 'https://github.com/Juane2305/invitarly-front',
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    name: 'Black GYM',
    description_es:
      'Página para gimnasio ubicado en Mendoza, Argentina. Proyecto Real.',
    description_en:
      'Website for a gym located in Mendoza, Argentina. Real project.',
    technologies: ['React', 'Tailwind CSS'],
    image:
      'https://res.cloudinary.com/dfschbyq2/image/upload/v1743031287/52abf364-4081-4a27-a6bc-6d0a2cdd9231.png',
    demoLink: 'https://black-gym-hazel.vercel.app/',
    repoLink: 'https://github.com/Juane2305/black_gym',
  },
  {
    id: 5,
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
    id: 6,
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

const Projects = ({ language, darkMode }) => {
  const heading =
    language === 'es' ? 'Proyectos más recientes' : 'Recent Projects';

  return (
    <section
      id="projects"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {heading}
        </motion.h2>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-lg shadow-lg overflow-hidden flex flex-col ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-60"
              />

              {/* Contenido */}
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
                    {language === 'es'
                      ? project.description_es
                      : project.description_en}
                  </p>

                  {/* Tecnologías */}
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

                {/* Enlaces */}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;