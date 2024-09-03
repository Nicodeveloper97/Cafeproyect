import React from 'react';
import CoffeeCard from './CoffeeCard';
import espresoimg from '../../assets/Espreso.jpg'
import latteimg from '../../assets/Latte.avif'
import cappucchinoimg from '../../assets/Capuchino.avif'
import mochaimg from '../../assets/Mocha.avif'
import machiatoimg from '../../assets/Machiato.avif'
import americanoimg from '../../assets/Americano.avif'

const coffees = [
    {
        name: "Espresso",
        description: "Strong and bold espresso.",
        price: "$3.00",
        image: espresoimg
    },
    {
        name: "Latte",
        description: "Creamy and smooth latte.",
        price: "$4.00",
        image: latteimg
    },
    {
        name: "Cappuccino",
        description: "Rich and foamy cappuccino.",
        price: "$4.50",
        image: cappucchinoimg
    },
    {
        name: "Americano",
        description: "Smooth and balanced americano.",
        price: "$3.50",
        image: americanoimg
    },
    {
        name: "Mocha",
        description: "Chocolate-flavored mocha.",
        price: "$4.75",
        image: mochaimg
    },
    {
        name: "Macchiato",
        description: "Espresso with a dash of foamed milk.",
        price: "$4.25",
        image: machiatoimg
    },
];

const CoffeeList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffees.map(coffee => (
                <CoffeeCard 
                    key={coffee.name}
                    name={coffee.name}
                    description={coffee.description}
                    price={coffee.price}
                    image={coffee.image}
                />
            ))}
        </div>
    );
}

export default CoffeeList;
