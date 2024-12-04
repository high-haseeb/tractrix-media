import React from 'react'
import useVariantStore from '@/stores/VariantStore';
import Link from 'next/link';

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
                        <div className={`capitalize ${activeVariantName === variant.name ? "font-semibold" : "font-normal text-gray-600"} `}>{variant.name}</div>
                        <div className={`${activeVariantName === variant.name ? "font-semibold" : "font-normal text-gray-600"}`}>
                            ${variant.value[activeFinanceOption]}
                            <span>{activeFinanceOption === "finance" ? "/mo" : ""}</span>
                        </div>
                    </div>
                )
            }
            {
                activeFinanceOption === "finance" && (
                    <div className='flex flex-col w-full items-center justify-center gap-2'>
                        <div className='text-base font-light text-gray-600'>$3,000 down, 6% APR, 72 months</div>
                        <Link className="text-base font-semibold text-gray-500 border-b border-b-gray-500 leading-none" href={'/edit-terms'}> Edit Terms</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Variants
