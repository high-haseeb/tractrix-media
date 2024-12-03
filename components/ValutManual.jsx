import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ValutManual(props) {
  const { nodes, materials } = useGLTF('/models/valut_manual.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.walktop027.geometry} material={materials.C_Gun_Metal_03_1} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
      <mesh castShadow receiveShadow geometry={nodes.walktop028.geometry} material={materials.Print} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
      <mesh castShadow receiveShadow geometry={nodes.walktop029.geometry} material={materials.D_Rubber} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
    </group>
  )
}

useGLTF.preload('/models/valut_manual.glb')
