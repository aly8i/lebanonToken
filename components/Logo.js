import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/kfc.gltf");
  return (
    <group {...props} dispose={null} scale={30}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere2_aiStandardSurface3_0.geometry}
            material={materials.aiStandardSurface3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere2_aiStandardSurface4_0.geometry}
            material={materials.aiStandardSurface4}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("kfc.gltf");