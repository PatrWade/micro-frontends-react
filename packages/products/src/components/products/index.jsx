import React from "react";
import { Product } from "../product";
import styles from "./styles";

export const Products = () => {
  return (
    <section className={`${styles.section}`}>
      <h2>Products</h2>
      <Product />
      <Product />
    </section>
  );
};
