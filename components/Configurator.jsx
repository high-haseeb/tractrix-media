"use client";
import React from 'react';
import useSectionsStore from '@/stores/SectionStore';
import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";
import Footer from '@/components/ui/Footer';
import FinanceOptionSlider from './ui/FinanceOptionSlider';
import ThankUpage from "@/components/sections/ThankUpage";
import CardDetails from "@/components/sections/CardDetails";

const Configurator = () => {
    const { sections, activeSectionIndex } = useSectionsStore();

    return (
        <div className='w-full h-full flex flex-col items-center justify-between gap-0 relative'>
            {/* <ThankUpPage /> */}
            {activeSectionIndex < sections.length - 1 ?
                (<>
                    <div className='flex flex-col gap-6 w-full h-full overflow-y-scroll px-4 lg:px-20 pb-10 pt-10 lg:pt-20 '>
                        <Title />
                        <Stats />
                        <FinanceOptionSlider />
                        <Variants />
                        {
                            sections[activeSectionIndex].component
                        }
                    </div>
                </>)
                :
                <ThankUpage />
            }
            <Footer />
        </div>
    );
};

const Title = () => (
    <div className="font-bold lg:text-4xl text-3xl w-full text-center">Trailer Uno</div>
);

export default Configurator;
