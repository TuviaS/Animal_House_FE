import React, {useState} from "react";
import "./Grid.css";

const Grid = ({
    items,
    showGrid,
    handleAddtoCartClick,
    favoriteItems,
    handleAddToFavoritesClick,
    handleDeleteFromFavoritesClick
}) => {
    const rows = 5;
    const columns = 15;
    const totalCells = rows * columns;
    const defaultImageURL = "https://www.purina.co.il/sites/site.prod1.purina.co.il/files/12467025_7613036288" +
            "958_Enlarge.jpg";

    const [itemQuantities,
        setItemQuantities] = useState({});

    const handleAddToCartClick = (itemId) => {
        const selectedItem = items.find((item) => item.itemId === itemId);

        if (selectedItem) {
            const updatedQuantity = (itemQuantities[itemId] || selectedItem.itemQuantity) - 1;
            setItemQuantities((prevQuantities) => ({
                ...prevQuantities,
                [itemId]: updatedQuantity
            }));

            handleAddtoCartClick(itemId);
        }
    };

    const renderGrid = () => {
        const cells = [];
        if (items && items.length > 0) {
            for (let i = 0; i < totalCells; i += 5) {
                const itemIndex = Math.floor(i / 5);
                const item = items[itemIndex];
                if (!item) {

                    continue;
                }

                const imageSrc = item
                    ?.itemPicture_link || defaultImageURL;
                const isOutOfStock = itemQuantities[item
                        ?.itemId] === 0;

                cells.push(
                    <div key={i}>
                        <div className="grid-cell">
                            <img src={imageSrc} alt={item
                                ?.itemName}/>
                        </div>
                        <div className="grid-row-small">{item
                                ?.itemName}</div>
                        <div className="grid-row-small">Price: ${item
                                ?.itemPrice}</div>

                        <div className="grid-row-small">Items Left: {itemQuantities[item
                                    ?.itemId] || item
                                ?.itemQuantity}</div>
                        <div className="grid-row-small">
                            {isOutOfStock
                                ? (
                                    <div className="out-of-stock-text">Out of Stock</div>
                                )
                                : (
                                    <div>
                                        <button
                                            className="button-3d"
                                            onClick={() => handleAddToCartClick(item
                                            ?.itemId)}>Add to Cart</button>
                                        {favoriteItems && favoriteItems.some(favItem => favItem.itemId === item
                                            ?.itemId)
                                            ? (
                                                <button
                                                    className="button-3d"
                                                    onClick={() => handleDeleteFromFavoritesClick(item
                                                    ?.itemId)}>Remove from Favorites</button>
                                            )
                                            : (
                                                <button
                                                    className="button-3d"
                                                    onClick={() => handleAddToFavoritesClick(item
                                                    ?.itemId)}>Add to Favorites</button>
                                            )}
                                    </div>
                                )}
                        </div>
                    </div>
                );
            }
        } else {

            cells.push(
                <div key="no-results" className="no-results-message">
                    No results found.
                </div>
            );
        }
        return cells;
    };

    return (
        <div className="grid-container">

            {showGrid
                ? renderGrid()
                : null}
        </div>
    );
};

export default Grid;
