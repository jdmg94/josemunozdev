import dynamic from "next/dynamic";
import SEO from "../src/SEO";
import Header from "../src/Header";
import Dock from "../src/Dock";

const Space = dynamic(() => import("../src/Space"), {
  ssr: false,
});

const App = () => (
  <>
    <SEO />
    <Space />
    <Header />
    <Dock />
  </>
);

export default App;
