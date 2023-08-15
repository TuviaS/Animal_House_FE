import React from 'react';
import './Navbar2.css';

const Navbar2 = ({onCategoryClick}) => {
    const handleCategoryClick = (category) => {
        onCategoryClick(category);
    };

    return (
        <nav className="navbar2">
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('dog')}>Dogs</a>
            </div>
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('cat')}>Cats</a>
            </div>
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('fish')}>Fish</a>
            </div>
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('bird')}>Birds</a>
            </div>
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('rodents')}>Rodents</a>
            </div>
            <div className="navbar2-right">
                <a onClick={() => handleCategoryClick('reptiles')}>Reptiles</a>
            </div>
        </nav>
    );
};

export default Navbar2;
