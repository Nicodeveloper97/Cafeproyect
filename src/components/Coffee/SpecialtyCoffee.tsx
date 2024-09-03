import React, { useRef } from 'react';
import { useGsapAnimations } from '../../hooks/useGsapAnimations';
import { FaCoffee, FaMugHot, FaSeedling, FaWater, FaLeaf } from 'react-icons/fa'; // Importar iconos

const SpecialtyCoffee: React.FC = () => {
    const sectionRef = useRef(null);

    // Animación GSAP para la sección
    useGsapAnimations(sectionRef, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
    });

    return (
        <section
            ref={sectionRef}
            className="py-16 opacity-0 transform translate-y-10 bg-gray-100"
        >
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800 tracking-wider">Our Specialty Coffee Process</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        At Café Delight, we craft a unique experience in every cup. Our specialty coffee process is designed to deliver the finest flavors, from bean to brew.
                    </p>
                    <div className="border-t-2 border-gray-300 w-16 mx-auto my-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Step 1: Selection */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaSeedling className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Selection</h3>
                        <p className="text-gray-600">
                            We start with the careful selection of high-quality, freshly roasted beans.
                        </p>
                    </div>

                    {/* Step 2: Grinding */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaLeaf className="text-yellow-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Grinding</h3>
                        <p className="text-gray-600">
                            Precision grinding tailored to the brewing method to bring out the best flavor.
                        </p>
                    </div>

                    {/* Step 3: Brewing */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaWater className="text-blue-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Brewing</h3>
                        <p className="text-gray-600">
                            Optimal water temperature and brewing time for a perfect cup.
                        </p>
                    </div>

                    {/* Step 4: Extraction */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaCoffee className="text-brown-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Extraction</h3>
                        <p className="text-gray-600">
                            Expert extraction for complexity and depth in flavor.
                        </p>
                    </div>

                    {/* Step 5: Presentation */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaMugHot className="text-red-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Presentation</h3>
                        <p className="text-gray-600">
                            Artful presentation with latte designs and impeccable service.
                        </p>
                    </div>
                </div>

                {/* Separador decorativo */}
                <div className="mt-16">
                    <div className="flex justify-center items-center">
                        <div className="border-t-2 border-gray-300 w-1/3"></div>
                        <span className="mx-4 text-gray-600">Enjoy the Art of Coffee</span>
                        <div className="border-t-2 border-gray-300 w-1/3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialtyCoffee;
