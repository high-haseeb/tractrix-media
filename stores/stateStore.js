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

const useStateStore = create((set) => ({
    colors: [
        { name: "true black", hex: "#010101" },
        { name: "matte black", hex: "#01011D" },
        { name: "charcol gray", hex: "#52595D" },
        { name: "old zinc gray", hex: "#858078" },
        { name: "old town gray", hex: "#8B9396" },
        { name: "regal white", hex: "#F1F1EF" },
        { name: "wheathered copper", hex: "#554E44" },
        { name: "parchment", hex: "#CAC7B6" },
        { name: "hartford green", hex: "#012120" },
        { name: "dark bronze", hex: "#383428" },
        { name: "moss green", hex: "#00332E" },
        { name: "leaf green", hex: "#085344" },
        { name: "tahoe blue", hex: "#346799" },
        { name: "deep blue sea", hex: "#02455D" },
        { name: "colonial red", hex: "#68050A" },
        { name: "redi-mix red", hex: "#93052D" },
        { name: "desert tan", hex: "#C2B19E" },
    ],
    woodColors: [
        { name: "black", src: "dark", img: "/img/brown-wood.webp" },
        { name: "brown", src: "laminate", img: "/img/white-wood.webp" },
    ],
    variants: [
        { title: "the pinky", value: 84.990 },
        { title: "the double", value: 89.990 },
        { title: "the trio", value: 95.990 },
        { title: "the chief", value: 99.990 },
    ],
    stats: [
        { title: "operating", value: "2-3", unit: "hrs" },
        { title: "solar panels", value: "800", unit: "W" },
        { title: "battery capacity", value: "5.3", unit: "kWh" },
    ],
    utilityAccessories: [
        { title: "misting system", price: "2,500", detail: "On Both Sides" },
        { title: "trailer stabilizer", price: "500", detail: "Four Units" },
    ],

    activeUtilityAccessories: [],
    addUtilityAccessory: (accessory) => set(() => ({ activeUtilityAccessories: [...activeUtilityAccessories, accessory] })),
    removeUtilityAccessory: (accessory) => set((state) => ({
        activeUtilityAccessories: state.activeUtilityAccessories.filter(a => a !== accessory)
    })),


    activeColor: "true black",
    setActiveColor: (color) => set(() => ({ activeColor: color })),
    activeWoodColor: "black",
    setActiveWoodColor: (woodColor) => set(() => ({ activeWoodColor: woodColor })),
    activeVariant: "the pinky",
    setActiveVariant: (variant) => set(() => ({ activeVariant: variant })),
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
                    <Variants />
                </>)
        },
        {
            name: "color",
            description: "exterior color options",
            component: <ExteriorColor/>
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
            name: "Equipments",
            description: "optinal accessories",
            component: <Barbel/>,
            default : true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <RoundStation/>,
            default : true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <AdjustableWeights/>,
            default : true
        },
        {
            name: "Equipments",
            description: "optinal accessories",
            component: <AdjustablePully/>,
            default : true
        },
        {
            name: "color",
            description: "exterior color options",
            component: <ExteriorColor/>,
            default : true
        },
        {
            name: "interior color",
            description: "interior color options",
            component: <InteriorColor />,
            default : true
        },
        {
            name: "movement accessories",
            description: "optinal accessories",
            component: <MovementAccessories />,
            default : true
        },
        {
            name: "utility accessories",
            description: "optinal accessories",
            component: <UtilityAccessories />,
            default : true
        },
        {
            name:"Card",
            description:"Card Details",
            component:<CardDetails/>,
            default:false
        },
        {
            name: "Account",
            description: "Account Details",
            component: <AccountDetail/>,
            default : false
        },
        {
            name:"Thanks",
            description:"Thanks Page",
            component:<ThankUpage/>,
            default:false
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



