/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: engine9 (https://sketchfab.com/engine9)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/rhetorician-a89f035291d843069d73988cc0e25399
title: Rhetorician
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { draco } from 'drei'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/based-god/scene.gltf', draco())

  useFrame(() => {
    group.current.rotation.y -= 0.01
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.27, 0.12, 1.33]}>
          <mesh material={materials.Stone} geometry={nodes.mentor_roman_retopo_0.geometry} />
        </group>
        <group position={[0.16, -0.17, 4.81]} rotation={[-0.1, 0.1, 0]} scale={[0.89, 0.89, 0.89]}>
          <mesh material={materials.Crown} geometry={nodes.nimbus002_0.geometry} />
          <mesh material={materials.Crown} geometry={nodes.nimbus001_0.geometry} />
          <mesh material={materials.Crown} geometry={nodes.nimbus003_0.geometry} />
        </group>
      </group>
    </group>
  )
}
