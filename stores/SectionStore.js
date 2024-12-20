import { create } from "zustand";
import ExteriorColor from "@/components/sections/ExteriorColor";
import InteriorColor from "@/components/sections/InteriorColor";
import MovementAccessories from "@/components/sections/MovementAccessories";
import UtilityAccessories from "@/components/sections/UtilityAccessories";
import AdjustablePulley from "@/components/sections/AdjustablePully"
import AdjustableWeights from "@/components/sections/AdjustableWeights"
import RoundStation from "@/components/sections/RoundStation"
import Barbell from "@/components/sections/Barbel"

const useSectionsStore = create((set, get) => ({
    sections: [
        {
            name: "color",
            description: "exterior color options",
            component: <ExteriorColor />,
            default: true
        },
        {
            name: "interior color",
            description: "interior color options",
            component: <InteriorColor />,
            default: true
        },
        {
            name: "movement accessories",
            description: "optinal accessories",
            component: <MovementAccessories />,
            default: true
        },
        {
            name: "utility accessories",
            description: "optinal accessories",
            component: <UtilityAccessories />,
            default: true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <AdjustableWeights />,
            default: true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <AdjustablePulley />,
            default: true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <Barbell />,
            default: true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <RoundStation />,
            default: true
        },
        // {
        //     name: "Card",
        //     description: "Card Details",
        //     component: <CardDetails />,
        //     default: false
        // },
        // {
        //     name: "Account",
        //     description: "Account Details",
        //     component: <AccountDetail />,
        //     default: false
        // },
        // {
        //     name: "Thanks",
        //     description: "Thanks Page",
        //     component: <ThankUpage />,
        //     default: false
        // },
    ],
    activeSectionIndex: 0,
    setActiveSectionIndex: (sectionIndex) => set(() => ({ activeSectionIndex: sectionIndex })),
    isFirstSection: () => get().activeSectionIndex === 0,
    nextSection: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex + 1) % state.sections.length })),
    prevSection: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex - 1 + state.sections.length) % state.sections.length })),
}));

export default useSectionsStore;
