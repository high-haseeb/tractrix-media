import { create } from 'zustand';

const useExtrasStore = create((set) => ({
    extraItems: [
        { title: "misting system", price: "2,500", detail: "On Both Sides" },
        { title: "trailer stabilizer", price: "500", detail: "Four Units" },
        
    ],
    activeExtraItems: new Set([]),
    totalPriceWeight: 0,
    totalpriceExtra: 0,
    activeWeights: 0,
    activePully: 0,
    activeBarbell: 0, 
    pullyPrice: 0,
    barbellWeightPrice: 0, 

    setActivePully: (pully) => set(() => ({ activePully: pully })),
    setPullyPrice: (price) => set(() => ({ pullyPrice: price })),
    setActiceWeights: (weights) => set(() => ({ activeWeights: weights })),
    setPriceWeights: (price) => set(() => ({ totalPriceWeight: price })),
    setActiveBarbell: (barbell) => set(() => ({ activeBarbell: barbell })), 
    setBarbellPrice: (price) => set(() => ({ barbellWeightPrice: price })), 

    addExtraItem: (extra) =>
        set((state) => {
            const updatedSet = new Set(state.activeExtraItems);
            updatedSet.add(extra);
            const newTotal = state.extraItems
                .filter(item => updatedSet.has(item.title))
                .reduce((sum, item) => sum + parseFloat(item.price.replace(',', '')), 0);

            return { activeExtraItems: updatedSet, totalpriceExtra: newTotal };
        }),

    removeExtraItem: (extra) =>
        set((state) => {
            const updatedSet = new Set(state.activeExtraItems);
            updatedSet.delete(extra);

            const newTotal = state.extraItems
                .filter(item => updatedSet.has(item.title))
                .reduce((sum, item) => sum + parseFloat(item.price.replace(',', '')), 0);

            return { activeExtraItems: updatedSet, totalpriceExtra: newTotal };
        }),
}));

export default useExtrasStore;
