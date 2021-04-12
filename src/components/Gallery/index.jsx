import React from 'react';
import Image from './Image';

import img01 from 'assets/img/mujer-morena.jpg';
import img02 from 'assets/img/mujer-mirada-lateral.jpg';
import img03 from 'assets/img/mujer-pelo-corto.jpg';
import img04 from 'assets/img/mujer-rubia-rizado.jpg';
import img05 from 'assets/img/mujer-ojos-azules.jpg';


export default function Gallery() {
    return (
        <section >
            <div className="container mx-auto ">
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="w-full md:w-8/12 sm:px-4 mt-4 text-center">
                        <h3 className="text-3xl font-semibold">Galería</h3>
                        <p className="text-lg leading-relaxed mt-4 text-gray-600">
                            Cada momento debe tener una mirada.
                                </p>
                        <p className="text-lg leading-relaxed text-gray-600">Aquí se muestran esos momentos que son capaces de poder llegar a cambiar a una persona.</p>
                    </div>
                </div>

                {/* Gallery pictures */}
                <div className="flex flex-wrap mx-auto justify-center mt-10">
                    <Image img={img01} title="Priscille Smith" subtitle="Uñas exulpidas" />
                    <Image img={img02} title="Romina Hadid" />
                    <Image img={img03} title="Luisa G." />
                    <Image img={img04} title="Rosa de la Torre" subtitle="Mirada intrigante"/>
                    <Image img={img05} title="Sharon Ohaio" />
                </div>
            </div>
        </section>
    );
}
