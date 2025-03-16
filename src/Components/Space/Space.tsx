import { Group } from "three";
import { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { centerObjectPosition } from "../../utils/centerObjectPosition";

const RESET_TIMEOUT = 20_000;

function Model() {
  const group = useRef<Group>(null);
  const originalXAxis = useRef<number>(0);
  const shouldResetAnimation = useRef(false);
  const { nodes, materials } = useGLTF("/space-transformed.glb");

  useLayoutEffect(() => {
    if (group.current) {
      centerObjectPosition(group.current);
    }

    const spaceReset = setInterval(() => {
      shouldResetAnimation.current = true;
    }, RESET_TIMEOUT);

    return () => {
      if (spaceReset) clearInterval(spaceReset);
    };
  }, []);

  useFrame(({ camera }) => {
    if (!originalXAxis.current) {
      originalXAxis.current = camera.position.x;
    } else if (shouldResetAnimation.current) {
      shouldResetAnimation.current = false;
      camera.position.x = originalXAxis.current;
    } else {
      camera.position.x -= 0.1125;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <points
        geometry={nodes.mesh_0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/space-transformed.glb");

export default Model;
