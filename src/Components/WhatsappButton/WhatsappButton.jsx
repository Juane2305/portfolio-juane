const phoneNumber = '+542612404253'; // Acá tienen que agregar su número de teléfono


const WhatsappButton = () => {
    const whatsappLink = 'https://wa.me/' + phoneNumber;

  
    return (
      <a href={whatsappLink} target="_blank"
      className='fixed bottom-2 right-0 z-50 pr-6 pb-6 justify-center items-center hover:transform hover:scale-110 duration-500'
      >
        <img
            className='img z-50 w-14 h-14'
            src='https://res.cloudinary.com/dfschbyq2/image/upload/v1711380920/WhatsApp_icon_pk7bgy.png'
            alt="WhatsApp"
        />
      </a>

    );
};

export default WhatsappButton;