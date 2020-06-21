import React from "react";
import styles from "./Marquee.module.css";

const Marquee = ({ images }) => (
  <div className={styles.wrapper}>
    <div className={styles.track}>
      {images.map((props, index) => (
        <img key={`slide-${index}`} className={styles.slide} {...props} />
      ))}
      </div>
      <div className={styles.backup}>
      {images.map((props, index) => (
        <img key={`slide-backup-${index}`} className={styles.slide} {...props} />
      ))}
      </div>
  </div>
);

export default Marquee;
