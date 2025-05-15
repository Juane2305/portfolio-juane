import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import nameDecoration from "../../assets/nameDecoration.gif";

const Main = ({ language, darkMode }) => {
  const heroTitle = language === "es" ? "¡Hola! Soy Juane." : "Hi! I'm Juane.";
  const devText = "SOFTWARE DEVELOPER";

  const typedStringsES = [
    "Apasionado por la Tecnología",
    "Creando Soluciones Innovadoras",
    "Siempre Aprendiendo",
  ];
  const typedStringsEN = [
    "Passionate about Technology",
    "Creating Innovative Solutions",
    "Always Learning",
  ];
  const typedStrings = language === "es" ? typedStringsES : typedStringsEN;

  const description =
    language === "es"
      ? "Bienvenido a mi portfolio. Aquí encontrarás mis proyectos, certificaciones y conocimientos."
      : "Welcome to my portfolio. Here you'll find my projects, certifications, and knowledge.";

  const ctaText = language === "es" ? "Ver Proyectos" : "View Projects";

  const statsES = [
    { value: 2, label: "Años de experiencia" },
    { value: 5, label: "Certificaciones", prefix: "+" },
    { value: 15, label: "Proyectos desarrollados", prefix: "+" },
    { value: 500, label: "Commits en GitHub", prefix: "+" },
  ];
  const statsEN = [
    { value: 2, label: "Years of experience" },
    { value: 5, label: "Certifications", prefix: "+" },
    { value: 15, label: "Developed projects", prefix: "+" },
    { value: 500, label: "Commits on GitHub", prefix: "+" },
  ];
  const stats = language === "es" ? statsES : statsEN;

  const [gifKey, setGifKey] = useState(Date.now());

  useEffect(() => {
    setGifKey(Date.now());
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center h-screen overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="pt-10 md:pt-0 relative z-10 text-center px-4 max-w-3xl">
        <div className="relative inline-block">
          <img
            src={`${nameDecoration}?t=${gifKey}`}
            alt="impact gif"
            className="absolute -top-16 md:-top-20 -right-10 md:-right-16 w-24 md:w-32 pointer-events-none"
          />
          <motion.h1
            className={`text-4xl md:text-6xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {heroTitle}
          </motion.h1>
        </div>
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-blue-600 mt-2 mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {devText}
        </motion.h2>

        {/* Texto con efecto typewriter */}
        <motion.div
          className={`mt-6 text-2xl md:text-3xl font-semibold min-h-[4rem] ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <Typewriter
            options={{
              strings: typedStrings,
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* Descripción */}
        <motion.p
          className={`mt-6 text-lg md:text-xl ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Botón de CTA */}
        <motion.a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 text-lg font-bold bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {ctaText}
        </motion.a>

        {/* Sección de estadísticas */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        >
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <span
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <CountUp
                  end={item.value}
                  duration={2}
                  delay={3}
                  prefix={item.prefix}
                />
              </span>
              <p
                className={`text-sm md:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
