"use client";
import { Trailer } from "@/components/Trailer";
import { Valut } from "@/components/Valut";
import useStateStore from "@/stores/stateStore";
import { BakeShadows, Loader, OrbitControls, Stage, Stats, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from 'three';

const Experience = () => {
    return (
        <div className="h-full w-full bg-black">
            <Loader />
            <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
                <hemisphereLight args={[0xffffff, 0xffffff, 2]} color={'blue'} groundColor={'red'} position={[0, 50, 0]} />
                <pointLight color={'red'} position={[0, 0.5, 0]} intensity={10} />
                <directionalLight color={'white'} position={[0, 2, 0]} intensity={4} />
                <ambientLight color={'white'} intensity={0.5} />
                <directionalLight position={[-1, 2, 1]} intensity={4} color={'red'} castShadow />
                <fog color={0x00008B} near={2} far={100} attach={'fog'} />
                <BakeShadows />
                <Stage preset="upfront" center={{ disableX: true, disableZ: true }} environment="studio" adjustCamera={false} >
                    <Trailer scale={0.8} position={[0, 0, 0]} rotation={[0, 0 , 0]} />
                    <Valut  scale={0.8} position={[0, 0, 0]} rotation={[0, 0, 0]}/>
                </Stage>
                <Ground />
                <OrbitControls enableZoom={true} enablePan={false} />
                <CameraRig />
                <Sky />
            </Canvas>
        </div>
    );
};
const Sky = () => {
    const fragShader = `
            uniform vec3 topColor;
			uniform vec3 bottomColor;
			uniform float offset;
			uniform float exponent;

			varying vec3 vWorldPosition;

			void main() {

				float h = normalize( vWorldPosition + offset ).y;
				gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );

			}
        `;
    const vertShader = `
            varying vec3 vWorldPosition;

			void main() {

				vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
				vWorldPosition = worldPosition.xyz;

				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			}
        `;
    const uniforms = {
        'topColor': { value: new THREE.Color('pink') },
        'bottomColor': { value: new THREE.Color('darkblue') },
        'offset': { value: 0 },
        'exponent': { value: 0.6 }
    };
    return (
        <mesh >
            <sphereGeometry args={[50, 32, 15]} />
            <shaderMaterial fragmentShader={fragShader} vertexShader={vertShader} uniforms={uniforms} side={THREE.BackSide} />
        </mesh >
    )
}
const Ground = () => {
    const concrete = useTexture({
        map: "/textures/concrete/hangar_concrete_floor_diff_1k.jpg",
        roughnessMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        aoMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        metalnessMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        displacementMap: "/textures/concrete/hangar_concrete_floor_disp_1k.jpg",
        normalMap: "/textures/concrete/hangar_concrete_floor_nor_gl_1k.jpg",
    })

    for (const key in concrete) {
        if (concrete.hasOwnProperty(key)) {
            concrete[key].wrapS = THREE.RepeatWrapping;
            concrete[key].wrapT = THREE.RepeatWrapping;
            concrete[key].repeat.set(10, 10);
        }
    }
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
            <planeGeometry args={[100, 100, 1, 1]} />
            <meshPhysicalMaterial {...concrete} />
            <pointLight color={'blue'} />
        </mesh>
    )
}


function CameraRig({ v = new THREE.Vector3() }) {
    const { activeSection } = useStateStore();
    let xOffset = 0;
    let zOffset = 0;
    return useFrame((state) => {
        const t = state.clock.elapsedTime;
        switch (activeSection) {
            case 0: 
                xOffset = 10;
                zOffset = 14;
                break;
            case 1:
                xOffset = 0;
                zOffset = 17;
                break;
            case 2:
                xOffset = -8;
                zOffset = -16;
                break;
        }
        state.camera.position.lerp(v.set(Math.sin(t / 5) + xOffset, 0, zOffset + Math.cos(t / 5) / 2), 0.05)
    })
}

export default Experience;
