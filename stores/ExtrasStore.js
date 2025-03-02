import { title } from 'process';
import { create } from 'zustand';

const useExtrasStore = create((set) => ({
    extraItems: [
        { title: "misting system", price: "2,500", detail: "On Both Sides" },
        { title: "trailer stabilizer", price: "500", detail: "Four Units" },
        { title: "Starlink Mini", price: "1,000", detail: "+Installation" },

    ],
    activeExtraItems: new Set([]),
    totalPriceWeight: 0,
    totalpriceExtra: 0,
    activeWeights: 0,
    activePully: 0,
    activeBarbell: 0, 
    activeMonitor:0,
    MonitorPrice:0,
    pullyPrice: 0,
    barbellWeightPrice: 0, 
    activeMeberShip:null,
    noOfTrailer:0,

    // mat variables
    activeMats: 0,
    MateState: false,
    matPrice: 0,
    MateTexture:"/textures/wood/walnut/diff.jpg",
    // MateTexture:"public/textures/wood/ash"


    barbellState: false,
    MonitorState:false,

    setNumberOfTraier:(number)=>set(()=>({noOfTrailer:number})),
    setMembership:(membership)=>set(()=>({activeMeberShip:membership})),
    setMateTexture:(texture)=>set(()=>({MateTexture:texture})),
    setActiveMats: (mat) => set(() => ({ activeMats: mat })),
    setMatPrice: (price) => set(() => ({ matPrice: price })),
    setMateState:(state)=>set(()=>({MateState:state})),
    setActivePully: (pully) => set(() => ({ activePully: pully })), // Fixed redundancy
    setPullyPrice: (price) => set(() => ({ pullyPrice: price })),
    setActiceWeights: (weights) => set(() => ({ activeWeights: weights })),
    setPriceWeights: (price) => set(() => ({ totalPriceWeight: price })),
    setActiveBarbell: (barbell) => set(() => ({ activeBarbell: barbell })), 
    setActiveMonitor:(monitor)=>set(()=>({activeMonitor:monitor})),
    setActiveMonitorPrice: (price) => set(() => ({ MonitorPrice: price })), 
    setMonitorState:(state)=>set(() => ({ MonitorState: state })),

    setBarbellPrice: (price) => set(() => ({ barbellWeightPrice: price })), 
    setBarbellState:(state)=>set(() => ({ barbellState: state })),

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
