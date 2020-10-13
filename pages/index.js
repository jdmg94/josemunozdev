import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../src/Header";
import Dock from "../src/Dock";

const Space = dynamic(() => import("../src/Space"), {
  ssr: false,
});

const App = () => (
  <Container>
    <Head>
      <title>José Muñoz Software Engineer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="José Muñoz Software Engineer" />
      <meta property="og:image" content="/profile.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://josemunoz.dev" />
      <meta
        property="og:description"
        content="I'm a software developer, tech speaker, and scrum master
        based on Vancouver."
      />
    </Head>
    <Space />
    <Header />
    <Dock />
  </Container>
);

export default App;
