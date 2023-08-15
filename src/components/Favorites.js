import React from 'react';
import Navbar2 from '../navbar2/Navbar2';

const Favorites = ({favoriteItems, handleDeleteFromFavoriteClick, handleCloseFavorites, handleAddtoCartClick}) => {
    return (
        <div className="favorites">
            <h2>My Favorite Items</h2>
            {favoriteItems
                ? (favoriteItems.length > 0
                    ? (
                        <div className="favorites-list">
                            {favoriteItems.map((favItem) => (
                                <div key={favItem.itemId} className="favorite-item">
                                    <img src={favItem.itemPicture_link} alt={favItem.itemName}/>
                                    <div className="favorite-item-details">
                                        <p>Name: {favItem.itemName}</p>
                                        <p>Price: ${favItem.itemPrice}</p>
                                        <button onClick={() => handleDeleteFromFavoriteClick(favItem.itemId)}>
                                            Remove from Favorites
                                        </button>
                                        <button onClick={() => handleAddtoCartClick(favItem.itemId)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    : (
                        <p>No favorite items yet.</p>
                    ))
                : null}

            <button onClick={handleCloseFavorites}>Close</button>
        </div>
    );
};
<Navbar2 > </Navbar2>

export default Favorites;
