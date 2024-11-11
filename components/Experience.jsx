"use client";
import { Suspense } from "react";
import {
    OrbitControls,
    Stage,
    Environment,
    Loader,
    AccumulativeShadows,
    RandomizedLight
} from '@react-three/drei';

import { Canvas } from "@react-three/fiber";
import { Trailer } from "@/components/Trailer";
import { Valut } from "@/components/Valut";
import Sky from "@/components/Sky";
import Ground from "@/components/Ground";
import CameraRig from "@/components/CameraRig";
import { useMovementStore } from "@/stores/stateStore";

const Experience = () => {
    return (
        <div className="h-full w-full bg-black">
            <Loader />
            <Suspense fallback={null}>
                <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
                    <fog color={0x00008B} near={2} far={100} attach={'fog'} />
                    <Stage preset="upfront" center={{ disableX: true, disableZ: true }} adjustCamera={false} >
                        <Trailer scale={0.8} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        <MovementModels />
                    </Stage>
                    <Ground positionY={-3.0} />
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                    <ambientLight intensity={0.5} />
                    <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
                        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
                    </AccumulativeShadows>
                    <Environment environmentIntensity={1.5} preset="city" />
                    <CameraRig />
                    <Sky />
                </Canvas>
            </Suspense>
        </div>
    );
};
const MovementModels = () => {
    const { activeMovement } = useMovementStore();
    return (
        <>
            {
                activeMovement.has("trailer valet") ? <Valut scale={0.8} position={[0, 0, 0]} rotation={[0, 0, 0]} /> : null
            }
        </>
    )
}

export default Experience;
