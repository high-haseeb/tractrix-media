import { create } from 'zustand'

const useColorStore = create((set) => ({
    colors: [
        { name: "matte black",       hex: "#000119" },
        { name: "charcol gray",      hex: "#51585C" },
        { name: "zinc gray",         hex: "#847F7A" },
        { name: "ash gray",          hex: "#8B9295" },
        { name: "lithium white",     hex: "#EFF0EE" },
        { name: "wheathered copper", hex: "#554E44" },
        { name: "military beige",    hex: "#C8C6B7" },
        { name: "night bronze",      hex: "#343226" },
        { name: "night green",       hex: "#11312D" },
        { name: "military green",    hex: "#235145" },
        { name: "deep sea blue",     hex: "#1A4357" },
        { name: "colonial red",      hex: "#68050A" },
        { name: "red carpet",        hex: "#861B2E" },
        { name: "desert sand",       hex: "#C2B19E" },
    ],
    activeColor: "desert sand",
    setActiveColor: (color) => set(() => ({ activeColor: color })),

    woodColors: [
        { name: "natural cork",  src: "laminate", img1: "/img/a.webp", img: "/img/white-wood.jpg" },
        { name: "choclate cork", src: "choclate", img1: "/img/b.webp", img: "/img/dark-wood.jpg"},
    ],
    activeMatColor:"natural cork",
    activeWoodColor: "natural cork",
    setActiveMatColor: (matColor) => set(() => ({ activeMatColor: matColor })),
    setActiveWoodColor: (woodColor) => set(() => ({ activeWoodColor: woodColor })),
}));

export default useColorStore;
