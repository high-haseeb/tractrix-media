import React from 'react'
import useVariantStore from '@/stores/VariantStore';

const Variants = () => {
    const { variants, activeVariantName, setActiveVariant, activeFinanceOption } = useVariantStore();
    return (
        <div className='w-full flex flex-col gap-4'>
            {
                variants.map((variant, idx) =>
                    <div
                        key={idx}
                        className={`w-full rounded-full cursor-pointer transition-all flex items-center justify-between px-8 py-3 border border-black ${activeVariantName === variant.name ? "bg-black/10 text-black" : "bg-none text-black/80 border-black/50 "}`}
                        onClick={() => setActiveVariant(variant.name)}
                    >
                        <div className={`capitalize ${activeVariantName === variant.name ? "font-semibold" : "font-light"} `}>{variant.name}</div>
                        <div className={`${activeVariantName === variant.name ? "font-semibold" : "font-light"}`}>
                            ${variant.value[activeFinanceOption]}
                            <span>{activeFinanceOption === "finance" ? "/mo" : ""}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Variants
