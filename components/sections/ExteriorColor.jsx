import React from 'react'
import useColorStore from '@/stores/ColorStore';

const ExteriorColor = () => {
    const { colors, activeColor, setActiveColor } = useColorStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center text-black/50'>
                <div className='font-light text-base lg:text-xl'>INCLUDED</div>
                <div className='font-base text-sm lg:text-base capitalize'>exterior color options</div>
                <div className='font-semibold text-lg lg:text-xl capitalize w-full text-center text-black mt-2'>{activeColor}</div>
            </div>
            <div className='grid grid-cols-7 gap-0'>
                {
                    colors.map((color, idx) => <ColorOption title={color.name} value={color.hex} active={activeColor} setActive={setActiveColor} key={idx} />)
                }
            </div>
        </div>
    )
};

const ColorOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => setActive(title)}
    >
        <div className='w-8 h-8 lg:w-10 lg:h-10 rounded-full shadow shadow-black/20' style={{ backgroundColor: value }} ></div>
    </div>
);

export default ExteriorColor
