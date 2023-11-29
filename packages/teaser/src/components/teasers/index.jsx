import React from "react";
import { Teaser } from "../teaser";
import styles from "./styles";

export const Teasers = () => {
  return (
    <section className={`${styles.section}`}>
      <h2>Teasers</h2>
      <div className={`${styles.teaserContainer}`}>
        <Teaser />
        <Teaser />
      </div>
    </section>
  );
};
