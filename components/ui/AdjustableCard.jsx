import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

function AdjustableCard({item}) {
    const [selected, setSelected] = useState(false);
    // console.log(item[0]);

    return (
        <div
            className='flex w-3/4 border border-[#707070] rounded-[30px] p-2 items-center justify-between relative cursor-pointer'
            onClick={() => setSelected(!selected)}
        >
            <div className='flex gap-3 justify-between items-center w-full'>
                <div className='bg-black/20 rounded-xl w-8 h-8 flex items-center justify-center'>
                    {selected && <Image src='/icons/tick.svg' width={20} height={20} alt='tick' />}
                </div>
                <div>
                    <Image src={item[0].img} alt='image' width={200} height={200} className='w-24 h-24 rounded-full' />
                </div>
                <div className='flex flex-col font-semibold text-center gap-1 items-center'>
                    <div className='text-xl capitalize text-black'>{item[0].price}</div>
                    <div className='text-black text-base'>{item[0].name}</div>
                    <div className='text-sm text-[#707070] font-normal flex flex-col items-center w-3/4'>
                        {item[0].dis}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdjustableCard

    