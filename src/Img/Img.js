import React from 'react'
import useSwr from 'swr'

const imageFetcher = source => new Promise((resolve, reject) => {
  const imageBuffer = new Image();
  
  imageBuffer.src = source;
  imageBuffer.onload = resolve;
  imageBuffer.onerror = reject;
});

const Img = ({ src, ...props}) => {
  useSwr(src, imageFetcher, { suspense: true })

  return <img src={src} {...props} />
};

export default Img;
