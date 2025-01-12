import React, { useState } from 'react'
import Card3 from '@/components/ui/Card3';
import Slider3 from '@/components/ui/Slider3';
import Image from 'next/image';
import useColorStore from '@/stores/ColorStore';



const YogaMats = () => {
    const {woodColors} = useColorStore();
    const details=[
    { title: "Round Station Mat", price: "1,000", detail: "4.5 diameter"},
    ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipments</div>
        <div className="w-[80%] lg:w-full">
            <Slider3/>            
        </div>
            <Card3 price={"1,000"} name={"Round Station Mat"} details={"4.5 diameter"} />
            <ButtonModal items={woodColors} details={details[0]} />
        </div>
    )
}

export default YogaMats;


const ButtonModal = ({ items,details }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='w-full flex items-center justify-center '>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
                    Feature Detials
                </button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50'>
                    <div className="bg-[#E8E8E8] text-[#707070] w-auto h-auto rounded-3xl flex flex-row pointer-events-auto relative" >
                        <div className='py-8 px-6 flex lg:gap-6 gap-2 justify-between'>
                            {
                                items.map(item => (
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='lg:w-40 w-24 h-24 lg:h-40'>
                                            <Image src={item.img} className='w-full h-full object-cover rounded-full' alt='image' width={200} height={200} />
                                        </div>
                                        <div className='font-semibold lg:text-3xl text-lg text-black capitalize'>{item.name}</div>
                        <div className='flex flex-col items-center'>
                            <div className='text-sm '>Round Station Mat</div>
                            <div className='text-sm '>${details.price}</div>                            
                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Image src={'/icons/close.svg'} width={50} height={50} alt='close' className='cursor-pointer absolute top-4 right-4 w-6 h-6 lg:w-10 lg:h-10 ' onClick={() => setModalOpen(false)} />
                    </div>
                </div>
            }
        </>
    )
}