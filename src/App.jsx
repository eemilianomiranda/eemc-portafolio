import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Counter from "./components/Counter";

function App() {
  const [headerBg, setHeaderBg] = useState("bg-transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= window.innerHeight) {
      setHeaderBg("bg-vino");
    } else {
      setHeaderBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header bgColor={headerBg} />
      {/* Sección 1 */}
      <section
        id="home"
        className="flex flex-col justify-center items-center bg-vino text-white h-screen"
      >
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
          duration={100}
          className="mt-auto p-3  text-white  transition duration-300 text-center cursor-pointer"
        >
          <i className="fas fa-chevron-down animate-bounce text-xl"></i>
        </Link>
      </section>
      {/* Sección 2 */}
      <section
        id="About-Me"
        className=" main-text gap-3 h-96 p-96 grid text-center justify-center items-center   bg-gray-100"
      >
        <span className="text-4xl font-thin">
          Desarrollo de Aplicaciones Web
        </span>
        <span className="text-xl">
          Me llamo Emiliano Miranda, soy desarrollador Front-End
        </span>

        <p className="mt-10 text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
          totodev es una parte de mi en la que quiero crecer y seguir
          desarrollando mejor mis habilidades al momento de crear un sofware
        </p>
        <span className="mt-10 grid gap-8">
          <p className="text-base">Te interesa conocer mis trabajos?</p>
          <button
            className=" p-4 border border-vino bg-white text-vino mx-auto rounded-md
        hover:scale-105 transition-all duration-300
        "
          >
            Ver Proyectos
          </button>
        </span>
      </section>
      {/*mini seccion*/}
      <section className="bg-vino text-white w-full max-h-96 h-auto py-8 flex justify-center items-center">
        <div className="flex items-center space-x-4 uppercase text-sm">
          <span>Android</span>
          <span className="w-px h-4 font-bold bg-white"></span> <span>Web</span>
        </div>
      </section>

      {/** seccion de imagenes */}
      <section className="h-screen bg-white px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Columna Izquierda (Imágenes) */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Persona"
              className="rounded-lg h-full shadow-lg w-full"
            />
            {/* Barra 1 */}
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <span>JavaScript</span>
                <span>4 años de experiencia</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-vino h-2 rounded-full "></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <span>Java</span>
                <span>3 años de experiencia</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-vino h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Columna Derecha (Texto) */}
          <div>
            <div className="flex gap-12 items-start ml-16">
              {/* Título Principal */}
              <span className="w-2/3">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Soy especialista en desarrollo de aplicaciones iOS y Android.
                </h2>
              </span>

              {/* Subtítulo */}
              <span className="w-1/3">
                <hr className="border-t-4 border-vino w-10 my-2" />
                <h3 className="text-xl font-bold text-gray-800">
                  Aplicaciones desde cero
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  He creado cerca de 15 aplicaciones ya sea de pequeña o gran
                  escala, siempre intento hacer que el usuario tenga la mejor
                  experiencia UI/UX, y que se sientan identificados con el
                  producto
                </p>
              </span>
            </div>

            {/* Barras de progreso */}
            <div className="mt-8 space-y-4">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Teclado"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-vino bg-opacity-80 text-white py-12">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 text-center">
          {/* Elemento 1 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-clipboard-check text-4xl mb-4"></i>
            <Counter endValue={22} />
            <p className="text-sm uppercase tracking-wide">
              Proyectos Finalizados
            </p>
          </div>

          {/* Elemento 2 */}
          <div className="flex flex-col items-center">
            <i className="fas fa-code text-4xl mb-4"></i>
            <Counter endValue={5} />
            <p className="text-sm uppercase tracking-wide">
              Frameworks Utilizados
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section
        id="portfolio"
        className="flex justify-center items-center bg-blue-500 text-white h-screen"
      >
        <h2 className="text-3xl font-semibold">Portfolio</h2>
      </section>
    </div>
  );
}

export default App;
