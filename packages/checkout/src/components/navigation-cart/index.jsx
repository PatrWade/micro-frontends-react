import React from "react";
import styles from "./styles";
import { CartIcon } from "../icons/cart-icon";

export const NavigationCart = () => {
  return (
    <span className={`${styles.navigationCart}`}>
      <CartIcon />
      <span className={`${styles.itemCount}`}>3</span>
    </span>
  );
};
