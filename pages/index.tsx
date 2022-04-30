import dynamic from "next/dynamic";
import SEO from "../src/components/SEO";
import Header from "../src/sections/Header";
import Dock from "../src/sections/Dock";

const Space = dynamic(() => import("../src/sections/Space"), {
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
