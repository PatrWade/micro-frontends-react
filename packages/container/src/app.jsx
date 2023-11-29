import React from "react";
import { Products } from "products/Products";
import { Teasers } from "teaser/Teaser";
import { NavigationCart } from "checkout/Checkout";
import styles from "./styles";

export const App = () => {
  return (
    <div>
      <nav className={`${styles.navigation}`}>
        <NavigationCart />
      </nav>
      <hr />
      <Products />
      <Teasers />
    </div>
  );
};
