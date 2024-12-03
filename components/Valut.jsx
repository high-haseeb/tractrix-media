import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Valut(props) {
    const { nodes, materials } = useGLTF('/models/valut.glb')
    return (

        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.walktop049.geometry} material={materials.D_Black_Plastic_Aged} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop055.geometry} material={materials['RS_Material.2']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop056.geometry} material={materials.C_Aluminum_Checkered_Plate} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop057.geometry} material={materials.Rubber_Grip_01} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop058.geometry} material={materials['Steel_Dirty_02.1']} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop059.geometry} material={materials.Steel_Dirty_04} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop060.geometry} material={materials.Steel_Dirty_02} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop061.geometry} material={materials.Aluminum_Painted_01} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
            <mesh castShadow receiveShadow geometry={nodes.walktop037.geometry} material={materials['Material.003']} position={[1.95, 2.84, 1.231]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
        </group>
    )
}

useGLTF.preload('/models/valut.glb')
