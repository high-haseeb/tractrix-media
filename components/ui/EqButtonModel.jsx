import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

function EqButtonModel({item}) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='w-full flex items-center justify-center '>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
                    Feature Detials
                </button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50'>
                    <div className="bg-[#E8E8E8] text-[#707070] w-1/2 h-1/2 rounded-3xl flex flex-row pointer-events-auto relative" >
                        <div className='w-full h-full py-5 px-3 flex justify-between'>
                            {
                                item.map(item => (
                                    <div className='flex items-center justify-between'>
                                        <div className='w-1/2 h-50 '>
                                            <Image src={item.img} className='w-full h-full object-cover rounded-full' alt='image' width={400} height={400} />
                                        </div>
                                        <div className='flex flex-col text-center w-1/2 gap-4'>
                                            <div className='font-bold text-4xl text-black capitalize'>{item.name}</div>
                                            <div className='font-bold text-4xl text-black'>{item.price}</div>
                                            <div className='text-2xl text-[#707070] font-normal flex flex-col items-center'>
                                                15lbs-45lbs
                                                <span>Set of 2</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Image src={'/icons/close.svg'} width={50} height={50} alt='close' className='cursor-pointer absolute top-4 right-4' onClick={() => setModalOpen(false)} />
                    </div>
                </div>
            }
        </>
    )

}

export default EqButtonModel

    