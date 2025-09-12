import * as THREE from 'three';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useControls } from 'leva';
import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';

import './cell_one.scss';

gsap.registerPlugin(useGSAP);

type posType = [number, number, number]

const speakers: { 
    texture: string, 
    position: posType, 
    rotation: posType 
}[] = [
    { 
        texture: "/assets/speaker_bw.jpg",
        position: [10, 17, 0],
        rotation: [0, 0, 0]
    },
    { 
        texture: "/assets/speaker_green.jpg",
        position: [10, 7, 0],
        rotation: [0, 0, 0]
    },
    { 
        texture: "/assets/speaker_blue.jpg",
        position: [10, -5, 0],
        rotation: [0, 0, 0]
    },
    { 
        texture: "/assets/speaker_orange.jpg",
        position: [10, -15, 0],
        rotation: [0, 0, 0]
    },
    { 
        texture: "/assets/speaker_white.jpg",
        position: [10, -27, 0],
        rotation: [0, 0, 0]
    },
]

export default function Cell_One() {
    return (
        <main>
            <div className='text-parent'>
                <h1 className='text'>Mushroom</h1>
                <button>Click Me!!!</button>
            </div>
            <div className='container'>
                <Canvas camera={{ position: [0, 0, 90], fov: 30 }}>
                    <CameraControls enabled />
                    <Environment preset='forest' />
                    {speakers.map((each, ind) => 
                        <Speaker 
                            speaker_number={ind} 
                            texture={new THREE.TextureLoader().load(each.texture)}
                            position={each.position}
                            rotation={each.rotation}
                        />
                    )}
                </Canvas>
            </div>
        </main>
    );
}

function Speaker({ speaker_number, texture, position, rotation }: { 
    speaker_number: number 
    texture: THREE.Texture
    position: posType
    rotation: posType
}) {
    const { nodes } = useGLTF("./assets/speaker_mushroom.glb")
    const { gl } = useThree()
    texture.flipY = false
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();

    const meshProps = useControls(`Speaker_${speaker_number}`, { position })

    useEffect(() => {
        // @ts-ignore
        const { geometry } = nodes.Cover
        geometry.setAttribute("uv", geometry.getAttribute("uv1"))
    }, [])

    return (
        <group scale={[8, 8, 8]} {...meshProps}>
            <mesh {...nodes.Plate}>
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh {...nodes.Cover}>
                <meshBasicMaterial map={texture} />
            </mesh>
        </group>
    )
}