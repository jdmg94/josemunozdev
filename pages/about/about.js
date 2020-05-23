import Head from "next/head";
import dynamic from "next/dynamic";
import Honduras from "react-honduras";
import { useSpring, animated } from "react-spring";

const BasedGod = dynamic(() => import("../../components/BasedGod"), {
  ssr: false,
});

const About = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div style={{ backgroundColor: "#111" }}>
      <Head>
        <title>About Me - Jose Munoz Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasedGod />
      <article>
        <animated.h1 style={animation}>Who is Jose Munoz?</animated.h1>
      </article>
    </div>
  );
};

export default About;
