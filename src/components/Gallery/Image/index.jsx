import React from 'react';

export default function Image({ img, title, subtitle}) {
    return (
        <div className="shadow-md border w-9/12 md:w-5/12 lg:w-2/12 mx-4 mb-6 py-4">
            <div className="px-6 ">
                <img src={img}
                    alt="..."
                    className="flex content-center rounded-t-3xl mx-auto transform hover:scale-105 justify-items-center"
                    style={{ maxWidth: '150px', maxHeight: '150px' }}
                />
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">{title}</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        {subtitle}
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
    );
}
