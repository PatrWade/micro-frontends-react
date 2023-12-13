import React, { useState, useEffect } from "react";
import styles from "./styles";
import { CartIcon } from "../icons/cart-icon";

export const NavigationCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const listener = (event) => {
    setCartProducts((currentProducts) => [
      ...currentProducts,
      event.detail.productId,
    ]);
  };

  useEffect(() => {
    window.addEventListener("ADD_TO_CART", listener);

    return () => {
      window.removeEventListener("ADD_TO_CART", listener);
    };
  }, []);

  return (
    <span className={`${styles.navigationCart}`}>
      <CartIcon />
      <span className={`${styles.itemCount}`}>{cartProducts.length}</span>
    </span>
  );
};
