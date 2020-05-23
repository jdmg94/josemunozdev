import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/Header";

const Space = dynamic(() => import("../components/Space"), { ssr: false });

const App = () => (
  <>
    <Head>
      <title>Jose Munoz Software Engineer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Jose Munoz Software Engineer" />
      <meta property="og:image" content="//profile.jpeg" />
      <meta property="og:description" content="An excellent 20-something-year-old developer" />
    </Head>
    <Space />
    <Header />
  </>
);

export default App;
