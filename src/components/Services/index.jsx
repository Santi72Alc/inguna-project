import React from 'react';

export default function Services() {
    return (
        <section className="container px-2 mx-auto">
            <article className="flex flex-wrap">
                {/* Services  left*/}
                <div className="w-full md:w-6/12 px-4 pt-10 mx-auto">
                    {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div> */}
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Mis servicios
                                </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Est sit gubergren clita diam dolor eirmod no invidunt voluptua. Takimata clita ipsum sit sed, et et amet est takimata,.
                                </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        Dolor dolore aliquyam magna nonumy sed clita diam gubergren dolor kasd, erat ipsum duo sed sit ea et aliquyam, lorem voluptua voluptua diam sanctus justo. Duo tempor rebum consetetur dolor duo eos. Amet sanctus consetetur.
                                </p>
                    <a
                        href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                        className="font-bold text-gray-800 mt-8"
                    >
                        Te asesoramos !!
                                </a>
                </div>

                {/* Services right */}
                <div className="w-full md:w-6/12 px-4 pt-10 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                        <img alt="..."
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                            className="w-full align-middle rounded-t-lg"
                        />
                        <div className="relative p-8 mb-4">
                            {/* Svg */}
                            <svg
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 583 95"
                                className="absolute left-0 w-full block"
                                style={{ height: '95px', top: '-94px' }}
                            >
                                <polygon
                                    points="-30,95 585,95 585,65"
                                    className="text-white fill-current"
                                ></polygon>
                            </svg>
                            <h4 className="text-xl font-bold text-gray-600">
                                Asesoramiento exclusivo
                                        </h4>
                            <p className="text-md font-light mt-2 text-gray-600">
                                Descripción de servicios y asesoramiento personalizado
                                        </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
