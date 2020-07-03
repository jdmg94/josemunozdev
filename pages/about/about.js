import Head from "next/head";
import dynamic from "next/dynamic";
import Honduras from "react-honduras";

import Container from "../../src/Container";
import styles from "./about.module.css";

const BasedGod = dynamic(() => import("../../src/BasedGod"), {
  ssr: false,
  loading: () => <Container />,
});

const TechStack = dynamic(() => import("../../src/TechStack"), {
  ssr: false,
});

const Marquee = dynamic(() => import("../../src/Marquee"), {
  ssr: false,
});

const images = [
  {
    src: "/highlights/dan-2018.jpg",
    alt: "Dan Abramov and I at React Conf 2018",
  },
  {
    src: "/highlights/san-diego-meetup.jpg",
    alt: "My first talk on the San Diego meetup",
  },
  {
    src: "/highlights/amazon-2019.jpg",
    alt:
      "That's me on Amazon Campus San Diego, I gave a presentation on the Suspense API",
  },
  {
    src: "/highlights/react-conf-2019-2.jpg",
    alt: "React Conf 2019 Group Picture",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - Jose Munoz Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jose Munoz Software Engineer" />
        <meta property="og:image" content="/profile.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://josemunoz.dev" />
        <meta
          property="og:description"
          content="Software Engineer based in Vancouver"
        />
      </Head>
      <div>
        <BasedGod />
      </div>
      <div>
        <article className={styles.article}>
          <h1 className={styles.header}>Who is Jose Munoz?</h1>
          <div className={styles.level}>
            <div className={styles.levelItem}>
              <p>
                Born on September 27th, 1994 in the city of San Pedro Sula,
                Honduras. Jose Munoz is a Senior Software Engineer creating
                engaging applications using React and GraphQL.
              </p>
            </div>
            <div className={styles.image}>
              <Honduras />
            </div>
          </div>
          <div className={styles.level}>
            <img
              src="/images/chart.svg"
              alt="Personal Mission"
              className={styles.image}
            />
            <div className={styles.levelItem}>
              <p>
                I believe in writing elegant code that yields consistent and
                reproducible results. As a developer I
              </p>
            </div>
          </div>
          <h2 className={styles.subHeader}>Highlights</h2>
          <Marquee images={images} />
          <h2 className={styles.subHeader}>
            Some Technologies I've Worked With:
          </h2>
          <TechStack />
          <p>And many more that didn't had a nice logo</p>
          {/* <h2 className={styles.subHeader}>Work Experience</h2> */}
        </article>
      </div>
    </>
  );
};

export default About;
