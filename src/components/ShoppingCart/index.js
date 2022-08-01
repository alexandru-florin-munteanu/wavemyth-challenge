import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../images/shopping-cart.svg";
import { getCartItems } from "../redux/selectors/cart";
import "./style.scss";
const ShoppingCart = () => {
  const cartCount = useSelector(getCartItems);

  return (
    <div className="shopping-cart flex flex__row">
      <button>
        <CartIcon />
      </button>
      <span className="shopping-cart__count">{cartCount}</span>
    </div>
  );
};

export default ShoppingCart;
