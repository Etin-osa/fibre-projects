import * as THREE from 'three';
import gsap from 'gsap';
import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls, Center, Environment, useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';

import './cell_one.scss';
import { useMemo } from 'react';

gsap.registerPlugin(useGSAP);

export default function Cell_One() {
    return (
        <main>
            <Canvas style={{ height: '100vh', width: '100vw' }}>
                <CameraControls enabled />
                <Environment preset='forest' />
                <Speaker />
            </Canvas>
        </main>
    );
}

function Speaker() {
    const { scene } = useGLTF("./assets/speaker_mushroom.glb")
    const { gl } = useThree()
    
    const updatedScene = useMemo(() => {
        const texture = new THREE.TextureLoader().load("/assets/speaker.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace
        texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    
        const bakedMaterial = new THREE.MeshBasicMaterial({ map: texture })

        scene.traverse(each => {
            // @ts-ignore
            if (each.isMesh && each.name === "Plate") {
                // @ts-ignore 
                each.material = bakedMaterial
            } 
            
            // @ts-ignore 
            if (each.isMesh && each.name === "Cover") {
                // @ts-ignore
                const { geometry } = each

                geometry.setAttribute("uv", geometry.getAttribute("uv1"))

                // @ts-ignore
                each.material = bakedMaterial
            }
        })

        return scene
    }, [scene])

    return (
        <group>
            <primitive object={updatedScene} />
        </group>
    )
}
// Since your textures are identical except for color, a much more efficient approach than baking seven separate textures is to use a single texture map and a color palette.
// How to Implement This

//     Bake a Grayscale Texture: Bake a single 4096x4096 texture map for all the shared detail. This could be an Ambient Occlusion, Roughness, or a custom grayscale bake that captures all the subtle surface variations.

//     Create a Color Map: Create a very small, simple texture (e.g., a 1x7 or 8x1 texture) that contains a single pixel for each color you want to use. You can call this a "color palette" or "color atlas."

//     Implement in Three.js: In your Three.js shader, you'll sample the main grayscale texture to get the surface detail. Then, you'll sample the color palette texture based on a uniform or vertex attribute.

//         For example, you could pass a value from 0 to 6 (for your 7 colors) to the shader.

//         The shader would then use that value to look up the correct color from your tiny color palette texture.

//         Finally, the shader multiplies the grayscale texture's value with the color from the palette to get the final colored result.

// Benefits

// This method is highly optimized. Instead of loading seven large 4096x4096 textures, you are only loading one large texture and a tiny palette texture. This drastically reduces VRAM usage and improves load times, while still giving you the benefit of high-quality baked details.