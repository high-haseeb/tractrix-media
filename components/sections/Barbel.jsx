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
                            <Image src={'/img/babel_1.jpg'} alt='color' width={400} height={200} className='w-full h-full object-cover' /> 
                        </div>
                        <div className='flex flex-col lg:w-1/2 w-full h-full lg:p-5 p-3 gap-3'>
                            <div className='font-bold lg:text-3xl text-xl'>
                                {/* Patent-Pending Adjustable Weight: Exclusive to WellBuilt */} 
                                {/* Adjustable Weightless Pulley Machine: Innovative Resistance Training */}
                                Barbell with Weights: Full-Range Strength Training Anywhere
            
                            </div>
                            <div className='lg:overflow-hidden h-full overflow-y-scroll'>
                            <div className='lg:text-base text-xs lg:h-full h-[25vh]'>
                                {/* At WellBuilt, we have designed and engineered a patent-pending adjustable weight system, an innovative 6-in-1 solution that adapts to various training needs. Ranging from 15 lbs to 45 lbs, this versatile weight allows users to adjust resistance levels with ease, eliminating the need for multiple separate weights.
                                Currently, WellBuilt holds the exclusive rights to this cutting-edge design, ensuring that our trailers are equipped with the most advanced fitness solutions available. Each set includes five adjustable weights, providing flexibility for different workouts, and is available for $1,000 per set.
                                Engineered for durability and convenience, this all-in-one system optimizes space while offering maximum functionality for trainers and participants alike. */}
                                {/* Our adjustable weightless pulley machine, also known as a virtual weight system, brings cutting-edge resistance training to the trailer. Featuring five resistance settings that simulate 15 to 45 lbs, it delivers the feel of traditional weights without the bulk. Designed to function just like a pulley system at the gym, it allows for smooth, controlled movements and supports a variety of exercises. Different handles can be attached for maximum versatility, accommodating workouts such as lat pulldowns, tricep extensions, and rows. Each set includes two pulley machines, securely mounted to the foldable squat rack, optimizing space while maintaining full gym functionality. This innovative system offers a seamless, weight-free training experience, redefining strength workouts on the go. */}
                                Our barbell and weight set delivers a complete strength training experience, allowing users to perform deadlifts, squats, and other barbell exercises with ease. The bars and weight plates (ranging from 5 to 45 lbs) are securely stored inside the trailer, keeping them protected and organized when not in use. When it's time to train, the bars can be loaded onto the foldable squat racks, which extend outside the trailer for a full outdoor lifting setup. Designed for durability and versatility, this system provides the same functionality as a gym, making it an essential part of our mobile fitness solution. 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
