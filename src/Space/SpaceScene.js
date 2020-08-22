import React from "react";
import { OrbitControls, StandardEffects } from "drei";
import Scene from "../Scene";
import Space from "./Space";

const Wrapper = () => (
  <Scene camera={{ position: [50, 50, 50], far: 400 }}>
    <Space />
    <OrbitControls />
    <StandardEffects bloom={{ luminanceThreshold: 0.99 }} />
  </Scene>
);

export default Wrapper;
