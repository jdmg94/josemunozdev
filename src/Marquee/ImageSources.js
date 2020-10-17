import React from "react";
import styles from "./Marquee.module.css";

const Sources = ({ srcSet = "", alt }) =>
  srcSet.split(",").map((src, index, list) => {
    if (index + 1 === list.length) {
      return <img src={src} alt={alt} className={styles.slide} />;
    }

    const imageType = src.split(".").pop();

    return (
      <source
        srcSet={src}
        className={styles.slide}
        type={`image/${imageType}`}
      />
    );
  });

export default Sources;
