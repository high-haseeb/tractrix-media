import React, { useEffect, useRef } from 'react'
import { useTexture } from '@react-three/drei'
import useExtrasStore from '@/stores/ExtrasStore'


function Model(props) {
  const {MateTexture}=useExtrasStore() 
  // const { activeMatColor } = useColorStore()
  const matTexture=useTexture(MateTexture)
  const logoTexture = useTexture('/logo-symbol.webp')

  useEffect(()=>{
    
  })

  const ref = useRef()

  return (
    <group {...props} dispose={null}>
      {/* Cylinder with mat texture */}
      <mesh ref={ref} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.01]} />
        <meshStandardMaterial map={matTexture} />
      </mesh>

      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2,0, Math.PI / 2]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshStandardMaterial map={logoTexture} transparent />
      </mesh>
    </group>
  )
}

export default Model
