import { Html } from "@react-three/drei";
import { Suspense, PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";

type SceneProps = PropsWithChildren<{
  fallback?: JSX.element;
  lights?: JSX.element[];
}>;

const Scene = ({
  children,
  fallback,
  lights = [<ambientLight key="default-light" raycast />],
  ...props
}: SceneProps) => (
  <Canvas camera={{ position: [75, 75, 75], far: 500 }} {...props}>
    {lights}
    <Suspense fallback={<Html center>{fallback}</Html>}>{children}</Suspense>
  </Canvas>
);

export default Scene;
