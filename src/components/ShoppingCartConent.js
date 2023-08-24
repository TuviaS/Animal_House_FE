import React from 'react';
import CartItem from './CartItem';
import './ShoppingCartContent.css';

const ShoppingCartContent = ({ orderList, handleRemoveFromCart, items, handleClickSubmitOrder, handleCategoryClick }) => {
  

  const itemIdsInCart = orderList?.itemIdList.split(' ').map((id) => parseInt(id)) || [];
  const itemsInCart = items.filter((item) => itemIdsInCart.includes(item.itemId));

  const totalPrice = itemsInCart.reduce((acc, item) => {
    const quantity = itemIdsInCart.filter((id) => id === item.itemId).length;
    return acc + item.itemPrice * quantity;
  }, 0);

  const cartItemsToShow = itemsInCart.filter((item) => itemIdsInCart.filter((id) => id === item.itemId).length > 0);

  return (
    <div className="shopping-cart-content">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItemsToShow.map((item) => {
            const quantity = itemIdsInCart.filter((id) => id === item.itemId).length;
            return (
              <CartItem
                key={item.itemId}
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
                quantity={quantity}
              />
            );
          })}
          <tr>
            <td colSpan="2">Total Price:</td>
            <td>${totalPrice}</td>
            <td>
              <button className="button" onClick={handleClickSubmitOrder}>Submit order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartContent;
