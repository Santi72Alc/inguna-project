import React from 'react';

export default function Gallery() {
    return (
        <section >
            <div className="container mx-auto px-5">
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
                    <div className="shadow-md border w-9/12 md:w-5/12 lg:w-2/12 mx-4 mb-6 py-4">
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
                                {/* <div className="mt-6">
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
                                        </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border w-9/12 md:w-5/12 lg:w-2/12 mx-4 mb-6 py-4">
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
                                {/* <div className="mt-6">
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
                                        </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border w-9/12 md:w-5/12 lg:w-2/12 mx-4 mb-6 py-4">
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
                                {/* <div className="mt-6">
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
                                        </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border w-9/12 md:w-5/12 lg:w-2/12 mx-4 mb-6 py-4">
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
                                {/* <div className="mt-6">
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
                                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
