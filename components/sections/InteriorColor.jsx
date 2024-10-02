import React from 'react'
import useStateStore from '@/stores/stateStore';
import WoodColorOption from "@/components/ui/WoodColorOption";
import ButtonModal from "@/components/ui/ButtonModal";

const InteriorColor = () => {
    const { woodColors, activeWoodColor, setActiveWoodColor } = useStateStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center text-black/50'>
                <div className='font-light text-xl'>INCLUDED</div>
                <div className='font-base text-base capitalize'>interior color options</div>
                <div className='font-semibold text-xl capitalize w-full text-center text-black'>{activeWoodColor}</div>
            </div>
            <div className='flex items-center justify-center'>
                {
                    woodColors.map((color, idx) => <WoodColorOption title={color.name} value={color.src} active={activeWoodColor} setActive={setActiveWoodColor} key={idx} />)
                }
            </div>
            <ButtonModal title={"feature details"} details={activeWoodColor} />
        </div>
    )
}

export default InteriorColor;
