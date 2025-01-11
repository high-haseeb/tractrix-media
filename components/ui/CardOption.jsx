import React, { useState } from 'react';
import Image from 'next/image';
import {useMovementStore} from "../../stores/stateStore"

const CardOption = ({ title, price, img, detail, checked, horizontal = false, onCheck = () => console.log("checked"), onUncheck = () => console.log("unchecked") }) => {
    const [selected, setSelected] = useState(checked);
    return (
        <div className='flex flex-col border border-[#707070] rounded-3xl h-full p-2 items-center justify-center relative cursor-pointer w-1/3'
            onClick={
                () => {
                    setSelected(s => !s);
                    !selected ? onCheck(title) : onUncheck(title);
                    console.log(title,price)
                }}
        >
            <div className='bg-black/20 rounded-xl absolute w-8 h-8 right-4 top-4 flex items-center justify-center'>
                {selected && <Image src={'icons/tick.svg'} width={40} height={40} alt='tick' />}
            </div>
            <Image src={`/img/${img}`} width={100} height={100} alt={img} className='h-full w-auto object-contain' />
            <div className='font-semibold text-sm'>${price}</div>
            <div className='text-sm font-semibold capitalize'>{title}</div>
            <div className='text-[#707070] text-[10px] font-semibold text-center text-pretty'>{detail}</div>
        </div>
    )
}

export default CardOption;
