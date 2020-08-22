import React from "react";
import { StandardEffects } from "drei";
import Scene from "../Scene";
import BasedGod from "./BasedGod";

const Wrapper = () => (
  <Scene
    camera={{ position: [-3, 5, 7], far: 50 }}
    lights={[
      <pointLight key="light-1" castShadow position={[1, 0, 1]} />,
      <ambientLight key="light-2" raycast />,
    ]}
  >
    <BasedGod />
    <StandardEffects bloom={{ luminanceThreshold: 0.99 }} />
  </Scene>
);

export default Wrapper;
