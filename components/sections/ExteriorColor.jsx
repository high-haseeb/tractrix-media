import React from 'react'
import useStateStore from '@/stores/stateStore';
import ColorOption from "@/components/ui/ColorOption";

const ExteriorColor = () => {
    const { colors, activeColor, setActiveColor } = useStateStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center text-black/50'>
                <div className='font-light text-xl'>INCLUDED</div>
                <div className='font-base text-base capitalize'>exterior color options</div>
                <div className='font-semibold text-xl capitalize w-full text-center text-black'>{activeColor}</div>
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {
                    colors.map((color, idx) => <ColorOption title={color.name} value={color.hex} active={activeColor} setActive={setActiveColor} key={idx} />)
                }
            </div>
        </div>
    )
};

export default ExteriorColor
