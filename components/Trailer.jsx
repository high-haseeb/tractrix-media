import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'
import useColorStore from "@/stores/ColorStore";
import * as THREE from 'three';
import useExtrasStore from '@/stores/ExtrasStore';
import PullupBar from "@/components/accessories/PullupBar";
import Dolly from "@/components/accessories/Dolly";
import { Valut } from "@/components/Valut";
import { useMovementStore } from '@/stores/stateStore';

export function Trailer(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/trailer.glb')
    const { actions } = useAnimations(animations, group);
    const { colors, activeColor, woodColors, activeWoodColor } = useColorStore();
    const { activeExtraItems } = useExtrasStore();

    useEffect(() => {
        for (const key in actions) {
            if (actions.hasOwnProperty(key)) {
                actions[key].play();
                actions[key].clampWhenFinished = true;
                actions[key].loop = THREE.LoopOnce;
            }
        }
    }, [actions]);

    const getTexturePath = (src, type) => `/textures/wood/${src}/${type}`
    const ashWood = useTexture({
        map: getTexturePath("ash", "diff.jpg"),
        roughnessMap: getTexturePath("ash", "arm.jpg"),
        dispalacementMap: getTexturePath("ash", "disp.jpg"),
    })
    const walnutWood = useTexture({
        map: getTexturePath("walnut", "diff.jpg"),
        roughnessMap: getTexturePath("walnut", "rough.jpg"),
        normalMap: getTexturePath("walnut", "nor.jpg"),
    });

    ashWood.map.colorSpace = THREE.SRGBColorSpace;
    walnutWood.map.colorSpace = THREE.SRGBColorSpace;


    useEffect(() => {
        applyProps(materials.body, { color: colors.filter(color => color.name === activeColor)[0].hex });
    }, [activeColor])

    useLayoutEffect(() => {
        // applyProps(materials.body, { metallness: 0.5, roughness: 0.5 });
        applyProps(materials['Rubber_Rough_001_Black_50cm.001'], { roughness: 1.0, metallness: 0.0, color: "#000" })
        applyProps(materials.D_Bumpy_Plastic, { roughness: 0.5, metallness: 0.8, color: "#222" });
        applyProps(materials.D_Bumpy_Plastic_2, { roughness: 1.0, metallness: 0.0, color: "#000" });
        applyProps(materials.D_Bumpy_Plastic_1, { roughness: 0.5, metallness: 0.4, color: "#222" });
        applyProps(materials['speaker_side.001'], { roughness: 0.5, metallness: 0.4, color: "#222" });
        // applyProps(materials.Neon_Red, { emmisive: 200.0 });
        woodColors.filter(color => color.name === activeWoodColor)[0].name === "choclate cork" ?
            applyProps(materials.floor_roof, { ...ashWood }) :
            applyProps(materials.floor_roof, { ...walnutWood });
    }, [activeColor, materials, nodes, activeWoodColor]);

    const { activeMovement } = useMovementStore();

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh name="Wood" castShadow receiveShadow geometry={nodes.Wood.geometry} material={materials.floor_roof} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop002" castShadow receiveShadow geometry={nodes.walktop002.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop005" castShadow receiveShadow geometry={nodes.walktop005.geometry} material={materials.body} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop007" castShadow receiveShadow geometry={nodes.walktop007.geometry} material={materials['C_Iron_Corroded_Stained.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop008" castShadow receiveShadow geometry={nodes.walktop008.geometry} material={materials['Speckled_Plastic_01.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop010" castShadow receiveShadow geometry={nodes.walktop010.geometry} material={materials['Rubber_Grip_01_1.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop011" castShadow receiveShadow geometry={nodes.walktop011.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop013" castShadow receiveShadow geometry={nodes.walktop013.geometry} material={materials.Neon_Red} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop021" castShadow receiveShadow geometry={nodes.walktop021.geometry} material={materials['Paper_Speaker.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop022" castShadow receiveShadow geometry={nodes.walktop022.geometry} material={materials['default.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop034" castShadow receiveShadow geometry={nodes.walktop034.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop041" castShadow receiveShadow geometry={nodes.walktop041.geometry} material={materials['D_Black_Plastic_Dull.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop042" castShadow receiveShadow geometry={nodes.walktop042.geometry} material={materials.Neon_Orange} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop043" castShadow receiveShadow geometry={nodes.walktop043.geometry} material={materials.D_Tinted_Glass} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop045" castShadow receiveShadow geometry={nodes.walktop045.geometry} material={materials['Plastic_01_1.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop046" castShadow receiveShadow geometry={nodes.walktop046.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop047" castShadow receiveShadow geometry={nodes.walktop047.geometry} material={materials['D_Grey_Plastic_Aged.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop050" castShadow receiveShadow geometry={nodes.walktop050.geometry} material={materials['M_Solar_Cell.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop051" castShadow receiveShadow geometry={nodes.walktop051.geometry} material={materials['speaker_side.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop053" castShadow receiveShadow geometry={nodes.walktop053.geometry} material={materials['fan.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop054" castShadow receiveShadow geometry={nodes.walktop054.geometry} material={materials['Logo.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop062" castShadow receiveShadow geometry={nodes.walktop062.geometry} material={materials.D_Bumpy_Plastic} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop063" castShadow receiveShadow geometry={nodes.walktop063.geometry} material={materials.D_Bumpy_Plastic_1} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh name="walktop064" castShadow receiveShadow geometry={nodes.walktop064.geometry} material={materials.D_Bumpy_Plastic_2} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <group name="walktop068" position={[-0.045, 5.613, 3.593]} rotation={[2.804, 0, 0]} scale={0.21}>
                <mesh name="walktop040" castShadow receiveShadow geometry={nodes.walktop040.geometry} material={materials.body} />
                <mesh name="walktop040_1" castShadow receiveShadow geometry={nodes.walktop040_1.geometry} material={materials.Logo} />
                <mesh name="walktop040_2" castShadow receiveShadow geometry={nodes.walktop040_2.geometry} material={materials['C_Iron_Corroded_Stained.001']} />
            </group>
            <group name="walktop069" position={[-0.021, 0.851, 3.739]} rotation={[-0.326, 0, 0]} scale={0.21}>
                <mesh name="walktop044" castShadow receiveShadow geometry={nodes.walktop044.geometry} material={materials.body} />
                <mesh name="walktop044_1" castShadow receiveShadow geometry={nodes.walktop044_1.geometry} material={materials.floor_roof} />
                <mesh name="walktop044_2" castShadow receiveShadow geometry={nodes.walktop044_2.geometry} material={materials.LogoMark} />
            </group>
            <mesh name="walktop036" castShadow receiveShadow geometry={nodes.walktop036.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.05, 2.429, 1.231]} rotation={[Math.PI / 2, 0, 1.567]} scale={0.21} />
            <group name="walktop038" position={[2.072, 2.841, -1.466]} rotation={[Math.PI / 2, 0, 1.572]} scale={0.21}>
                <mesh name="walktop049" castShadow receiveShadow geometry={nodes.walktop049.geometry} material={materials['C_Gun_Metal_03.001']} />
                <mesh name="walktop049_1" castShadow receiveShadow geometry={nodes.walktop049_1.geometry} material={materials['Iron_Cast_01_1.001']} />
                <mesh name="walktop049_2" castShadow receiveShadow geometry={nodes.walktop049_2.geometry} material={materials['Starry_Night_Paracord.001']} />
                {/* <mesh name="walktop049_3" castShadow receiveShadow geometry={nodes.walktop049_3.geometry} material={materials.Logo} /> */}
                <mesh name="walktop049_4" castShadow receiveShadow geometry={nodes.walktop049_4.geometry} material={materials['C_Aluminum_Damaged.001']} />
                <mesh name="walktop049_5" castShadow receiveShadow geometry={nodes.walktop049_5.geometry} material={materials['Dark_Specks_Paracord.001']} />
            </group>
            <group name="walktop016" position={[1.95, 2.84, 1.231]} rotation={[Math.PI / 2, 0, -1.525]} scale={0.21}>
                <mesh name="walktop052" castShadow receiveShadow geometry={nodes.walktop052.geometry} material={materials.C_Gun_Metal_03} />
                <mesh name="walktop052_1" castShadow receiveShadow geometry={nodes.walktop052_1.geometry} material={materials['C_Aluminum_Damaged.001']} />
                <mesh name="walktop052_2" castShadow receiveShadow geometry={nodes.walktop052_2.geometry} material={materials['Iron_Cast_01_1.001']} />
                <mesh name="walktop052_3" castShadow receiveShadow geometry={nodes.walktop052_3.geometry} material={materials['Rubber_Grip_01_2.001']} />
                <mesh name="walktop052_4" castShadow receiveShadow geometry={nodes.walktop052_4.geometry} material={materials['Dark_Specks_Paracord.001']} />
                {/* <mesh name="walktop052_5" castShadow receiveShadow geometry={nodes.walktop052_5.geometry} material={materials.Logo} /> */}
            </group>
            <mesh name="walktop017" castShadow receiveShadow geometry={nodes.walktop017.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.03, 2.443, -1.469]} rotation={[Math.PI / 2, 0, -1.563]} scale={0.21} />
            <group name="walktop018" position={[-2.177, 5.634, 0]} rotation={[Math.PI / 2, 1.397, 0]} scale={0.21}>
                <mesh name="walktop084" castShadow receiveShadow geometry={nodes.walktop084.geometry} material={materials.body} />
                {/* <mesh name="walktop084_1" castShadow receiveShadow geometry={nodes.walktop084_1.geometry} material={materials.LogoMark} /> */}
                {/* <mesh name="walktop084_2" castShadow receiveShadow geometry={nodes.walktop084_2.geometry} material={materials.Logo} /> */}
            </group>
            <group name="walktop019" position={[2.15, 5.634, 0]} rotation={[Math.PI / 2, -1.358, 0]} scale={0.21}>
                <mesh name="walktop056" castShadow receiveShadow geometry={nodes.walktop056.geometry} material={materials.body} />
                {/* <mesh name="walktop056_1" castShadow receiveShadow geometry={nodes.walktop056_1.geometry} material={materials.LogoMark} /> */}
                {/* <mesh name="walktop056_2" castShadow receiveShadow geometry={nodes.walktop056_2.geometry} material={materials.Logo} /> */}
            </group>
            <mesh name="walktop020" castShadow receiveShadow geometry={nodes.walktop020.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.03, 4.751, -1.469]} rotation={[Math.PI / 2, 0, -1.563]} scale={0.21} />
            <mesh name="walktop039" castShadow receiveShadow geometry={nodes.walktop039.geometry} material={materials['C_Gun_Metal_03.001']} position={[-2.05, 4.799, 1.231]} rotation={[Math.PI / 2, 0, 1.567]} scale={0.21} />
            <mesh name="walktop048" castShadow receiveShadow geometry={nodes.walktop048.geometry} material={materials['C_Gun_Metal_03.001']} position={[1.95, 5.015, 1.231]} rotation={[Math.PI / 2, 0, -1.525]} scale={0.21} />
            <mesh name="walktop065" castShadow receiveShadow geometry={nodes.walktop065.geometry} material={materials['C_Gun_Metal_03.001']} position={[2.072, 5.011, -1.466]} rotation={[Math.PI / 2, 0, 1.572]} scale={0.21} />
            <mesh name="walktop003" castShadow receiveShadow geometry={nodes.walktop003.geometry} material={materials['C_Iron_Corroded_Stained.001']} position={[-2.504, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            {
                activeExtraItems.has("trailer stabilizer") &&
                <>
                    <mesh name="Stabilizer" castShadow receiveShadow geometry={nodes.Stabilizer.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
                    <mesh name="Stabilizer001" castShadow receiveShadow geometry={nodes.Stabilizer001.geometry} material={materials['C_Gun_Metal_03.001']} position={[0, 0, -6.581]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
                </>
            }
            <Jack visible={activeMovement.has("trailer jack")} />
            <PullupBar materials={materials} scale={0.02345} />
            <Dolly materials={materials} scale={0.02345} visible={activeMovement.has("trailer dolly")} />
            <Valut scale={0.8} position={[1, 0, 0]} rotation={[0, 0, 0]} visible={activeMovement.has("trailer valet")} />
        </group>
    )
}

const Jack = (props) => {
    const { nodes } = useGLTF('/models/jack-new.glb')
    const { materials } = useGLTF('/models/trailer.glb');
    return (
        <group {...props} scale={0.02345}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh castShadow geometry={nodes.jack_1.geometry} material={materials['C_Gun_Metal_03.001']} />
                <mesh castShadow geometry={nodes.jack_2.geometry} material={materials['C_Gun_Metal_03.001']} />
                <mesh castShadow geometry={nodes.jack_3.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} />
                <mesh castShadow geometry={nodes.jack_4.geometry} material={materials['D_Black_Plastic_Dull.001']} />
                <mesh castShadow geometry={nodes.jack_5.geometry} material={materials['D_Black_Plastic_Dull.001']} />
                <mesh castShadow geometry={nodes.jack_6.geometry} material={materials.Iron_Cast_01} />
                <mesh castShadow geometry={nodes.jack_7.geometry} material={materials['C_Iron_Corroded_Stained.001']} />
            </group>
            <mesh geometry={nodes.jack001.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

useGLTF.preload('/models/trailer.glb')
useGLTF.preload('/models/jack-new-transformed.glb')
