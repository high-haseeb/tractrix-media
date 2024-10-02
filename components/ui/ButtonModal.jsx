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
                    <div className="bg-[#E8E8E8] text-[#707070] w-1/2 h-1/2 rounded-3xl flex flex-col p-8 pointer-events-auto" >
                        <div className='w-full flex items-center justify-end'>
                            <Image src={'/icons/close.svg'} width={50} height={50} alt='close' className='cursor-pointer' onClick={() => setModalOpen(false)} />
                        </div>
                        {details}
                    </div>
                </div>
            }
        </>
    )
}

export default ButtonModal;
