import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSectionsStore } from "@/stores/stateStore";
import useCheckMobile from "@/components/utils/isMobile";

const CameraRig = ({ v = new THREE.Vector3() }) => {
    const { activeSectionIndex, sections, mobileSections } = useSectionsStore();
    let xOffset = 0;
    let zOffset = 0;
    let yOffset = 0;
    let workingSections = sections;
    if(useCheckMobile()) workingSections = mobileSections  
    return useFrame((state) => {
        const t = state.clock.elapsedTime;
        switch (workingSections[activeSectionIndex].name) {
            case "color":
                xOffset = 10;
                zOffset = 14;
                yOffset = 0;
                break;
            case "interior color":
                xOffset = 0;
                zOffset = 17;
                yOffset = 0;
                break;
            case "movement accessories":
                xOffset = -4;
                zOffset = -20;
                yOffset = 3;
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
