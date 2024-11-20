"use client";
import React from 'react';
import Image from 'next/image';
import useStateStore, { useSectionsStore } from '@/stores/stateStore';

import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";
import useCheckMobile from "@/components/utils/isMobile";

const Configurator = () => {
    const { sections, mobileSections, activeSectionIndex } = useSectionsStore();
    const isMobile = useCheckMobile();
    const activeSections = isMobile ? mobileSections : sections;
    const containerPadding = activeSections[activeSectionIndex].name === "Thanks" ? "p-0" : "px-6 lg:px-20 lg:pt-12 pt-8";

    return (
        <div className={`w-full h-full ${containerPadding} bg-white overflow-y-scroll overflow-x-hidden`}>
            <div className="flex flex-col items-center justify-start lg:gap-8 gap-2 lg:relative h-full">
                {activeSections[activeSectionIndex].name !== "Thanks" ?<Title/>:""}
                {activeSections[activeSectionIndex].default === true && (
                    activeSections === sections ? mobileSections[0]?.component : null
                )}
                {activeSections[activeSectionIndex]?.component}
                {["Account", "Card"].includes(activeSections[activeSectionIndex].name)
                    ? <NewFooter activeSectionName={activeSections[activeSectionIndex].name} />
                    : activeSections[activeSectionIndex].name === "Thanks" ? <></>:<Footer/>}
            </div>
        </div>
    );
};

const Title = () => (
    <div className="font-extrabold lg:text-4xl text-3xl w-full text-center">Trailer Uno</div>
);

const Footer = () => {
    const { nextSection, prevSection, nextSectionMobile, prevSectionMobile, isFirstSection } = useSectionsStore();
    const { variants, activeVariant } = useStateStore();
    const isMobile = useCheckMobile();

    const TextButton = ({ title, action }) => (
        <button className="bg-black text-white px-12 font-bold rounded-full py-1 shadow shadow-black/40" onClick={action}>
            {title}
        </button>
    );

    const ImageButton = ({ imgUrl, action }) => (
        <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={action}>
            <Image src={imgUrl} width={30} height={30} alt="navigation icon" />
        </button>
    );

    const currentVariant = variants.find((s) => s.title === activeVariant);

    return (
        <div className="w-full absolute bottom-0 shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white">
            <div>
                <div className='text-2xl font-bold'>${currentVariant ? currentVariant.value.toFixed(3) : "0.000"}</div>
                <div className='text-light text-black/50 text-base capitalize'>Sales tax not included</div>
            </div>
            {isFirstSection() ? (
                <TextButton title="Next" action={isMobile ? nextSectionMobile : nextSection} />
            ) : (
                <div className="flex gap-4">
                    <ImageButton imgUrl="/icons/left.svg" action={isMobile ? prevSectionMobile : prevSection} />
                    <ImageButton imgUrl="/icons/right.svg" action={isMobile ? nextSectionMobile : nextSection} />
                </div>
            )}
        </div>
    );
};

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
