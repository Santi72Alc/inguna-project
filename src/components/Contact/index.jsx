import React from 'react';

export default function InfoContact() {
    return (
        <section className="relative block bg-gray-900">
            {/* Svg */}
            <div className="bottom-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", top: "1px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-900 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4 py-10 ">
                {/* Info */}
                <div className="flex flex-wrap text-center justify-center lg:pb-10">
                    <div className="w-full md:w-7/12 px-3">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                            Estilista De Mirada
                                </h2>
                        <p className="text-lg sm:text-base leading-relaxed mt-4 text-gray-500">
                            Durante años asesorando, enseñando y acompañando para que el cliente disfrute y sienta el poder, sentimiento y libertad que tiene en su mirada.
                                </p>
                    </div>
                </div>

                {/* Other things to add */}
                <span>
                    {/* <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Excelent Services
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Grow your market
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Launch time
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div> */}
                </span>

            </div>
        </section>
    );
}


// Contact by form
/* 

<section className="relative block py-24 lg:pt-0 bg-gray-900">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                            ¿ Quieres contactar conmigo?
                                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Complete este formulario y nos comunicaremos con usted en menos de 24
                            horas.
                                        </p>
                        <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Nombre completo
                                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Nombre"
                                style={{ transition: 'all .15s ease' }}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                                            </label>
                            <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{ transition: 'all .15s ease' }}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Mensaje
                                            </label>
                            <textarea
                                rows="4"
                                cols="80"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Escriba el mensaje..."
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: 'all .15s ease' }}
                            >
                                Enviar mensaje
                                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

*/