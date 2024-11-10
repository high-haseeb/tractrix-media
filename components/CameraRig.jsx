import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSectionsStore } from "@/stores/stateStore";

const CameraRig = ({ v = new THREE.Vector3() }) => {
    const { activeSectionIndex } = useSectionsStore();
    let xOffset = 0;
    let zOffset = 0;
    return useFrame((state) => {
        const t = state.clock.elapsedTime;
        switch (activeSectionIndex) {
            case 0:
                xOffset = 10;
                zOffset = 14;
                break;
            case 1:
                xOffset = 0;
                zOffset = 17;
                break;
            case 2:
                xOffset = -8;
                zOffset = -16;
                break;
        }
        state.camera.position.lerp(v.set(Math.sin(t / 5) + xOffset, 0, zOffset + Math.cos(t / 5) / 2), 0.05)
    })
}

export default CameraRig;
