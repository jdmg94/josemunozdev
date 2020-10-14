import dynamic from "next/dynamic";
import SEO from "../src/SEO";
import Header from "../src/Header";
import Dock from "../src/Dock";
import Head from "next/head";

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
    <Space />
    <Header />
    <Dock />
  </>
);

export default App;
