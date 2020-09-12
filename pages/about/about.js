import Head from "next/head";
import dynamic from "next/dynamic";
import Honduras from "react-honduras";

import TechStack from "../../src/TechStack";
import styles from "./about.module.css";

const BasedGod = dynamic(() => import("../../src/BasedGod"), {
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
        <title>About Me - José Muñoz Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="José Muñoz Software Engineer" />
        <meta property="og:image" content="/profile.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://josemunoz.dev" />
        <meta
          property="og:description"
          content="Software Engineer based in Vancouver"
        />
      </Head>
      <BasedGod />
      <div>
        <article className={styles.article}>
          <h1 className={styles.header}>Who is José Muñoz?</h1>
          <div className={styles.level}>
            <div className={styles.levelItem}>
              <p>
                I'm a software developer, speaker, and technology enthusiast
                based on Vancouver working at Destiny Media as a Lead Frontend
                Engineer. I have spoken in a few different cities like San Diego
                and Vancouver about frontend development, design, and more.
              </p>
            </div>
            <img
              src="/images/chart.svg"
              alt="Personal Mission"
              className={styles.image}
            />
          </div>
          <div className={styles.level}>
            <div className={styles.image}>
              <Honduras />
            </div>
            <div className={styles.levelItem}>
              <p>
                I was born in San Pedro Sula, Honduras. 
              </p>
            </div>
          </div>
          <h2 className={styles.subHeader}>Highlights</h2>
          <Marquee images={images} />
          <h2 className={styles.subHeader}>
            Some Technologies I've Worked With:
          </h2>
          <TechStack />
        </article>
      </div>
    </>
  );
};

export default About;
