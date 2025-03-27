// src/Components/Contact/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ language, darkMode }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  // Estados para loader y mensaje de éxito
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Variables de texto según idioma
  const titleText = language === "es" ? "Contáctame" : "Contact Me";
  const subtitleText =
    language === "es"
      ? "Si tienes alguna pregunta, propuesta, o si necesitas hablar, no dudes en escribirme."
      : "If you have any questions, proposals, or need to talk, don't hesitate to write to me.";

  // Maneja los cambios en cada input/textarea
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envía el formulario a EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSent(false);

    const templateParams = {
      from_name: formData.username,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_envrsj9", // Reemplaza con tu Service ID
        "template_ioq3qen", // Reemplaza con tu Template ID
        templateParams,
        "i9JqoBg9vA0X6dC52" // Reemplaza con tu Public Key
      )
      .then((result) => {
        setIsLoading(false);
        setIsSent(true);
        setFormData({ username: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        alert(
          language === "es"
            ? "Hubo un error al enviar el mensaje, inténtalo de nuevo."
            : "There was an error sending your message, please try again."
        );
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-center mb-2 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {titleText}
        </motion.h2>
        {/* Subtítulo */}
        <motion.p
          className={`text-center mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {subtitleText}
        </motion.p>

        {/* Formulario */}
        <motion.form
          className={`max-w-xl mx-auto p-6 rounded-lg shadow relative transition-all ${
            darkMode ? "bg-gray-700" : "bg-white"
          }`}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Campo: username (Nombre) */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className={`block font-semibold mb-1 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {language === "es" ? "Nombre" : "Name"}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className={`text-gray-800 bg-white border-gray-300 w-full border rounded-md p-2 focus:outline-none transition duration-300 ${
                darkMode
                  ? " focus:border-blue-400"
                  : "  focus:border-blue-500"
              }`}
            />
          </div>

          {/* Campo: email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block font-semibold mb-1 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {language === "es" ? "Correo" : "Email"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`text-gray-800 bg-white border-gray-300 w-full border rounded-md p-2 focus:outline-none transition duration-300 ${
                darkMode
                  ? " focus:border-blue-400"
                  : "  focus:border-blue-500"
              }`}
            />
          </div>

          {/* Campo: message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block font-semibold mb-1 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {language === "es" ? "Mensaje" : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className={`text-gray-800 bg-white border-gray-300 w-full border rounded-md p-2 focus:outline-none transition duration-300 ${
                darkMode
                  ? " focus:border-blue-400"
                  : "  focus:border-blue-500"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white flex items-center justify-center py-2 rounded-md font-semibold bg-blue-700 hover:bg-blue-400 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              // Loader simple
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : language === "es" ? (
              "Enviar"
            ) : (
              "Send"
            )}
          </button>
        </motion.form>

        {/* Mensaje de éxito */}
        {isSent && (
          <motion.div
            className={`text-center mt-4 transition duration-300 ${
              darkMode ? "text-green-300" : "text-green-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {language === "es"
              ? "¡Mensaje enviado con éxito!"
              : "Message sent successfully!"}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;