import { create } from 'zustand'

const useVariantStore = create((set) => ({
    variants: [
        {
            name: "the pinky",
            value: {
                cash: "84,990",
                finance: "1,300"
            },
            stats: {
                operatingHours: "2-3",
                solarCapacity: "800",
                batteryCapacity: "5.3",
            }
        },
        {
            name: "the double",
            value: {
                cash: "89,990",
                finance: "1,400"
            },
            stats: {
                operatingHours: "4-5",
                solarCapacity: "800",
                batteryCapacity: "6.6"
            }
        },
        {
            name: "the trio",
            value: {
                cash: "95,990",
                finance: "1,500"
            },
            stats: {
                operatingHours: "6-7",
                solarCapacity: "1,200",
                batteryCapacity: "15.9"
            }
        },
        {
            name: "the chief",
            value: {
                cash: "99,990",
                finance: "1,600"
            },
            stats: {
                operatingHours: "8-10",
                solarCapacity: "1,200",
                batteryCapacity: "21.2"
            }
        }
    ],

    activeVariantName: "the pinky",
    setActiveVariant: (variantName) => set(() => ({ activeVariantName: variantName })),
    activeFinanceOption: "finance",
    setActiveFinanceOption: (financeOption) => set(() => ({ activeFinanceOption: financeOption })),
}));

export default useVariantStore;
