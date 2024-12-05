import { create } from 'zustand'

const useStateStore = create((set) => ({

}));

export default useStateStore;

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



