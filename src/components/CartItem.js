import React, { useState } from 'react';

const CartItem = ({ email, item, handleRemoveFromCart, quantity }) => {
  // Define state for the quantity of the item in the cart
  const [itemQuantity, setItemQuantity] = useState(quantity);

  // Function to handle the "Remove from Cart" button click
  const handleRemoveItemClick = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
      
      handleRemoveFromCart(item.itemId); // Call the original click handler from the parent component
    }
  };

  return (
    <tr className="cart-item">
      <td>
        <img
          src={item.itemPicture_link}
          alt={item.itemName}
          className="cart-item-image"
        />
      </td>
      <td>
        <p className="cart-item-name">{item.itemName}</p>
        <p className="cart-item-price">${item.itemPrice}</p>
      </td>
      <td>
        <p className="cart-item-quantity">Quantity: {itemQuantity}</p>
      </td>
      <td>
        <button className="cart-item-remove" onClick={handleRemoveItemClick}>
          Remove from Cart
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
