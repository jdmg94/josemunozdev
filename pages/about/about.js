import Head from "next/head";
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
    srcSet: "/images/panama-peeps.jpg, /images/panama-peeps.webp",
    alt: "my old team in Panama",
  },
  {
    srcSet: "/images/dan-2018.jpg, /images/dan-2018.webp",
    alt: "Dan Abramov and I at React Conf 2018",
  },
  {
    srcSet: "/images/san-diego-meetup.jpg, /images/san-diego-meetup.webp",
    alt: "My first talk on the San Diego meetup",
  },
  {
    srcSet: "/images/amazon-2019.jpg, /images/amazon-2019.webp",
    alt:
      "That's me on Amazon Campus San Diego, I gave a presentation on the Suspense API",
  },
  {
    srcSet: "/images/react-conf-2019-2.jpg, /images/react-conf-2019-2.webp",
    alt: "React Conf 2019 Group Picture",
  },
];

const About = () => (
  <>
    <Head>
      <link as="fetch" rel="prefetch" href="/based-god/scene.bin" />
      <link as="fetch" rel="prefetch" href="/based-god/scene.gltf" />
      <link
        as="fetch"
        rel="prefetch"
        href="/based-god/textures/Stone_emissive.png"
      />
      <link
        as="fetch"
        rel="prefetch"
        href="/based-god/textures/Crown_baseColor.png"
      />
    </Head>
    <SEO title="About Me" />
    <BackButton href="/" />
    <article className={styles.article}>
      <BasedGod
        fallback={<Loader />}
        style={{ height: "45vh", marginTop: "4rem" }}
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
    </article>
    <Marquee images={images} itemDelay={2.4} />
  </>
);

export default About;
