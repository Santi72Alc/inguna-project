import React from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import Separator from 'components/Separator';

import Services from 'components/Services';
import Curses from 'components/Curses';
import Gallery from 'components/Gallery';
import InfoContact from 'components/Contact';
import Header from 'components/Header';
import Cards from 'components/Cards';


export default function Landing() {
    return (
        <div id="home" className="text-background">
            <Navbar fixed />

            <main>
                {/* Header section */}
                <Header />

                {/* Cards section */}
                <Cards />

                {/* Services section */}
                <Separator id="services" className="pb-20" />
                <Services />

                {/* Curses section */}
                <Separator id="curses" className="pb-20" />
                <Curses />

                {/* Gallery section */}
                <Separator id="gallery" className="pb-20" />
                <Gallery />

                {/* Info contact */}
                <Separator id="meetme" className="pb-20" />
                <InfoContact />


            </main>
            <Footer />
        </div >
    );
}
