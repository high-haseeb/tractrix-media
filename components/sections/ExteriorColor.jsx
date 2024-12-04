import React from 'react'
import useColorStore from '@/stores/ColorStore';

const ExteriorColor = () => {
    const { colors, activeColor, setActiveColor } = useColorStore();
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

const ColorOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => setActive(title)}
    >
        <div className='w-10 h-10 rounded-full shadow shadow-black/20' style={{ backgroundColor: value }} ></div>
    </div>
);

export default ExteriorColor
