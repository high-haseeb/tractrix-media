import React, { useState } from 'react';
import Image from 'next/image';

const CardOption = ({ title, price, img, detail, checked, horizontal = false, onCheck = () => console.log("checked"), onUncheck = () => console.log("unchecked") }) => {
    const [selected, setSelected] = useState(checked);
    return (
        <>
            {horizontal ?
                (
                       <div className='flex w-full border border-[#707070] rounded-3xl p-4 items-center justify-between relative cursor-pointer'
                        onClick={
                            () => {
                                setSelected(s => !s);
                                !selected ? onCheck(title) : onUncheck(title);
                            }}
                    >
                        <div className='flex gap-4'>
                            <div className='bg-black/20 rounded-xl w-8 h-8 flex items-center justify-center'>
                                {selected && <Image src={'icons/tick.svg'} width={40} height={40} alt='tick' />}
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-base capitalize text-black/90'>{title}</div>
                                <div className='text-[#707070] text-xs font-normal'>{detail}</div>
                            </div>
                        </div>
                        <div className='font-semibold text-lg text-[#707070]'>${price}</div>
                    </div >
                )
                :
                (
                    <div className='flex flex-col border border-[#707070] rounded-3xl h-[15rem] p-4 items-center justify-center relative cursor-pointer'
                        onClick={
                            () => {
                                setSelected(s => !s);
                                !selected ? onCheck(title) : onUncheck(title);
                            }}
                    >
                        <div className='bg-black/20 rounded-xl absolute w-8 h-8 right-4 top-4 flex items-center justify-center'>
                            {selected && <Image src={'icons/tick.svg'} width={40} height={40} alt='tick' />}
                        </div>
                        <Image src={`/img/${img}`} width={100} height={100} alt={img} className='h-40 w-40 object-contain' />
                        <div className='font-semibold text-base'>${price}</div>
                        <div className='text-base font-semibold capitalize'>{title}</div>
                        <div className='text-[#707070] text-xs font-normal text-center'>{detail}</div>
                    </div >
                )
            }
        </>
    )
}

export default CardOption;
