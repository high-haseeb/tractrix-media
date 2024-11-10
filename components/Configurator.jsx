"use client";
import Image from 'next/image';
import useStateStore, { useSectionsStore } from '@/stores/stateStore'

import Variants from "@/components/sections/Variants";
import Stats from "@/components/sections/Stats";


const Configurator = () => {
    const { sections, activeSectionIndex } = useSectionsStore();

    return (
        <div className="w-full h-full px-20 pt-20 pb-0 bg-white">
            <div className="flex flex-col items-center justify-start gap-8 relative h-full">
                {/* <OptionSlider activeOption={financeOption} setActiveOption={setFinanceOption} /> */}
                <Title />
                <Stats />
                <Variants />
                {
                    sections[activeSectionIndex].component
                }
                <Footer />
            </div>
        </div >
    )
}

const Title = () => <div className="font-extrabold text-4xl">Trailer Uno</div>;

const Footer = () => {
    const { nextSection, prevSection, isFirstSection } = useSectionsStore();
    const { variants, activeVariant } = useStateStore();

    const TextButton = ({ title, action }) =>
        <button className="bg-black text-white px-12 font-bold rounded-full py-1 shadow shodow-black/40" onClick={action}>
            {title}
        </button>

    const ImageButton = ({ imgUrl, action }) =>
        <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={action} >
            <Image src={imgUrl} width={30} height={30} alt={imgUrl} />
        </button>


    return (

        <div className='w-full absolute bottom-0 shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white'>
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
