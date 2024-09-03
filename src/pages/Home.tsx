import React from 'react';
import CoffeeList from '../components/Coffee/CoffeeList';
import SpecialtyCoffee from '../components/Coffee/SpecialtyCoffee';
import MainContainer from '../components/Layout/MainContainer';
import cafe from '../assets/cafeeee.avif'

const Home: React.FC = () => {
    return (
        <MainContainer>
            <section id="home" className="text-center mb-12 bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center text-white" style={{ backgroundImage: `url(${cafe})` }}>
                <h1 className="text-3xl font-bold mb-6">Welcome to Café Delight</h1>
                <p className="mb-6 pl-96">Discover our finest selections of coffee.</p>
            </section>

            <section id="menu" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
                <CoffeeList />
            </section>

            <section id="specialty" className="mb-12">
                <SpecialtyCoffee />
            </section>
        </MainContainer>
    );
};

export default Home;
