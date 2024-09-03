import React from 'react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Ubicación */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Our Location</h3>
                        <p>Córdoba, Argentina</p>
                        <p>Av. Vélez Sarsfield 123, Nueva Córdoba</p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex space-x-6">
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram" 
                            className="text-gray-200 hover:text-pink-500 transition-colors duration-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a 
                            href="https://tiktok.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="TikTok" 
                            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
                        >
                            <FaTiktok size={24} />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="X (formerly Twitter)" 
                            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm">&copy; 2024 Café Delight. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
