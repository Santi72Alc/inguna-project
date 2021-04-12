import React from 'react';

export default function Card({ img, title, className, children }) {
    const classNameBase = "w-full md:w-4/12 px-4 text-center transform hover:scale-105 ";
    return (
        <div className={className ? classNameBase + className : classNameBase}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 shadow-lg rounded-full bg-indigo-300">
                        {img &&
                            <img src={img} alt="Texto alternativo" />
                        }
                        {!img &&
                            <i className="fas fa-award"></i>
                        }
                    </div>
                    {title && <h6 className="text-xl font-semibold">{title}</h6>}
                    <p className="mt-2 mb-4 text-gray-600">
                        {children}
                    </p>
                    {/* Divide details about your product or agency work into parts. A paragraph
                        describing a feature will be enough. */}
                </div>
            </div>
        </div>
    );
}
