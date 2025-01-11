import { create } from 'zustand';

export const useMovementStore = create((set) => ({
    movementArray: [
        { title: "trailer jack", price: "0", detail: "500 lbs Electric Jack Electric and Manual", img: "jack.webp" },
        { title: "trailer dolly", price: "1,000", detail: "10,000 lbs Towing Manually Operated", img: "dolly.webp" },
        { title: "trailer valet", price: "5,000", detail: "9,000 lbs Towing Remote Controlled", img: "valet.webp" },
    ],
    activeMovement: new Set(["trailer jack"]),
    totalMovementPrice: 0,
    addMovement: (accessory) => set((state) => {
        state.activeMovement.add(accessory);
        const newTotal = state.movementArray
            .filter(item => state.activeMovement.has(item.title))
            .reduce((sum, item) => sum + parseFloat(item.price.replace(',', '')), 0);
        return { activeMovement: new Set(state.activeMovement), totalMovementPrice: newTotal };
    }),
    removeMovement: (accessory) => set((state) => {
        state.activeMovement.delete(accessory);
        const newTotal = state.movementArray
            .filter(item => state.activeMovement.has(item.title))
            .reduce((sum, item) => sum + parseFloat(item.price.replace(',', '')), 0);
        return { activeMovement: new Set(state.activeMovement), totalMovementPrice: newTotal };
    }),
}));
