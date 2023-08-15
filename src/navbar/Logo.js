import React from 'react';

const Logo = ({onLogoClick}) => { // Add onLogoClick prop
    const handleLogoClick = () => {

        onLogoClick();
    };

    return (
        <div>

            <img
                src="/images/the-animal-house-high-resolution-logo-black-on-transparent-background.png"
                alt="Logo"
                className='.navbar-img'
                onClick={handleLogoClick}/>
        </div>
    );
};

export default Logo;
