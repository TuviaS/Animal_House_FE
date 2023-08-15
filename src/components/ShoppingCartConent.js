import React from 'react';
import CartItem from './CartItem';
import './ShoppingCartContent.css';

const ShoppingCartContent = ({ orderList, handleRemoveFromCart, items, handleClickSubmitOrder, handleCategoryClick, }) => {
  console.log ("got here...showppingcartcontent");
  
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
    <div className="shopping-cart-content">
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
      <div className="total-price">
        Total Price: ${totalPrice}
      </div>
      <div className="total-price">
        <button className="button" onClick={handleClickSubmitOrder}>Submit order</button>
      </div>
    </div>
    </table>
    <table>

    </table >
    </div>
    
    
  );
};


export default ShoppingCartContent;
