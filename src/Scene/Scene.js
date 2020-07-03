import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Container from "../Container";

const Wrapper = ({ children, lights = [<ambientLight raycast />], ...props }) => (
  <Container>
    <Canvas
      shadowMap
      style={{ backgroundColor: "#111" }}
      camera={{ position: [75, 75, 75], far: 500 }}
      {...props}
    >
      {lights}
      <Suspense fallback={false}>{children}</Suspense>
    </Canvas>
  </Container>
);

export default Wrapper;
