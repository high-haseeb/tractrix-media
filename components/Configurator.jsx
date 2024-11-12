"use client";
import Image from 'next/image';
import useStateStore, { useSectionsStore } from '@/stores/stateStore'

import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";
import useCheckMobile from "@/components/utils/isMobile";


const Configurator = () => {
    const { sections, mobileSections, activeSectionIndex } = useSectionsStore();
    let activeSections = sections;
    if (useCheckMobile()) activeSections = mobileSections;
    return (
        <div className="w-full h-full px-6 lg:px-20 lg:pt-20 pt-8 bg-white overflow-y-scroll overflow-x-hidden ">
            <div className="flex flex-col items-center justify-start lg:gap-8 gap-2 lg:relative h-full">
                {/* <OptionSlider activeOption={financeOption} setActiveOption={setFinanceOption} /> */}
                <Title />
                {
                    activeSections === sections ? mobileSections[0].component : null
                }
                {
                    activeSections[activeSectionIndex].component
                }
                <Footer />
            </div>
        </div >
    )
}

const Title = () => <div className="font-extrabold lg:text-4xl text-3xl w-full text-center">Trailer Uno</div>;

const Footer = () => {
    const { nextSection, prevSection, nextSectionMobile, prevSectionMobile, isFirstSection } = useSectionsStore();
    const { variants, activeVariant } = useStateStore();

    const TextButton = ({ title, action }) =>
        <button className="bg-black text-white px-12 font-bold rounded-full py-1 shadow shodow-black/40" onClick={action}>
            {title}
        </button>

    const ImageButton = ({ imgUrl, action }) =>
        <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={action} >
            <Image src={imgUrl} width={30} height={30} alt={imgUrl} />
        </button>


    if (useCheckMobile()) {
        return (
            <div className="w-full absolute bottom-0 shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white">
                <div >
                    <div className='text-2xl font-bold'>${variants.filter(s => s.title === activeVariant)[0].value.toFixed(3)}</div>
                    <div className='text-light text-black/50 text-base capitalize'>Sales tax not included</div>
                </div>
                {
                    isFirstSection() ?
                        <TextButton title={"Next"} action={nextSectionMobile} />
                        :
                        <div className="flex gap-4">
                            <ImageButton imgUrl={"/icons/left.svg"} action={prevSectionMobile} />
                            <ImageButton imgUrl={"/icons/right.svg"} action={nextSectionMobile} />
                        </div>
                }
            </div>
        )
    }
    return (

        <div className="w-full absolute bottom-0 shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white">
            <div >
                <div className='text-2xl font-bold'>${variants.filter(s => s.title === activeVariant)[0].value.toFixed(3)}</div>
                <div className='text-light text-black/50 text-base capitalize'>Sales tax not included</div>
            </div>
            {
                isFirstSection() ?
                    <TextButton title={"Next"} action={nextSection} />
                    :
                    <div className="flex gap-4">
                        <ImageButton imgUrl={"/icons/left.svg"} action={prevSection} />
                        <ImageButton imgUrl={"/icons/right.svg"} action={nextSection} />
                    </div>
            }
        </div>

    )
}

export default Configurator;
