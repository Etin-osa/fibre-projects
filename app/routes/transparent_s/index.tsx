import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Center, Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei';

import './transparent.scss';
import { useControls } from 'leva';

export default function Transparent_S() {
    return (
        <main>
            <nav>

            </nav>

            <Canvas style={{ height: '100vh', width: '100vw' }}>
                {/* We can drop the HTML inside, make it a 3d-transform and portal it to the dom container above */}
                <directionalLight intensity={3} position={[0, 3, 2]} />
                <CameraControls enabled />
                <Environment preset='city' />
                <S_Model />
            </Canvas>
        </main>
    );
}

function S_Model() {
    const meshRef = useRef<THREE.Mesh>(null)
    const { nodes } = useGLTF("./assets/S.glb")
    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1},
        backside: { value: true},
    })

    return (
        <group ref={meshRef} scale={13}>
            <Center>
                {/* @ts-ignore */}
                <mesh { ...nodes.Text }>
                    <MeshTransmissionMaterial { ...materialProps } />
                </mesh>
            </Center>
        </group>
    )
}