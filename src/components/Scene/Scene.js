import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html as HTML } from "@react-three/drei";

const Scene = ({
  children,
  fallback = null,
  lights = [<ambientLight key="default-light" raycast />],
  ...props
}) => (
  <Canvas
    shadowMap
    concurrent
    camera={{ position: [75, 75, 75], far: 500 }}
    {...props}
  >
    {lights}
    <Suspense
      fallback={<HTML center>{fallback}</HTML>}
    >
      {children}
    </Suspense>
  </Canvas>
);

export default Scene;