import React from 'react';

import CurseName from './CurseName';

export default function Curses() {
    return (
        <section className="relative bg-gray-300 pb-10" >
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
        </section >
    );
}
