import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, PropsWithChildren, ReactElement } from "react";

type SceneProps = PropsWithChildren<{
  fallback?: ReactElement;
  lights?: ReactElement[];
}>;

const Scene = ({
  children,
  fallback,
  lights = [<ambientLight key="default-light" raycast />],
}: SceneProps) => (
  <Canvas camera={{ position: [75, 75, 75], far: 500 }}>
    {lights}
    <Suspense fallback={<Html center>{fallback}</Html>}>{children}</Suspense>
  </Canvas>
);

export default Scene;
