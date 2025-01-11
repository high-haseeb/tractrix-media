"use client";
import { Suspense } from "react";
import {
    OrbitControls,
    Stage,
    Environment,
    Loader,
} from '@react-three/drei';
import { Vector3 } from 'three';

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Trailer } from "@/components/Trailer";
import { ValutManual } from "@/components/ValutManual";
import Sky from "@/components/Sky";
import Ground from "@/components/Ground";
import CameraRig from "@/components/CameraRig";
import { useMovementStore } from "@/stores/stateStore";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Experience = () => {
    return (
        <div className="h-full w-full bg-black relative">
            <Image src={"/logo.webp"} width={300} height={100} alt="logo" className="absolute top-4 left-0 z-50 w-20 lg:w-80" />
            <Image src={"/logo-symbol.webp"} width={150} height={100} alt="logo" className="absolute bottom-2 left-2 z-50 w-10 lg:w-40" />
            <Loader />
            <Suspense fallback={null}>
                <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} gl={{ antialias: true }}>
                    <fog color={'blue'} near={2} far={100} attach={'fog'} />
                    <Stage preset="upfront" center={{ disableX: true, disableZ: true }} adjustCamera={false} >
                        <Trailer scale={0.8} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                        <MovementModels />
                    </Stage>
                    <Ground positionY={-2.45} />
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={4} shadow-bias={-0.0001} />
                    <directionalLight castShadow position={[10, 100, 10]} color={'white'} intensity={2.0} lookAt={new Vector3()}/>
                    <ambientLight intensity={1.5} />
                    <Environment environmentIntensity={1.5} preset="city" />
                    <CameraRig />
                    {/* <Stats /> */}
                    {/* <EffectComposer> */}
                    {/*     <Bloom luminanceThreshold={1.2}/> */}
                    {/* </EffectComposer> */}

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
        </>
    )
}

export default Experience;
