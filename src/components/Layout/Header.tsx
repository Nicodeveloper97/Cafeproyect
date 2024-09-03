import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-100 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Café Delight</h1>
                <nav>
                    <div className="md:hidden">
                        <button
                            aria-label="Toggle Menu"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
                        <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
                        <li><a href="#menu" className="text-gray-800 hover:text-blue-600">Menu</a></li>
                        <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
                        <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
