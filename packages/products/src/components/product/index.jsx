import React, { useId } from "react";
import styles from "./styles";

export const Product = () => {
  const productId = useId();

  const addToCartEvent = () => {
    const addEvent = new CustomEvent("ADD_TO_CART", {
      detail: { productId },
    });
    window.dispatchEvent(addEvent);
  };

  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.skeleton} ${styles.image}`} />
      <div className={`${styles.descriptionContainer}`}>
        <div className={`${styles.skeleton} ${styles.description}`} />
        <div className={`${styles.skeleton} ${styles.description}`} />
        <button
          className={`${styles.skeleton} ${styles.description}`}
          onClick={addToCartEvent}
        >
          add product
        </button>
      </div>
    </article>
  );
};
