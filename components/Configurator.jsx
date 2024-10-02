'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import useStateStore from '@/stores/stateStore'

import ExteriorColor from "@/components/sections/ExteriorColor";
import InteriorColor from "@/components/sections/InteriorColor";
import Variants from "@/components/sections/Variants";
import MovementAccessories from "@/components/sections/MovementAccessories";
import UtilityAccessories from "@/components/sections/UtilityAccessories";
import Stats from "@/components/sections/Stats";


const Configurator = () => {
    const { variants, activeVariant } = useStateStore();

    const sections = [
        {
            name: "color",
            description: "exterior color options",
            component: <ExteriorColor />
        },
        {
            name: "interior color",
            description: "interior color options",
            component: <InteriorColor />
        },
        {
            name: "movement accessories",
            description: "optinal accessories",
            component: <MovementAccessories />
        },
        {
            name: "utility accessories",
            description: "optinal accessories",
            component: <UtilityAccessories />
        }
    ]
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className='w-full h-full px-20 pt-20 pb-0 bg-white'>
            <div className='flex flex-col items-center justify-start gap-8 relative h-full'>
                <div className='font-extrabold text-4xl'>Trailer Uno</div>
                {/* <OptionSlider activeOption={financeOption} setActiveOption={setFinanceOption} /> */}
                <Stats />
                <Variants />
                {
                    sections[activeSection].component
                }

                <div className='w-full absolute bottom-0 shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white'>
                    <div >
                        <div className='text-2xl font-bold'>${variants.filter(s => s.title === activeVariant)[0].value.toFixed(3)}</div>
                        <div className='text-light text-black/50 text-base capitalize'>Sales tax not included</div>
                    </div>
                    {
                        activeSection === 0 ?
                            (<button
                                className='bg-black text-white px-12 font-bold rounded-full py-1 shadow shodow-black/40'
                                onClick={() => setActiveSection(s => (s + 1) % sections.length)}
                            >
                                Next
                            </button>)
                            :
                            (
                                <div className='flex gap-4'>
                                    <button
                                        className='bg-black font-bold rounded-full shadow shodow-black/40 flex items-center justify-center p-2'
                                        onClick={() => setActiveSection(s => (s - 1 + sections.length) % sections.length)}
                                    >
                                        <Image src={"/icons/left.svg"} width={30} height={30} alt='prev' />
                                    </button>
                                    <button
                                        className='bg-black font-bold rounded-full shadow shodow-black/40 flex items-center justify-center p-2'
                                        onClick={() => setActiveSection(s => (s + 1) % sections.length )}
                                    >
                                        <Image src={"/icons/right.svg"} width={30} height={30} alt='next' />
                                    </button>

                                </div>
                            )
                    }
                </div>
            </div>
        </div >
    )
}

export default Configurator;
