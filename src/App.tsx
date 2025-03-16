import "./App.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Components/Scene";
import Space from "./Components/Space";

function App() {
  return (
    <Scene
      style={{ position: "absolute" }}
      camera={{ position: [50, 50, 50], far: 400 }}
    >
      <Space />
      <OrbitControls />
    </Scene>
  );
}

export default App;
