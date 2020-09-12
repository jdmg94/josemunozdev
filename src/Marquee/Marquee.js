import React, { Suspense } from "react";
import styles from "./Marquee.module.css";
import Loader from "../Loader";
import Img from "../Img";

const deriveDuration = (items = []) => `${Math.max(items.length * 0.75, 7)}s`;

const Marquee = ({ images }) => (
  <Suspense
    fallback={
      <div className={styles.wrapper} style={{ justifyContent: "center" }}>
        <Loader />
      </div>
    }
  >
    <div className={styles.wrapper}>
      <div
        className={styles.track}
        style={{ animationDuration: deriveDuration(images) }}
      >
        {images.map((props, index) => (
          <Img key={`slide-${index}`} className={styles.slide} {...props} />
        ))}
      </div>
      <div
        className={styles.backup}
        style={{ animationDuration: deriveDuration(images) }}
      >
        {images.map((props, index) => (
          <img
            key={`slide-backup-${index}`}
            className={styles.slide}
            {...props}
          />
        ))}
      </div>
    </div>
  </Suspense>
);

export default Marquee;
