import React from 'react'
import styles from "../styles/LTLogo.module.css"
import { Canvas,ambientLight,spotLight } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import LT from "../components/LT"
const LTLogo = () => {
    const ref = useRef()
  return (
    <div className={styles.container}>
        <Canvas className={styles.container} shadows dpr={[1, 2]} frameloop="demand" camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={0.3}  environment="studio">
                false
                <LT/>
                false
                </Stage>
            </Suspense>
            <ambientLight intensity={1} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <OrbitControls ref={ref} autoRotate enableZoom={false} />
        </Canvas>
    </div>
  )
}

export default LTLogo