import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Ground = ({ positionY }) => {
    const concrete = useTexture({
        map: "/textures/concrete/hangar_concrete_floor_diff_1k.jpg",
        roughnessMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        aoMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        metalnessMap: "/textures/concrete/hangar_concrete_floor_arm_1k.jpg",
        displacementMap: "/textures/concrete/hangar_concrete_floor_disp_1k.jpg",
        normalMap: "/textures/concrete/hangar_concrete_floor_nor_gl_1k.jpg",
    })

    for (const key in concrete) {
        if (concrete.hasOwnProperty(key)) {
            concrete[key].wrapS = THREE.RepeatWrapping;
            concrete[key].wrapT = THREE.RepeatWrapping;
            concrete[key].repeat.set(10, 10);
        }
    }

    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, positionY, 0]}>
            <planeGeometry args={[100, 100, 1, 1]} />
            <meshStandardMaterial {...concrete} />
        </mesh>
    )
}
export default Ground;
