import Head from "next/head";
import dynamic from "next/dynamic";

import Ganja from "../public/images/ganja.svg";
import SEO from "../src/SEO";
import Header from "../src/Header";
import Dock from "../src/Dock";

const Space = dynamic(() => import("../src/Space"), {
  ssr: false,
});

const App = () => (
  <>
    <Head>
      <link as="fetch" rel="prefetch" href="/space/scene.bin" />
      <link as="fetch" rel="prefetch" href="/space/scene.gltf" />
    </Head>
    <SEO />
    <Ganja style={{ position: 'absolute' }} />
    <Header />
    <Space />
    <Dock />
  </>
);

export default App;
