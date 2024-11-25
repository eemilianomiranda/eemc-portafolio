import React from "react";

const Header = ({ bgColor }) => {
  return (
    <header
      className={`fixed top-0 w-full ${bgColor} bg-opacity-60 z-50 transition-colors duration-300`}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/">
          <div className="text-white text-2xl font-bold">totodev</div>
        </a>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 uppercase text-sm font-semibold">
            <li>
              <a
                href="/"
                className="relative text-white duration-300 group pb-4"
              >
                Inicio
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="relative text-white duration-200 group pb-4"
              >
                Sobre mí
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="relative text-white duration-200 group pb-4"
              >
                Portfolio
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative text-white duration-200 group pb-4"
              >
                Contacto
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
