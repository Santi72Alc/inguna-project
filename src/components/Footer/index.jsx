import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      {/* Svg */}
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 -1 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">

          {/* LEFT COLUMN --- text description */}
          <div className="w-full px-4 text-lg sm:text-base text-gray-800">
            <h4 className="text-2xl font-semibold">Me buscabas ?</h4>
            <p className="mt-3">
              Me puedes encontrar en  las redes sociales, espero tus comentarios y consultas en cualquiera de estas plataformas. Escríbeme y te responderé en menos de 24h.
            </p>
            <p className="mt-3">
              Si tienes alguna consulta rápida, me puedes conectar por whatsapp.
            </p>


          </div>

          {/* RIGHT COLUMN --- Links */}
          <div className="sm:block inline-flex w-full px-4 mt-4 justify-around ">

            {/* Social networks */}
            <div className="flex sm:w-full py-5 justify-center" >
              <button role="link"
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              {/* <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button> */}
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-whatsapp"></i>
              </button>
            </div>

            {/* Links */}
            <div className="flex sm:w-full w-6/12 pt-5 justify-around">

              {/* Util links */}
              <div className="w-5/12">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Enlaces útiles
                </span>
                <ul className="list-unstyled">
                  {/* <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#">Sobre mí
                    </a>
                  </li> */}
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#home">Twitter
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#home">Facebook
                    </a>
                  </li>
                  {/* <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com">Blog
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial">Github
                    </a>
                  </li> */}
                  {/* <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                    </a>
                  </li> */}

                </ul>
              </div>

              {/* Other resources */}
              <div className="w-5/12">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Otros Recursos
                </span>
                <ul className="list-unstyled">
                  {/* <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                  </a>
                  </li> */}
                  <li>
                    {/* eslint-disable-next-line */}
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#">Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#">Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://sr-portafolio.herokuapp.com">Desarrollador
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />
        {/* Copyright */}
        <div className="flex">
          <div className="w-full px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" - "}
              <span className="uppercase">Inguna Spain</span>
              <div>
                {"Developed by "}
                <a href="https://sr-portafolio.herokuapp.com"
                  target="_blank" rel="noreferrer"
                  className="text-gray-600 hover:text-blue-500 italic"
                >
                  sanroman.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
