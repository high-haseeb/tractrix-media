"use client";
import React, { useEffect, useRef } from "react";
import useSectionsStore from "@/stores/SectionStore";
import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/ui/Footer";
import FinanceOptionSlider from "./ui/FinanceOptionSlider";
import ThankUpage from "@/components/sections/ThankUpage";
import CardDetails from "@/components/sections/CardDetails";
import DynamicCard from "./sections/DynamicCard";
import AccountDetail from "./sections/AccountDetail";

const Configurator = () => {
    const { sections, activeSectionIndex } = useSectionsStore();
    const scrollableRef = useRef(null);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [activeSectionIndex]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-between gap-0 relative bg-white">
            {activeSectionIndex <= 8 ? (
                <>
                    <div
                        className="flex flex-col gap-6 w-full h-full overflow-y-scroll px-4 lg:px-20 pb-10 pt-10 lg:pt-20"
                    >
                        <Title />
                        <Stats />
                        <FinanceOptionSlider />
                        <Variants/>
                        {sections[activeSectionIndex].component}
                    </div>
                </>
            ) : (
                <>
                    {activeSectionIndex === 9 ? (
                        <div
                            ref={scrollableRef} 
                            className="flex flex-col gap-6 w-full h-full overflow-y-scroll px-4 lg:px-20 pb-10 pt-10 lg:pt-20"
                        >
                            {/* <Title />
                            <Stats /> */}
                            {sections[activeSectionIndex].component}
                        </div>
                    ) : activeSectionIndex <= 11 ? (
                        <div ref={scrollableRef} className={`flex flex-col gap-6 w-full h-full overflow-y-scroll px-4 ${activeSectionIndex === 11 ? "lg:px-20":"lg:px-16"} pb-10 pt-10 lg:pt-10 `}>
                            <div className={`flex flex-col rounded-lg ${activeSectionIndex === 11 ? "":"shadow-lg"} gap-5`}>
                                <div className="w-full flex justify-center items-center font-bold text-2xl mt-4">{activeSectionIndex === 11 ? "Trailer Uno":"Order Summary"}</div>
                                {sections[activeSectionIndex].component}
                            </div>
                        </div>
                    ) : (
                        sections[activeSectionIndex].component
                    )}
                </>
            )}
            {activeSectionIndex < 11 ? <Footer/> : <></>}
        </div>
    );
};

const Title = () => (
    <div className="font-bold lg:text-4xl text-3xl w-full text-center">Trailer Uno</div>
);

export default Configurator;
