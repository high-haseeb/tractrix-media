import { create } from 'zustand';

const useExtrasStore = create((set) => ({
    extraItems: [
        { title: "misting system", price: "2,500", detail: "On Both Sides" },
        { title: "trailer stabilizer", price: "500", detail: "Four Units" },
    ],
    activeExtraItems: new Set(["misting system"]),
    addExtraItem: (extra) =>
        set((state) => {
            const updatedSet = new Set(state.activeExtraItems);
            updatedSet.add(extra);
            return { activeExtraItems: updatedSet };
        }),
    removeExtraItem: (extra) =>
        set((state) => {
            const updatedSet = new Set(state.activeExtraItems);
            updatedSet.delete(extra);
            return { activeExtraItems: updatedSet };
        }),
}));

export default useExtrasStore;
