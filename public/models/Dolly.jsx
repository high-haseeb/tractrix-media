/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 dolly.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/dolly.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.grip.geometry} material={nodes.grip.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.tyres.geometry} material={nodes.tyres.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.handle.geometry} material={nodes.handle.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.valet_manual001.geometry} material={nodes.valet_manual001.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.knbo.geometry} material={nodes.knbo.material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/dolly.glb')