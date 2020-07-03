import React, { Suspense } from "react";
import styles from "./Marquee.module.css";
import Loader from "../Loader";
import Img from "../Img";

const Marquee = ({ images }) => (
  <Suspense
    fallback={
      <div className={styles.wrapper}>
        <Loader />
      </div>
    }
  >
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {images.map((props, index) => (
          <Img key={`slide-${index}`} className={styles.slide} {...props} />
        ))}
      </div>
      <div className={styles.backup}>
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
