import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import PropTypes from 'prop-types';

const technologiesES = [
  {
    name: "React",
    icon: <FaReact size={30} />,
    description: "Amplia experiencia creando SPAs y aplicaciones web.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    description: "Diseños modernos y responsivos utilizando Tailwind.",
  },
  {
    name: "MySQL",
    icon: <FaDatabase size={30} />,
    description: "Experiencia en diseño de bases de datos y consultas SQL.",
  },
  {
    name: "Java con Spring",
    icon: <FaJava size={30} />,
    description: "Conocimientos en microservicios y APIs REST con Spring Boot.",
  },
];

const technologiesEN = [
  {
    name: "React",
    icon: <FaReact size={30} />,
    description: "Extensive experience building SPAs and web applications.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    description: "Modern and responsive designs using Tailwind.",
  },
  {
    name: "MySQL",
    icon: <FaDatabase size={30} />,
    description: "Experience in database design and SQL queries.",
  },
  {
    name: "Java with Spring",
    icon: <FaJava size={30} />,
    description: "Knowledge of microservices and REST APIs with Spring Boot.",
  },
];

const certificationsES = [
  {
    title: "Certificación en Desarrollo Fullstack - Digital House",
    link: "/DigitalHouse.pdf",
  },
  {
    title: "Certificación Fullstack Developer - Henry",
    link: "/HENRY.pdf",
  },
  {
    title: "Certificación en Inglés - EF Set",
    link: "/EFSETCertificate.pdf",
  },
  {
    title: "Certificación en POO Java - Todo Code",
    link: "/POO.html",
  },
  {
    title: "Certificación en Spring Boot - Todo Code",
    link: "/Springboot.html",
  },
];

const certificationsEN = [
  {
    title: "Fullstack Development Certification - Digital House",
    link: "/DigitalHouse.pdf",
  },
  {
    title: "Fullstack Developer Certification - Henry",
    link: "/HENRY.pdf",
  },
  {
    title: "English Certification - EF Set",
    link: "/EFSETCertificate.pdf",
  },
  {
    title: "Java OOP Certification - Todo Code",
    link: "/POO.html",
  },
  {
    title: "Spring Boot Certification - Todo Code",
    link: "/Springboot.html",
  },
];

const AboutMe = ({ language, darkMode }) => {
  const sectionTitle = language === "es" ? "Sobre mí" : "About Me";
  const paragraph1 =
    language === "es"
      ? "¡Hola! Soy Juane, un apasionado desarrollador de software especializado en Front-End. Disfruto aprender nuevas tecnologías y aplicar las mejores prácticas para entregar productos de alta calidad."
      : "Hello! I'm Juane, a passionate software developer specialized in Front-End. I enjoy learning new technologies and applying best practices to deliver high-quality products.";
  const paragraph2 =
    language === "es"
      ? "Cuento con amplia experiencia en React, Tailwind, MySQL y también tengo conocimientos en Java con Spring. Me encanta colaborar en equipo, enfrentar retos de programación y, sobre todo, compartir lo que sé con otros entusiastas de la tecnología."
      : "I have extensive experience in React, Tailwind, and MySQL, and I also have knowledge in Java with Spring. I love collaborating in teams, tackling programming challenges, and above all, sharing what I know with fellow technology enthusiasts.";
  const cvText = language === "es" ? "Descargar CV" : "Download CV";
  const certSectionTitle = language === "es" ? "Certificaciones" : "Certifications";
  const technologiesData = language === "es" ? technologiesES : technologiesEN;
  const certificationsData = language === "es" ? certificationsES : certificationsEN;

  return (
    <section
      id="aboutme"
      className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
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
          {sectionTitle}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
          
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dfschbyq2/image/upload/v1743011590/IMG_1510_bobubi_gebqpz.jpg"
              alt={language === "es" ? "Mi imagen" : "My image"}
              className="object-cover w-full h-full"
            />
          </motion.div>

          
          <motion.div
            className={`md:w-1/2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 leading-relaxed">{paragraph1}</p>
            <p className="mb-4 leading-relaxed">{paragraph2}</p>
            <a
              href="/Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              {cvText}
            </a>
          </motion.div>
        </div>

        
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {technologiesData.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.03 }}
              className={`flex items-start gap-4 p-4 rounded-lg shadow ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-blue-500">{tech.icon}</div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {tech.name}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            {certSectionTitle}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {certificationsData.map((cert) => (
              <li key={cert.title} className={darkMode ? "text-gray-300" : "text-gray-600"}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {cert.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  language: PropTypes.string,
  darkMode: PropTypes.bool,
};

export default AboutMe;