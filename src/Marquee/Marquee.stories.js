import Marquee from "./Marquee";

const images = [
  {
    src: "https://i.redd.it/t6d05ct2ij851.jpg",
    alt: "cat",
  },
  {
    src: "https://i.redd.it/2thsg7qahi851.jpg",
    alt: "cat",
  },
  {
    src: "https://i.redd.it/b6cgzp0xgi851.jpg",
    alt: "cat",
  },
  {
    src: "https://i.redd.it/ys7lt72qgj851.jpg",
    alt: "cat",
  },
  {
    src: "https://i.redd.it/ptrlvv9nij851.jpg",
    alt: "cat",
  },
];

export default { title: "Marquee" };

export const Example = () => <Marquee images={images} />;
