import React from 'react';

interface CoffeeCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
}
const CoffeeCard: React.FC<CoffeeCardProps> = ({ name, description, price, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-700">{description}</p>
                <p className="text-gray-900 font-bold">{price}</p>
            </div>
        </div>
    );
};

export default CoffeeCard;
