import dynamic from "next/dynamic";
import Honduras from "react-honduras";

import SEO from "../../src/SEO";
import Loader from "../../src/Loader";
import BackButton from "../../src/BackButton";
import styles from "./about.module.css";

const HeaderLoader = () => (
  <div
    style={{
      flex: 1,
      width: "100vw",
      display: "flex",
      minHeight: "45vh",
      marginTop: "4rem",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Loader />
  </div>
);

const BasedGod = dynamic(() => import("../../src/BasedGod"), {
  ssr: false,
  loading: HeaderLoader,
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
    <SEO title="About Me" />
    <BackButton href="/" aria-description="back button" />
    <article className={styles.article}>
      <BasedGod
        style={{ height: "45vh", marginTop: "4rem" }}
        fallback={<Loader />}
      />
      <div className={styles.container}>
        <h1 className={styles.header}>Who is José Muñoz?</h1>
        <div className={styles.level}>
          <div className={styles.levelItem}>
            <p>
              I'm a software engineer, tech speaker, and{" "}
              <a
                target="_blank"
                rel="noreferer noopener"
                href="https://www.credential.net/a4ab5783-7c2c-4c38-a2e3-d6cba2fbe8a3"
              >
                Scrum Master
              </a>{" "}
              based in Vancouver, BC. I work as a Lead Frontend Engineer for
              Destiny Media. I have spoken at meetups about frontend
              development, code design patterns, and more. I contribute to OSS
              and write ocasionally on{" "}
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
            width="400px"
            height="auto"
            src="/images/circuit-board.svg"
            alt="Personal Mission"
            className={styles.image}
          />
        </div>
        <div className={styles.level}>
          <Honduras size={400} className={styles.image} />
          <div className={styles.levelItem}>
            <p>
              I was born in San Pedro Sula, Honduras. I speak Spanish and
              English with native fluency and basic Italian, I coursed Computer
              Science at Honduras Catholic University, "UNICAH". On my free time
              I enjoy traveling, reading, cooking, or watching a film. I've
              worked in several projects from Honduras, Panama, Canada, and U.S.
              that have ranged from backend, frontend, and fullstack roles for
              around 7 years.
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.subHeader}>Highlights</h2>
      <Marquee images={images} itemDelay={2.5} />
    </article>
  </>
);

export default About;
