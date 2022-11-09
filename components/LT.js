
import React, { useRef } from "react";
import { useGLTF, } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/LT.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.001"]}
        position={[-3.49, 1.93, -0.07]}
        rotation={[-1.56, 0, -3.14]}
      />
    </group>
  );
}

useGLTF.preload("/LT.glb");