// import React from 'react'
// import { useGLTF, useTexture } from '@react-three/drei'
// import * as THREE from 'three'

// export default function YogaMat(props) {
//   // Load the GLTF model
//   const { nodes, materials } = useGLTF('/models/yogamate.glb')

//   const [diff, normal, rough] = useTexture([
//     '//textures/wood/diff.jpg', 
//     '/textures/wood/nor.jpg',  
//     '/textures/wood/rough.jpg' 
//   ])

//   // Configure the textures (optional, for better appearance)
//   diff.wrapS = diff.wrapT = THREE.RepeatWrapping
//   normal.wrapS = normal.wrapT = THREE.RepeatWrapping
//   rough.wrapS = rough.wrapT = THREE.RepeatWrapping

//   // Clone and configure the material
//   const updatedMaterial = materials['Material.001'].clone()
//   updatedMaterial.map = diff          // Apply diffuse map
//   updatedMaterial.normalMap = normal // Apply normal map
//   updatedMaterial.roughnessMap = rough // Apply roughness map
//   updatedMaterial.roughness = 1       // Set roughness scale (optional)
//   updatedMaterial.needsUpdate = true

//   return (
//     <group {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
//       <group position={[-0.126, 0.27, 0.858]} scale={[0.096, 0.305, 0.096]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_10.geometry}
//           material={materials['yoga_block.001']} // No changes for this part
//           position={[0, 0, -0.03]}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_12.geometry}
//         material={updatedMaterial} // Apply the updated material
//         position={[-0.126, 0.503, 0.858]}
//         scale={[0.096, 0.727, 0.096]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_14.geometry}
//         material={updatedMaterial} // Apply the updated material
//         position={[-0.126, 0.026, 0.858]}
//         scale={[0.096, 0.727, 0.096]}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/models/yogamate.glb')
