import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end space-y-2">
      <a
        href="https://wa.me/542612404253?text=%C2%A1Hola%20Juane!%20Mi%20nombre%20es..."
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600 text-white 
          p-4 
          rounded-full 
          shadow-lg 
          transition-transform 
          duration-300 
          hover:scale-110 
          flex 
          items-center 
          justify-center
          md:rounded-2xl 
          md:px-6 
          md:py-3
          md:text-xl
        "
        title="¡Hola! Tengo una duda sobre las invitaciones"
      >
        <FaWhatsapp size={24} />
        
        <span className="hidden md:inline-block ml-2 font-semibold">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloatingButton;