import React from "react";
import styles from "./styles";

export const Product = () => {
  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.skeleton} ${styles.image}`} />
      <div className={`${styles.descriptionContainer}`}>
        <div className={`${styles.skeleton} ${styles.description}`} />
        <div className={`${styles.skeleton} ${styles.description}`} />
        <div className={`${styles.skeleton} ${styles.description}`} />
      </div>
    </article>
  );
};
