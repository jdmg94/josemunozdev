import React from "react";
import { OrbitControls } from "drei";
import Scene from "../Scene";
import Space from "./Space";

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
