import React from 'react'
import { useGLTF } from '@react-three/drei'

function PullupBar({ materials, ...props }) {
  const { nodes } = useGLTF('/models/pullup-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.bar.geometry} material={materials['C_Iron_Corroded_Stained.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['default.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials['Rubber_Grip_01_1.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials['default.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials['Rubber_Grip_01_1.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Extrude.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Extrude1.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Extrude1_2.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Extrude_2.geometry} material={materials.Iron_Cast_01} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['R?volution3'].geometry} material={materials['C_Aluminum_Damaged.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['R?volution5'].geometry} material={materials['C_Aluminum_Damaged.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/pullup-transformed.glb')
export default PullupBar; 
