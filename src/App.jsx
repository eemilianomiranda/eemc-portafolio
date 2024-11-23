import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  // Estado para el color dinámico del header
  const [headerBg, setHeaderBg] = useState("bg-transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY; // Detecta la posición del scroll
    if (scrollY >= window.innerHeight) {
      setHeaderBg("bg-vino"); // Cambia el fondo del header después de la primera sección
    } else {
      setHeaderBg("bg-transparent"); // Vuelve al fondo transparente
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Escucha el evento de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el evento al desmontar
    };
  }, []);

  return (
    <div className="App">
      {/* Pasar el color del header como prop */}
      <Header bgColor={headerBg} />

      {/* Sección 1 */}
      <section id="home" className="flex flex-col justify-center items-center bg-vino text-white h-screen">
        <motion.h1
          className="text-4xl text-center main-text mt-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hola! soy Emiliano
        </motion.h1>

        <motion.p
          className="text-center mt-4 text-lg main-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Desarrollador Front-End
        </motion.p>

        {/* Botón para desplazarse */}
        <Link
          to="About-Me"
          smooth={true}
          duration={100} // Controla la duración del desplazamiento en ms
          className="mt-auto p-3  text-white  transition duration-300 text-center cursor-pointer"
        >
          <i className="fas fa-chevron-down animate-bounce text-xl"></i>
        </Link>
      </section>

      {/* Sección 2 */}
      <section
        id="About-Me"
      >
        <AboutMe />
      </section>

      {/* Sección 3 */}
      <section id="portfolio" className="flex justify-center items-center bg-blue-500 text-white h-screen">
        <h2 className="text-3xl font-semibold">Portfolio</h2>
      </section>
    </div>
  );
}

export default App;
