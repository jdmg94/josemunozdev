import React from "react";

const Sources = ({ srcSet = "", alt, className }) =>
  srcSet.split(",").map((src, index, list) => {
    if (index + 1 === list.length) {
      return <img key={src} src={src} alt={alt} className={className} />;
    }

    const imageType = src.split(".").pop();

    return (
      <source
        key={src}
        srcSet={src}
        className={className}
        type={`image/${imageType}`}
      />
    );
  });

export default Sources;
