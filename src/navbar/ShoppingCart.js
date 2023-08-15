import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({orderList, tempOrderExists, handleCartClick}) => {
    const [count,
        setCount] = useState(0);

    useEffect(() => {
        if (orderList && orderList.itemIdList && tempOrderExists) {
            const itemIdArray = orderList
                .itemIdList
                .split(" ")
                .map(Number);
            setCount(itemIdArray.length);
        } else {

            setCount(0);
        }
    }, [orderList, tempOrderExists]);

    const onClickHandler = orderList && orderList.itemIdList && tempOrderExists
        ? handleCartClick
        : undefined;

    return (
        <div className="cart-icon" onClick={onClickHandler}>
            <FontAwesomeIcon icon={faShoppingCart}/> {count > 0 && <span className="cart-count">{count}</span>}
        </div>
    );
};

export default ShoppingCart;
