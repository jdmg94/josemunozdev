import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../src/Header";

const Space = dynamic(() => import("../src/Space"), { ssr: false });

const App = () => (
  <>
    <Head>
      <title>Jose Munoz Software Engineer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jose Munoz Software Engineer" />
      <meta property="og:image" content="/profile.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://josemunoz.dev" />
      <meta property="og:description" content="Software Engineer based in Vancouver" />
    </Head>
    <Space />
    <Header />
  </>
);

export default App;
