"use client";
import React from 'react';
import Image from 'next/image';
import useStateStore, { useSectionsStore } from '@/stores/stateStore';

import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";
import useCheckMobile from "@/components/utils/isMobile";
import Footer from '@/components/ui/Footer';
import FinanceOptionSlider from './ui/FinanceOptionSlider';

const Configurator = () => {
    const { sections, activeSectionIndex } = useSectionsStore();

    return (
        <div className='w-full h-full flex flex-col items-center justify-between gap-0 relative'>
            <div className='flex flex-col gap-6 w-full h-full overflow-y-scroll px-4 lg:px-20 pb-10 pt-20 '>
                <Title />
                <Stats />
                <FinanceOptionSlider />
                <Variants />
                {
                    sections[activeSectionIndex].component
                }
            </div>
            <Footer />
        </div>
    );
};

const Title = () => (
    <div className="font-bold lg:text-4xl text-3xl w-full text-center">Trailer Uno</div>
);


const NewFooter = ({ activeSectionName }) => {
    const { nextSection, prevSection, nextSectionMobile, prevSectionMobile } = useSectionsStore();
    const isMobile = useCheckMobile();

    const ImageButton = ({ imgUrl, action }) => (
        <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={action}>
            <Image src={imgUrl} width={30} height={30} alt="navigation icon" />
        </button>
    );

    return (
        <div className="w-full absolute bottom-0 px-6 py-4 flex justify-between items-center">
            <div className="flex justify-between w-full">
                <ImageButton imgUrl="/icons/left.svg" action={isMobile ? prevSectionMobile : prevSection} />
                {activeSectionName === "Account" ? (
                    <ImageButton imgUrl="/icons/right.svg" action={isMobile ? nextSectionMobile : nextSection} />
                ) : (
                    <div className="flex justify-end w-full">
                        <button className="w-2/3 h-10 rounded-full bg-black text-white font-semibold">
                            Place Your Reservation
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Configurator;
