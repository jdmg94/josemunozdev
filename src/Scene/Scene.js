import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

const Wrapper = ({
  children,
  fallback = null,
  lights = [<ambientLight key="default-light" raycast />],
  ...props
}) => (
  <Canvas
    shadowMap
    style={{ backgroundColor: "#111" }}
    camera={{ position: [75, 75, 75], far: 500 }}
    {...props}
  >
    {lights}
    <Suspense fallback={fallback}>{children}</Suspense>
  </Canvas>
);

export default Wrapper;
