import { Group, Box3 } from "three";

export const centerObjectPosition = (object: Group) =>
  new Box3()
    .setFromObject(object)
    .getCenter(object.position)
    .multiplyScalar(-1);
