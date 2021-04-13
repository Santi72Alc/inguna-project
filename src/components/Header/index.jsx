import React from 'react';

import imgHeader from '../../assets/img/header.jpg'

export default function Header() {
    return (
        <section className="relative pt-20 pb-40 flex content-center items-center justify-center" >

            {/* Header Image */}
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage : `url(${imgHeader})`,
                    // backgroundImage : "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                }}
            >
                <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
            </div>

            {/* Header Title */}
            <div className="container relative ">
                <div className="w-full items-center inline-block flex-wrap justify-center">
                    <div className="w-full px-4 mx-auto text-center">
                        <div className="px-2">
                            <h1 className="text-white uppercase font-semibold text-5xl md:text-7xl hover:opacity-100">
                                Inguna
                        </h1>
                            <h2 className="mt-5 text-indigo-400 font-semibold text-2xl md:text-4xl">
                                Estilista de Mirada
                        </h2>
                            <p className="mt-4 text-lg text-gray-300 md:w-8/12 mx-auto">
                                Esta va a ser el 'Landing page' de mi clienta Inguna Spain.
                                Cambiaremos los colores iniciales y las fotos que se vayan a
                                poner finalmente.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
