import { Group, Object3D, Points } from "three";
import { useRef, useLayoutEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { centerObjectPosition } from "../../utils/centerObjectPosition";

const RESET_TIMEOUT = 20_000;
function isPointsMesh(object?: Object3D): object is Points {
  return object?.type === "Points";
}

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

  if (!isPointsMesh(nodes.mesh_0)) {
    return (
      <Html>
        <span>Unable to load 3D model!</span>
      </Html>
    );
  }

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
