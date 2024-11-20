import React, { useState } from 'react'
import Slider from "@/components/ui/Slider"
import Image from 'next/image'
import useStateStore from '@/stores/stateStore'
// import WoodColorOption from '../ui/WoodColorOption'

function RoundStation() {

    const { woodColors, activeWoodColor, setActiveWoodColor } = useStateStore();

    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-2xl text-black  font-semibold capitalize'>Equipments</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                {/* {
                    utilityAccessories.map((accessory, idx) => <CardOption key={idx} {...accessory} horizontal/>)
                } */}
                {/* <EquiCards item={item}/> */}
                <Slider/>
                <div className='flex w-full gap-4'>
                <div className='w-1/2'><Card/></div>
                <div className='flex w-1/2 items-center justify-center gap-1'>
                {
                    woodColors.map((color, idx) => <WoodColorOption title={color.name} value={color.src} active={activeWoodColor} setActive={setActiveWoodColor} key={idx}/>)
                }
            </div>
                </div>
            </div>
            {/* <ButtonModal title={"feature details"} details={accessories.filter((accessory) => accessory.title === activeAccessories)} /> */}
        </div>
    )
}


export default RoundStation




const WoodColorOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => { setActive(title) }}
    >
        <div className='w-20 h-20 rounded-full shadow shadow-black/20' >
            <Image src={`/textures/wood/${value}/diff.jpg`} height={1024} width={1024} alt={title} className="w-20 h-20 rounded-full shadow shadow-black/20"/>
        </div>
    </div>
);



const Card=()=>{
    const [selected,setSelected]=useState(false)
    return(
        <div
            className='flex w-auto border border-[#707070] rounded-[30px] p-1 items-center justify-between relative cursor-pointer'
            onClick={() => setSelected(!selected)}
        >
            <div className='flex gap-3 justify-between items-center w-full'>
                <div className='bg-black/20 rounded-xl w-8 h-8 flex items-center justify-center absolute top-2 left-4'>
                    {selected && <Image src='/icons/tick.svg' width={20} height={20} alt='tick' />}
                </div>
                <div className='flex flex-col font-semibold text-center gap-1 items-center'>
                    <div className='text-xl capitalize text-black'>{"$1000"}</div>
                    <div className='text-black text-base'>{"Round Station"}</div>
                    <div className='text-sm text-[#707070] font-normal flex flex-col items-center w-2/3'>
                        {"Color Nature Cork 4.5' Diameter"}
                    </div>
                </div>
            </div>
        </div>
    )
}



    


