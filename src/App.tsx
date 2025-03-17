import "./App.css";
import { OrbitControls, Html } from "@react-three/drei";
import Scene from "./Components/Scene";
import Space from "./Components/Space";
import Bento from "./Components/Bento";

function App() {
  return (
    <Scene>
      <Html center className="background">
        <Bento />
      </Html>
      <Space />
      <OrbitControls />
    </Scene>
  );
}

export default App;
