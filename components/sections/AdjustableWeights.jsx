import React from 'react'
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import { useState } from 'react';
// import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const AdjustableWeights = () => {
    const details=[
    { title: "Adjustable Weights", price: "1,000", detail: "15lbs-45lbs \n Set of 4", img: "adjustable_weights.webp" },
    ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipment</div>
        <div className="w-[80%] lg:w-full">
            <Slider/>            
        </div>
            <Card imgSrc={() => <Image src={'/img/weight.png'} width={160} height={160} className="w-40 h-auto" />} price={"1,000"} name={"Adjustable Weights"} details={"15lbs-45lbs \n Set of 4"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    )
}

export default AdjustableWeights;




const ButtonModal = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const CloseDetails=()=>{
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
                    Feature Detials
                </button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black/40 flex items-center justify-center z-[99]'>
                    <div className='flex lg:flex-row flex-col lg:w-[50vw] lg:h-[50vh] w-[80vw] h-[80vh] rounded-xl bg-white relative'>
                        <Image src={'/icons/close.svg'}width={200} height={200} className='w-7 h-7 object-cover absolute right-5 top-5 cursor-pointer z-[100]' onClick={CloseDetails}/>
                        <div className='lg:w-1/2 w-full h-full p-5 relative'>
                            <Image src={'/img/weight.png'} alt='color' width={400} height={200} className='w-full h-full object-cover' /> 
                        </div>
                        <div className='flex flex-col lg:w-1/2 w-full h-full lg:p-5 p-3 gap-3'>
                            <div className='font-bold lg:text-3xl text-xl'>
                                Patent-Pending Adjustable Weight: Exclusive to WellBuilt
                            </div>
                            <div className='lg:overflow-hidden h-full overflow-y-scroll'>
                            <div className='lg:text-base text-xs lg:h-full h-[25vh]'>
                                At WellBuilt, we have designed and engineered a patent-pending adjustable weight system, an innovative 6-in-1 solution that adapts to various training needs. Ranging from 15 lbs to 45 lbs, this versatile weight allows users to adjust resistance levels with ease, eliminating the need for multiple separate weights.
                                Currently, WellBuilt holds the exclusive rights to this cutting-edge design, ensuring that our trailers are equipped with the most advanced fitness solutions available. Each set includes five adjustable weights, providing flexibility for different workouts, and is available for $1,000 per set.
                                Engineered for durability and convenience, this all-in-one system optimizes space while offering maximum functionality for trainers and participants alike.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

