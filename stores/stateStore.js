import { create } from 'zustand'

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
        { name: "black", src: "/textures/black.webp" },
        { name: "brown", src: "/textures/white.webp" },
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
    movementAccessories: [
        { title: "trailer jack", price: "0", detail: "500 lbs Electric Jack Electric and Manual", img: "jack.webp", checked: true },
        { title: "trailer dolly", price: "1,000", detail: "10,000 lbs Towing Manually Operated", img: "dolly.webp", checked: false },
        { title: "trailer valet", price: "5,000", detail: "9,000 lbs Towing Remote Controlled" , img: "valet.webp", checked: false},
    ],
    utilityAccessories : [
        { title : "misting system", price : "2,500", detail: "On Both Sides"},
        { title : "trailer stabilizer", price : "500", detail: "Four Units"},
    ],
    activeMovementAccessories: ["trailer jack"],
    addMovementAccessory: (accessory) => set(() => ({ activeMovementAccessories: [...activeMovementAccessories, accessory] })),
    removeMovementAccessory: (accessory) => set((state) => ({
        activeMovementAccessories: state.activeMovementAccessories.filter(a => a !== accessory)
    })),

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

