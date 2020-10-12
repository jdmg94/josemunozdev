import React from "react";

import Scene from "../Scene";
import BasedGod from "./BasedGod";

const Wrapper = ({ style }) => (
  <div style={style}>
    <Scene
      style={{ width: '100%', height: '100%', marginTop: '4rem', marginBottom: '4rem' }}
      camera={{ position: [3, 3, 7], far: 50 }}
      lights={[
        <pointLight key="light-1" castShadow position={[1, 0, 1]} />,
        <ambientLight key="light-2" raycast />,
      ]}
    >
      <BasedGod scale={2} position={[0, 0.5, 0]} />
    </Scene>
  </div>
);

export default Wrapper;
