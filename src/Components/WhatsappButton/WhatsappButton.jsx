import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

const PHONE_NUMBER = "542612404253";

const WhatsAppFloatingButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSend = () => {
    const base = `https://wa.me/${PHONE_NUMBER}`;
    const trimmedMessage = message.trim();
    const url = trimmedMessage ? `${base}?text=${encodeURIComponent(trimmedMessage)}` : base;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.3, y: 20 },
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {open && (
          <motion.div
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-[320px] max-w-[90vw] bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 overflow-hidden"
            role="dialog"
            aria-label={t("whatsapp.label")}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-green-500 text-white">
              <div className="flex items-center gap-2">
                <FaWhatsapp aria-hidden="true" />
                <span className="font-semibold">{t("whatsapp.label")}</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-green-600 focus:outline-none"
                aria-label={t("whatsapp.cancel")}
              >
                <FaTimes />
              </button>
            </div>

            <div className="px-4 py-3">
              <label htmlFor="wa-message" className="text-sm text-gray-700 mb-2 block">
                {t("whatsapp.question")}
              </label>
              <textarea
                id="wa-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                placeholder={t("whatsapp.placeholder")}
              />

              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  {t("whatsapp.cancel")}
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none flex items-center gap-2"
                >
                  <FaPaperPlane aria-hidden="true" />
                  {t("whatsapp.send")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleToggle}
        className="
          bg-green-500 hover:bg-green-600 text-white
          p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110
          flex items-center justify-center
          md:rounded-2xl md:px-6 md:py-3 md:text-xl
        "
        title={t("whatsapp.label")}
        aria-expanded={open}
        aria-controls="wa-chat-bubble"
      >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline-block ml-2 font-semibold">{t("whatsapp.label")}</span>
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;