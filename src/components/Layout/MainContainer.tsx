import React from 'react';

const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-10">
            {children}
        </div>
    );
};

export default MainContainer;
