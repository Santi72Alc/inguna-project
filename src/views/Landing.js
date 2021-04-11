import React from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Card from 'components/Card';

import CurseName from 'components/CurseName';
import Separator from 'components/Separator';


import ojo from 'assets/img/ojo.svg';
import logo from 'assets/img/logos/logo_sm.svg';

export default function Landing() {
    return (
        <div id="home" className="text-background">
            <Navbar fixed />

            <main>
                {/* Header section */}
                <div className="relative pt-20 pb-40 flex content-center items-center justify-center" >

                    {/* Header Image */}
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>

                    {/* Header Title */}
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="px-2">
                                    <h1 className="text-white font-semibold text-4xl md:text-6xl hover:opacity-100">
                                        Inguna Spain
                                    </h1>
                                    <h2 className="mt-5 text-indigo-500 font-semibold text-2xl md:text-4xl">
                                        Estilista de Mirada
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-300">
                                        Esta va a ser el 'Landing page' de mi clienta Inguna Spain.
                                        Cambiaremos los colores iniciales y las fotos que se vayan a
                                        poner finalmente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: '75px' }}
                    >
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                                // height: '100px',
                                // left: "0px", 
                                bottom: 0

                            }}
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-gray-300 fill-current"
                            ></polygon>
                        </svg>
                        {/*     <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg> */}
                    </div>
                </div>

                {/* Cards section */}
                <section className="bg-gray-300 -mt-24">
                    <div className="container px-2 mx-auto">

                        {/* Cards article */}
                        <article className="flex flex-wrap">

                            {/* Card 1 */}
                            <Card className="md:pt-12" title="Tarjeta 1" img={ojo}>
                                Keep you user engaged by providing meaningful
                                information. Remember that by this time, the user is
                                curious.
                            </Card>

                            {/* Card 2 */}
                            <Card title="New Card 2" img={logo}>
                                Keep you user engaged by providing meaningful
                                information. Remember that by this time, the user is
                                curious.
                            </Card>

                            {/* Card 3 */}
                            <Card className="md:pt-12" title="Verified Company">
                                Keep you user engaged by providing meaningful
                                information. Remember that by this time, the user is
                                curious.
                            </Card>

                        </article>
                    </div>
                </section>

                {/* Services section */}
                <Separator id="services" className="pb-20" />
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
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                <img alt="..."
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <div className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block"
                                        style={{
                                            height: '95px',
                                            top: '-94px',
                                        }}
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

                {/* Curses section */}
                <Separator id="curses" className="pb-20" />
                <section className="relative bg-gray-300 pb-10">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap px-4">
                            {/* Curses left (image) */}
                            <div className="w-full md:w-4/12 pt-10 mx-auto">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            {/* Curses right */}
                            <div className="w-full md:w-6/12 mx-auto px-3">
                                <div className="mt-10">
                                    {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div> */}
                                    <h3 className="text-3xl font-semibold">Cursos</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        Descripción de los cursos que se pueden realizar, grupos de trabajo, asesoramiento personalizado...
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <CurseName title="Curso 1" />
                                        </li>
                                        <li className="py-2">
                                            <CurseName title="Curso 2" />
                                        </li>
                                        <li className="py-2">
                                            <CurseName title="Curso 3" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery section */}
                <Separator id="gallery" className="pb-20" />
                <section >
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap mb-10 justify-center mt-6">
                            <div className="w-full md:w-6/12 sm:px-4 mt-4 text-center">
                                <h3 className="text-3xl font-semibold">Galería</h3>
                                <p className="text-lg leading-relaxed mt-4 text-gray-600">
                                    Cada momento debe tener una mirada.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-600">Aquí se muestran esos momentos que son capaces de poder llegar a cambiar a una persona.</p>
                            </div>
                        </div>
                        {/* Gallery pictures */}
                        <div className="flex flex-wrap mx-auto justify-center">
                            <div className="shadow-md border sm:w-full lg:w-5/12 mx-4 mb-6 py-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={require('assets/img/team-1-800x800.jpg').default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md border sm:w-full lg:w-5/12 mx-4 mb-6 py-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={require('assets/img/team-2-800x800.jpg').default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Romina Hadid</h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md border sm:w-full lg:w-5/12 mx-4 mb-6 py-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={require('assets/img/team-3-800x800.jpg').default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Alexa Smith</h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            UI/UX Designer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md border sm:w-full lg:w-5/12 mx-4 mb-6 py-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={require('assets/img/team-4-470x470.png').default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: '120px' }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Jenna Kardi</h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Info */}
                <Separator id="meetus" className="pb-20" />
                <section className="relative block bg-gray-900">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: '80px' }}
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

                    {/* Get a touch */}
                    <div className="container mx-auto px-4 py-10 ">
                        {/* Presentation contact */}
                        <div className="flex flex-wrap text-center justify-center xl:pb-10">
                            <div className="w-full md:w-7/12 px-3">
                                <h2 className="text-4xl sm:text-3xl font-semibold text-white">
                                    Estilista De Mirada
                                </h2>
                                <p className="text-lg sm:text-base leading-relaxed mt-4 text-gray-500">
                                    Durante años asesorando, enseñando y acompañando para que el cliente disfrute y sienta el poder, sentimiento y libertad que tiene en su mirada.
                                </p>
                            </div>
                        </div>

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
                    </div>
                </section>

                {/* Contact by form */}
                {/* <section className="relative block py-24 lg:pt-0 bg-gray-900">
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
                </section> */}
            </main>
            <Footer />
        </div >
    );
}
