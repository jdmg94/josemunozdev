import React from "react";
import { OrbitControls } from "drei";
import Scene from "../Scene";
import Space from "./Space";

const Wrapper = () => (
  <Scene camera={{ position: [50, 50, 50], far: 400 }}>
    <Space />
    <OrbitControls />
  </Scene>
);

export default Wrapper;
