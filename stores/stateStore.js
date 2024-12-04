import { create } from 'zustand'
import ExteriorColor from "@/components/sections/ExteriorColor";
import InteriorColor from "@/components/sections/InteriorColor";
import MovementAccessories from "@/components/sections/MovementAccessories";
import UtilityAccessories from "@/components/sections/UtilityAccessories";
import Stats from "@/components/sections/Stats"
import Variants from "@/components/sections/Variants"
import AdjustablePully from "@/components/sections/AdjustablePully"
import AdjustableWeights from "@/components/sections/AdjustableWeights"
import RoundStation from "@/components/sections/RoundStation"
import Barbel from "@/components/sections/Barbel"
import AccountDetail from "@/components/sections/AccountDetail"
import CardDetails from "@/components/sections/CardDetails"
import ThankUpage from "@/components/sections/ThankUpage"
import FinanceOptionSlider from "@/components/ui/FinanceOptionSlider"

const useStateStore = create((set) => ({

}));

export default useStateStore;

export const useSectionsStore = create((set, get) => ({
    mobileSections: [
        {
            name: "variants",
            description: "test",
            component:
                (<>
                    <Stats />
                    <FinanceOptionSlider />
                    <Variants />
                </>)
        },
        {
            name: "color",
            description: "exterior color options",
            component: <ExteriorColor />
        },
        {
            name: "interior color",
            description: "interior color options",
            component: <InteriorColor />
        },
        {
            name: "movement accessories",
            description: "optinal accessories",
            component: <MovementAccessories />
        },
        {
            name: "utility accessories",
            description: "optinal accessories",
            component: <UtilityAccessories />
        }
    ],
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
            component: <Barbel />,
            default: true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <RoundStation />,
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
            component: <AdjustablePully />,
            default: true
        },
        {
            name: "Card",
            description: "Card Details",
            component: <CardDetails />,
            default: false
        },
        {
            name: "Account",
            description: "Account Details",
            component: <AccountDetail />,
            default: false
        },
        {
            name: "Thanks",
            description: "Thanks Page",
            component: <ThankUpage />,
            default: false
        },
    ],
    activeSectionIndex: 0,
    setActiveSectionIndex: (sectionIndex) => set(() => ({ activeSectionIndex: sectionIndex })),
    isFirstSection: () => get().activeSectionIndex === 0,
    nextSection: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex + 1) % state.sections.length })),
    prevSection: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex - 1 + state.sections.length) % state.sections.length })),

    nextSectionMobile: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex + 1) % state.mobileSections.length })),
    prevSectionMobile: () => set((state) => ({ activeSectionIndex: (state.activeSectionIndex - 1 + state.mobileSections.length) % state.mobileSections.length })),
}));

export const useMovementStore = create((set) => ({
    movementArray: [
        { title: "trailer jack", price: "0", detail: "500 lbs Electric Jack Electric and Manual", img: "jack.webp" },
        { title: "trailer dolly", price: "1,000", detail: "10,000 lbs Towing Manually Operated", img: "dolly.webp" },
        { title: "trailer valet", price: "5,000", detail: "9,000 lbs Towing Remote Controlled", img: "valet.webp" },
    ],
    activeMovement: new Set(["trailer jack"]),
    addMovement: (accessory) => set((state) => ({ activeMovement: state.activeMovement.add(accessory) })),
    removeMovement: (accessory) => set((state) => ({ activeMovementAccessories: state.activeMovement.delete(accessory) })),
}));



