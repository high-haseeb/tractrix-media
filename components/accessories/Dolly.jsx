import React from 'react'
import { useGLTF } from '@react-three/drei'

function Dolly({ materials, ...props }) {
  const { nodes } = useGLTF('/models/dolly.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.grip.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.tyres.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.handle.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.valet_manual001.geometry} material={materials['Rubber_Rough_001_Black_50cm.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.knbo.geometry} material={materials['C_Gun_Metal_03.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/dolly.glb')
export default Dolly; 
