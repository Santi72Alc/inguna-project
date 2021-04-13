import React from "react";

import './style.css';

import logo from 'assets/img/logos/logo_sm.svg';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className={`flex flex-wrap items-center justify-between px-2 py-4 bg-blue-500 ${fixed ? "sticky top-0 z-10" : ""}`} >

      <div className="container px-4 mx-auto flex flex-wrap ">

        <div className="w-full relative inline-flex lg:w-auto lg:static lg:block justify-between">

          {/* <div className="inline-flex items-center "> */}
            {/* Company Name */}
            <a
              className="font-bold inline-flex items-center whitespace-nowrap text-white text-lg sm:text-base hover:text-gray-300"
              href="#home"
            >
              <span>
                <img src={logo} width="75px" className="mr-3" alt="Estilista de Miradas"></img>
              </span>
              Estilista de Miradas
            </a>

          {/* </div> */}

          {/* Mobile button */}
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div id="navbar-options"
          className={"lg:flex flex-grow items-center " + (navbarOpen ? "flex justify-around" : "hidden")}
        >

          <ul className="flex flex-col md:flex-row md:ml-auto list-none">
          <li className="nav-item">
              <a href="#services" className="hover:text-blue-700" >
                <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="hover:text-blue-700" >
                {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">Servicios</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#curses" className="hover:text-blue-700" >
                {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">Cursos</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="hover:text-blue-700" >
                {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">Galería</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#meetme" className="hover:text-blue-700" >
                {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">Conóceme</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
