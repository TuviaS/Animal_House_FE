import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserIcon from './UserIcon';
import ShoppingCart from './ShoppingCart';
import UserLogoutIcon from './UserLogoutIcon';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({
    loggedIn,
    onUserIconClick,
    client,
    onLogoutClick,
    onSearchSubmit,
    onLogoClick,
    onCancelClick,
    orderList,
    tempOrderExists,
    handleCartClick,
    handleShowMyFavorite
}) => {
    return (
        <nav className="navbar">
            <div className="navbar-section">
                <Logo onLogoClick={onLogoClick}/>
            </div>
            <div className="navbar-section searchbar-container">
                <SearchBar onSearchSubmit={onSearchSubmit}/>
            </div>

            <div className="navbar-section user-icon-container" onClick={onUserIconClick}>
                <UserIcon loggedIn={loggedIn} client={client}/>
            </div>

            <div className="navbar-section logout-icon-container">
                {loggedIn && <UserLogoutIcon onLogoutClick={onLogoutClick}/>}
            </div>

            <div
                className="navbar-section my-favorites-container"
                onClick={handleShowMyFavorite}>
                {loggedIn && (
                    <span>
                        <FontAwesomeIcon icon={faStar}/>
                        My Favorites
                    </span>
                )}
            </div>
            <div className="navbar-section cart-icon-container">
                <ShoppingCart
                    orderList={orderList}
                    tempOrderExists={tempOrderExists}
                    handleCartClick={handleCartClick}/>
            </div>

        </nav>
    );
};

export default Navbar;
