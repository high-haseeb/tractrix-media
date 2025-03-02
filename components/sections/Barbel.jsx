import React from 'react'
import Card2 from '@/components/ui/Card2';
import Slider2 from '@/components/ui/Slider2';
// import ButtonModal from '../ui/ButtonModal';
import { useState } from 'react';
import Image from 'next/image';

const Barbell = () => {
    const details=[
        { title: "Barbell and Weights", price: "500", detail: "10bs-45lbs \n (Set of 2) +1 Barbell", img: "barbell.webp" },
        ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipment</div>
        <div className="w-[80%] lg:w-full">
            <Slider2/>
        </div>
            <Card2 imgSrc={() => <Image src={"/img/barbell.webp"} width={200} height={200} alt='adjustable_pulley' className='w-24 h-auto'/>} price={"500"} name={"Barbell and Weights"} details={"10bs-45lbs \n (Set of 2) +1 Barbell"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    )
}

export default Barbell;


const ButtonModal = () => {
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
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black/40 flex items-center justify-center z-[9999]'>
                    <div className='flex w-[50vw] h-[50vh] rounded-xl bg-white relative'>
                        <Image src={'/icons/close.svg'}width={200} height={200} className='w-7 h-7 object-cover absolute right-5 top-5 cursor-pointer' onClick={CloseDetails}/>
                        <div className='w-1/2 h-full p-10 relative'>
                            <Image src={'/img/babel_1.jpg'} alt='color' width={400} height={200} className='w-full h-full object-cover'/> 
                        </div>
                        <div className='flex flex-col w-1/2 h-full py-6 pr-6 gap-3'>
                            <div className='font-bold text-3xl w-[80%]'>
                                Barbell with Weights: Full-Range Strength Training Anywhere
                            </div>
                            <div className='text-lg'>
                                Our barbell and weight set delivers a complete strength training experience, allowing users to perform deadlifts, squats, and other barbell exercises with ease. The bars and weight plates (ranging from 5 to 45 lbs) are securely stored inside the trailer, keeping them protected and organized when not in use. When it's time to train, the bars can be loaded onto the foldable squat racks, which extend outside the trailer for a full outdoor lifting setup. Designed for durability and versatility, this system provides the same functionality as a gym, making it an essential part of our mobile fitness solution.
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}