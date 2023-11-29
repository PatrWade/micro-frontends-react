import React from "react";
import styles from "./styles";

export const Teaser = () => {
  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.skeleton} ${styles.image}`} />
      <div className={`${styles.skeleton} ${styles.description}`} />
    </article>
  );
};
