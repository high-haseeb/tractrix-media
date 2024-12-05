"use client";
import React from 'react';
import Image from 'next/image';
import useSectionsStore from '@/stores/SectionStore';
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

export default Configurator;
