import React, { useState } from 'react';
import CardDetailModal from './CardModulesDetail';

function CardModule() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {/* Card 1: Emag */}
                <div 
                    className="rounded overflow-hidden shadow-lg cursor-pointer" 
                    onClick={() => handleClick('emag')}
                >
                    <div className="relative">
                        <img className="w-full h-48 object-cover"
                            src="https://play-lh.googleusercontent.com/Kof9ubshUH5PPI6bF-7zR3TtgpA-t1rwQ8Kta6CJQTjg7z78qpXUuvVgBhBAl_WnES8"
                            alt="Emag" />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            Emag
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                            Emag
                        </span>
                        <p className="text-gray-500 text-sm">
                            Electromagnetism concepts and applications
                        </p>
                    </div>
                </div>

                {/* Card 2: RF et Microwave */}
                <div 
                    className="rounded overflow-hidden shadow-lg cursor-pointer" 
                    onClick={() => handleClick('rf')}
                >
                    <div className="relative">
                        <img className="w-full h-48 object-cover"
                            src="https://www.shutterstock.com/image-photo/antenna-tower-telecommunication-phone-base-260nw-2187771181.jpg"
                            alt="RF et Microwave" />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            RF et Microwave
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                            RF et Microwave
                        </span>
                        <p className="text-gray-500 text-sm">
                            Radio Frequency and Microwave technologies
                        </p>
                    </div>
                </div>

                {/* Card 3: Motors */}
                <div 
                    className="rounded overflow-hidden shadow-lg cursor-pointer" 
                    onClick={() => handleClick('motors')}
                >
                    <div className="relative">
                        <img className="w-full h-48 object-cover"
                            src="https://5.imimg.com/data5/SELLER/Default/2021/4/TK/PT/MH/8032731/abb-electric-motors-500x500.jpg"
                            alt="Motors" />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            Motors
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                            Motors
                        </span>
                        <p className="text-gray-500 text-sm">
                            Industrial and electrical motors overview
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal inside CardModule */}
            <CardDetailModal 
                isOpen={isModalOpen} 
                onClose={handleClose} 
                category={selectedCategory} 
            />
        </div>
    );
}

export default CardModule;

