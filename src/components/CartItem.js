import React, {useState} from 'react';

const CartItem = ({email, item, handleRemoveFromCart, quantity}) => {
    // Define state for the quantity of the item in the cart
    const [itemQuantity,
        setItemQuantity] = useState(quantity);

    // Function to handle the "Remove from Cart" button click
    const handleRemoveItemClick = () => {
        if (itemQuantity > 0) {
            setItemQuantity((prevQuantity) => prevQuantity - 1);
            console.log("from cartitem, about to handlerremovefrom cart to itemId :" + item.itemId);
            handleRemoveFromCart(item.itemId); // Call the original click handler from the parent component
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <img
                    src={item.itemPicture_link}
                    alt={item.itemName}
                    className="cart-item-image"/>
                <div className="cart-item-info">
                    <div className="cart-item-name">{item.itemName}</div>
                    <div className="cart-item-price">${item.itemPrice}</div>

                    <div className="cart-item-quantity">Quantity: {itemQuantity}</div>
                </div>
            </div>
            <div className="cart-item-actions">
                <button className="cart-item-remove" onClick={handleRemoveItemClick}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
};

export default CartItem;
