import * as THREE from 'three';
import { useRef } from 'react';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls, Center, Environment, MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useGSAP } from '@gsap/react';

import './transparent.scss';

gsap.registerPlugin(useGSAP);

export default function Transparent_S() {
    const frontRef = useRef<THREE.Mesh>(null);
    const devRef = useRef<THREE.Mesh>(null);

    useGSAP(() => {
        if (frontRef.current) {
            gsap.to(frontRef.current.position, { x: -2, duration: 1, ease: "power3.inOut" });
        }
    })

    return (
        <main>
            <nav>

            </nav>

            <Canvas style={{ height: '100vh', width: '100vw' }}>
                {/* We can drop the HTML inside, make it a 3d-transform and portal it to the dom container above */}
                <directionalLight intensity={5} position={[0, 3, 2]} />
                <CameraControls enabled />
                <Environment preset='warehouse' />
                <S_Model />
                <TextSection 
                    fontUrl='/assets/BarlowCondensed-BlackItalic.ttf'
                    text='FRONTEND'
                    position={[0, 1.5, -1.0]}
                    ref={frontRef}
                    initialPosition={-5}
                    finalPosition={4.48}
                />
                <TextSection 
                    fontUrl='/assets/BarlowCondensed-BlackItalic.ttf'
                    text='DEVEOPER'
                    position={[0, -1.7, -1.0]}
                    ref={devRef}
                    initialPosition={5}
                    finalPosition={-4.3}
                />
            </Canvas>
        </main>
    );
}

function S_Model() {
    const meshRef = useRef<THREE.Mesh>(null)
    const clock = new THREE.Clock();
    const { nodes } = useGLTF("./assets/S.glb")
    const materialProps = useControls({
        thickness: { value: 0.3, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
        transmission: {value: 1.0, min: 0, max: 1, step: 0.1},
        ior: { value: 1.1, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.05, min: 0, max: 1},
        backside: { value: true},
    })

    useFrame((_, delta) => {
        const elapsedTime = clock.getElapsedTime();
        
        if (meshRef.current) {
            meshRef.current.rotation.y += Math.cos(delta * 0.7) * 0.009;
            meshRef.current.rotation.x += Math.cos(delta * 0.7) * 0.003;
        }
    })

    return (
        <group ref={meshRef} scale={11}>
            <Center>
                <mesh { ...nodes.Text }>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>
            </Center>
        </group>
    )
}

function TextSection({ fontUrl, text, position, ref, finalPosition, initialPosition }: { 
    fontUrl: string, 
    text: string, 
    position: [number, number, number]
    ref: React.RefObject<THREE.Mesh | null>
    initialPosition: number
    finalPosition: number
}) {
    useGSAP(() => {
        if (ref.current) {
            gsap.to(ref.current.position, { 
                keyframes: {
                    '0%': { x: initialPosition },
                    '100%': { x: finalPosition },
                },
                ease: "none",
                duration: 5,
                repeat: -1,
            });
        }
    })
    
    return (
        <group ref={ref} position={position}>
            <Text fontSize={2} scale-y={2} font={fontUrl}>{text}     {text}     {text}</Text>
        </group>
    )
}