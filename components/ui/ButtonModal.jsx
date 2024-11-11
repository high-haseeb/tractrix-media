'use client';
import Image from 'next/image';
import React, { useState } from 'react'

const ButtonModal = ({ title, details }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='w-full flex items-center justify-center '>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>{title}</button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50'>
                    <div className="bg-[#E8E8E8] text-[#707070] w-1/2 h-1/2 rounded-3xl flex flex-row pointer-events-auto relative" >
                        <div className='w-1/3 h-full '>
                            <Image src={`/img/${details[1].img}`} className='w-full h-full object-cover rounded-l-3xl' alt='image' width={200} height={200} />
                        </div>
                        <div className='w-2/3 h-full py-8 px-6 flex flex-col justify-between'>
                            {
                                details.map(item => (
                                    <div>
                                        <div className='font-bold text-4xl text-black capitalize'>{item.title}</div>
                                        <div className='font-semibold text-2xl text-black/80 capitalize'>{item.price}$</div>
                                        <div className='font-normal text-xl text-black/80 mt-4'>{item.detail}</div>
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

export default ButtonModal;
