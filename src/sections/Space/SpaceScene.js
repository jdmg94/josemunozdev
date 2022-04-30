import { OrbitControls } from "@react-three/drei";

import Space from "./Space";
import Scene from "../../components/Scene";


const Wrapper = (props) => (
  <Scene
    style={{ position: "absolute" }}
    camera={{ position: [50, 50, 50], far: 400 }}
    {...props}
  >
    <Space />
    <OrbitControls />
  </Scene>
);

export default Wrapper;
