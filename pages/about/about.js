import Head from "next/head";
import dynamic from "next/dynamic";
import Honduras from "react-honduras";

import BackButton from "../../src/BackButton";
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
    src: "/highlights/panama-canal.jpg",
    alt: "The view of the Panama Canal",
  },
  {
    src: "/highlights/panama-peeps.jpg",
    alt: "my old team in Panama",
  },
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

const About = () => (
  <>
    <Head>
      <title>About Me - José Muñoz</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About - José Muñoz" />
      <meta property="og:image" content="/profile.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://josemunoz.dev" />
      <meta
        property="og:description"
        content="I'm a software developer, speaker, and technology enthusiast
        based on Vancouver working as a Lead Frontend Engineer. I have
        spoken on meetups in San Diego and Vancouver about frontend
        development, design, and more."
      />
    </Head>
    <BackButton href="/" />
    <BasedGod />
    <div>
      <article className={styles.article}>
        <h1 className={styles.header}>Who is José Muñoz?</h1>
        <div className={styles.level}>
          <div className={styles.levelItem}>
            <p>
              I'm a software developer, speaker, and technology enthusiast based
              on Vancouver working as a Lead Frontend Engineer. I have spoken on
              meetups in San Diego and Vancouver about frontend development,
              design, and more. I write ocasionally on{" "}
              <a
                target="_blank"
                rel="noreferer noopener"
                href="https://dev.to/jdmg94"
              >
                dev.to
              </a>{" "}
              about React.js and other technologies that catch my interest.
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
              I was born in San Pedro Sula, Honduras. I speak Spanish and
              English with native fluency and basic Italian, I coursed Computer
              Science at Honduras Catholic University, "UNICAH". On my free time
              I enjoy traveling, reading, cooking, or watching a film. I've
              worked in several projects from Honduras, Panama, Canada, and U.S.
              that have ranged from backend, frontend, and fullstack roles for
              around 7 years. I've been to React Conf twice, first on a Facebook
              scholarship for the conference, and after that on my own pocket
              (totally worth it btw).
            </p>
          </div>
        </div>
        <h2 className={styles.subHeader}>Highlights</h2>
        <Marquee images={images} itemDelay={1.8} />
        <h2 className={styles.subHeader}>
          Some Technologies I've Worked With:
        </h2>
        <TechStack />
      </article>
    </div>
  </>
);

export default About;
