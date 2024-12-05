import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useSectionsStore from "@/stores/SectionStore";

const CameraRig = ({ v = new THREE.Vector3() }) => {
    const { activeSectionIndex, sections } = useSectionsStore();
    let xOffset = 0;
    let zOffset = 0;
    let yOffset = 0;
    return useFrame((state) => {
        const t = state.clock.elapsedTime;
        switch (sections[activeSectionIndex].name) {
            case "color":
                xOffset = 10;
                zOffset = 14;
                yOffset = 1;
                break;
            case "interior color":
                xOffset = 0;
                zOffset = 17;
                yOffset = 0;
                break;
            case "movement accessories":
                xOffset = -10;
                zOffset = -20;
                yOffset = 1;
                break;
            case "utility accessories":
                xOffset = 15;
                zOffset = 0;
                yOffset = 0;
                break;
            default:
                xOffset = 10;
                zOffset = 14;
                break;

        }
        state.camera.position.lerp(v.set(Math.sin(t / 5) + xOffset, yOffset, zOffset + Math.cos(t / 5) / 2), 0.05)
    })
}

export default CameraRig;
