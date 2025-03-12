"use client";
import { Suspense, useEffect, useState } from "react";
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
import { div, image } from "framer-motion/client";

const Experience = () => {

    const [threeD, setThreeD]=useState(true)
    // const [gallery,setGallery]=useState


    const GalleryHandler=()=>{
        setThreeD(false)
    }
    const ThreeDhandler=()=>{
        setThreeD(true)
    }


    return (
        <div className="h-full w-full bg-black relative">
            <Image src={"/logo.webp"} width={300} height={100} alt="logo" className="absolute top-4 left-0 z-50 w-20 lg:w-80" />
            <Image src={"/logo-symbol.webp"} width={150} height={100} alt="logo" className="absolute bottom-2 left-2 z-50 w-10 lg:w-40" />


            <div className="flex flex-col lg:w-36 w-20 h-auto p-2 _bg-[red] absolute top-1/2 -translate-y-1/2 z-[99] items-center gap-2">
                {/* <Image src={'/icons/3d_24.svg'} width={600} height={600} alt="3d" className="w-16 h-16 object-cover"/> */}
                {/* <Image src={'/icons/gallery_24.svg'} width={600} height={600} alt="3d" className="w-16 h-16 object-cover"/> */}
                <svg className="lg:w-20 lg:h-20 w-8 h-8" onClick={ThreeDhandler} xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 -960 960 960"  fill={!threeD ? "#FFFFFF66":"#ffffff"} ><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 115 72.5 203T418-166l-58-58 56-56L598-98q-29 10-58.5 14T480-80Zm20-280v-240h120q17 0 28.5 11.5T660-560v160q0 17-11.5 28.5T620-360H500Zm-200 0v-60h100v-40h-60v-40h60v-40H300v-60h120q17 0 28.5 11.5T460-560v160q0 17-11.5 28.5T420-360H300Zm260-60h40v-120h-40v120Zm240-60q0-115-72.5-203T542-794l58 58-56 56-182-182q29-10 58.5-14t59.5-4q83 0 156 31.5T763-763q54 54 85.5 127T880-480h-80Z"/></svg>
                <svg className="lg:w-20 lg:h-20 w-8 h-8" onClick={GalleryHandler} xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 -960 960 960" fill={threeD ? "#FFFFFF66":"#ffffff"} ><path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm40-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm40-80h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm40-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Z"/></svg>

            </div>
            <Loader />


            {!threeD && 
                <ImageGallery/>
            }


            <Suspense fallback={null}>
                <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} gl={{ antialias: true }}>
                    <fog color={'blue'} near={2} far={100} attach={'fog'} />
                    <Stage preset="upfront" center={{ disableX: true, disableZ: true }} adjustCamera={false} >
            {threeD && 
                        <Trailer scale={0.8} position={[0, 0, 0]} rotation={[0, 0, 0]} />
            }
                        {/* <MovementModels /> */}
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

                    {/* <Sky /> */}
                </Canvas>
            </Suspense>
        </div>
    );
};


// const MovementModels = () => {
//     const { activeMovement } = useMovementStore();
//     return (
//         <>
//         </>
//     )
// }

export default Experience;


const ImageGallery = () => {
    const images = [
        '/img/gallery/wb_s1_1.png',
        '/img/gallery/wb_s1_2.png',
        '/img/gallery/wb_s1_3.png',
        '/img/gallery/wb_s1_4.png',
        '/img/gallery/wb_s1_5.png',
        '/img/gallery/wb_s1_6.png',
        '/img/gallery/wb_s1_7.png',
        '/img/gallery/wb_s1_8.png',
        '/img/gallery/wb_s1_9.png',
        '/img/gallery/wb_s1_10.png',
        '/img/gallery/wb_s1_11.png',
        '/img/gallery/wb_s1_12.png',
        '/img/gallery/wb_s1_13.png',
        '/img/gallery/wb_s1_14.png',
        '/img/gallery/wb_s1_15.png',
        '/img/gallery/wb_s1_16.png',
        '/img/gallery/wb_s1_17.png',
        '/img/gallery/wb_s1_18.png',
    ];

    const [index, setIndex] = useState(0);
    const img = images[index];

    const ImageHandler = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const backwardHandler = () => {
        setIndex((prev) => prev - 1);
    };

    return (
        <div className="w-full h-full relative">
            <Image src={'/icons/right_1.svg'} width={600} height={600} alt="right" className="lg:w-24 lg:h-24 w-12 h-12 object-cover absolute top-1/2 -translate-y-1/2 lg:right-14 right-6 cursor-pointer" onClick={ImageHandler}
            />

            {index > 0 && (
                <Image src={'/icons/left_1.svg'} width={600} height={600} alt="left" className="lg:w-24 lg:h-24 w-12 object-cover absolute top-1/2 -translate-y-1/2 lg:left-32 left-16 cursor-pointer z-[31]" onClick={backwardHandler}/>
            )}

            {/* Main Image */}
            <Image
                src={img}
                width={1080}
                height={1080}
                alt="main_image"
                priority
                className="w-full h-full object-cover"
            />
        </div>
    );
};
