import { useState } from "react"; // import state
import { useEffect } from "react";

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Desuscribirse del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `fixed pt-4 z-20 w-full backdrop-filter transition-all duration-300 ${scrolled ? 'bg-[#252525]' : ''}`;

  return (
    <div className={navClasses}>
      <nav>
        <section className="MOBILE-MENU flex justify-between items-center lg:hidden ">
          <a href="#home">
            <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708213198/Dise%C3%B1o_sin_t%C3%ADtulo__12_-removebg-preview_fyidua.png" alt="logo" className="w-[12rem] lg:hidden"/>
          </a>
          <div
            className="HAMBURGER-ICON space-y-2 pr-9"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-1 w-8 animate-pulse rounded-lg bg-black"></span>
            <span className="block h-1 w-8 animate-pulse rounded-lg bg-black"></span>
            <span className="block h-1 w-8 animate-pulse rounded-lg bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]" >
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#home"onClick={() => setIsNavOpen(false)}>Inicio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#about"onClick={() => setIsNavOpen(false)}>Sobre mí</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#services"onClick={() => setIsNavOpen(false)}>Servicios</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact"onClick={() => setIsNavOpen(false)}>Contacto</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="hidden lg:flex w-full items-center">
          
          <ul className="DESKTOP-MENU hidden space-x-14 lg:flex w-full justify-center items-center text-[#2B3033] font-bold">
            <li className="transform hover:scale-105 duration-200">
              <a href="#home">Inicio</a>
            </li>
            <li className="transform hover:scale-105 duration-200">
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#home"><img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708213198/Dise%C3%B1o_sin_t%C3%ADtulo__12_-removebg-preview_fyidua.png" alt="" className="w-[12rem] hidden lg:flex justify-start"/></a>
            </li>
            <li className="transform hover:scale-105 duration-200">
              <a href="#services">Servicios</a>
            </li>
            <li className="transform hover:scale-105 duration-200">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        background-color: white;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}