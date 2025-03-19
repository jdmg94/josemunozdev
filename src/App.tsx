import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";
import Space from "./Components/Space";
import Bento from "./Components/Bento";

const App = () => (
  <>
    <Scene fallback={<h1>Failed to load 3D Model!</h1>}>
      <Space />
      <OrbitControls />
    </Scene>
    <Bento />
  </>
);

export default App;
