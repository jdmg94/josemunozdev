import React from "react";
import Sources from "./ImageSources";
import styles from "./Marquee.module.css";

const Marquee = ({ images = [], itemDelay = 1 }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        animationDuration: `${Math.ceil(images.length * itemDelay)}s`,
      }}
    >
      <div className={styles.track}>
        {images.map(({ srcSet, alt }, index) => (
          <picture key={`slide-${index}`}>
            <Sources srcSet={srcSet} alt={alt} className={styles.slide} />
          </picture>
        ))}
      </div>
      <div className={styles.track}>
        {images.map(({ srcSet, alt }, index) => (
          <picture key={`slide-backup-${index}`}>
            <Sources srcSet={srcSet} alt={alt} className={styles.slide} />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Marquee);
