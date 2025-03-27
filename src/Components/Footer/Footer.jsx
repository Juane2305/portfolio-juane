// src/Components/Footer/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = ({ language }) => {
  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Textos en español o inglés
  const developedWithText =
    language === "es"
      ? "Desarrollado con"
      : "Developed with";
  const andText =
    language === "es"
      ? "y"
      : "and";
  const rightsText =
    language === "es"
      ? "Todos los derechos reservados."
      : "All rights reserved.";
  const backToTopText =
    language === "es"
      ? "Volver arriba"
      : "Back to top";

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 relative">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Texto 'Desarrollado con React y Tailwind CSS' */}
        <p className="text-sm text-gray-400 text-center">
          {developedWithText} <span className="text-blue-500 font-semibold">React</span> {andText}{" "}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span>.
        </p>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 w-full" />

        {/* Sección de íconos + copyright + botón */}
        <div className="flex flex-col items-center space-y-4">
          {/* Íconos */}
          <div className="flex space-x-6 text-xl">
            <a
              href="mailto:juane.elizondo23@gmail.com"
              className="hover:text-gray-300 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Juane2305"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-emilio-elizondo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Juane. {rightsText}
          </p>

          {/* Botón para volver arriba */}
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-gray-200 transition text-sm flex items-center space-x-2"
          >
            <FaArrowUp />
            <span>{backToTopText}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;