import * as THREE from "three";

export const centerObjectPosition = (object: THREE.Group) =>
  new THREE.Box3()
    .setFromObject(object)
    .getCenter(object.position)
    .multiplyScalar(-1);
