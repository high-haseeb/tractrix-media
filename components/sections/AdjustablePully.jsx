import React from 'react'
import Card1 from '@/components/ui/Card1';
import Slider1 from '@/components/ui/Slider1';
// import ButtonModal from '../ui/ButtonModal';
import { useState } from 'react';
import Image from 'next/image';

const AdjustablePulley = () => {
    const details=[
        { title: "Adjustable Pulley", price: "1,000", detail: "15lbs-45lbs \n Set of 2", img: "adjustable_pulley.webp" },
        ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipment</div>

        <div className="w-[80%] lg:w-full">
            <Slider1 />
</div>
            <Card1 imgSrc={() => <Image src={"/img/pully.webp"} width={200} height={200} alt='adjustable_pulley' className='rounded-full w-24 h-auto' />} price={"1,000"} name={"Adjustable Pulley"} details={"15lbs-45lbs \n Set of 2"} />
            <ButtonModal />
        </div>
    );
}

export default AdjustablePulley;




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
                            <Image src={'/img/pully.png'} alt='color' width={400} height={200} className='w-full h-full object-cover rounded-full'/> 
                        </div>
                        <div className='flex flex-col w-1/2 h-full py-6 pr-6 gap-3'>
                            <div className='font-bold text-2xl w-[80%]'>
                                Adjustable Weightless Pulley Machine: Innovative Resistance Training
                            </div>
                            <div>
                                Our adjustable weightless pulley machine, also known as a virtual weight system, brings cutting-edge resistance training to the trailer. Featuring five resistance settings that simulate 15 to 45 lbs, it delivers the feel of traditional weights without the bulk. Designed to function just like a pulley system at the gym, it allows for smooth, controlled movements and supports a variety of exercises. Different handles can be attached for maximum versatility, accommodating workouts such as lat pulldowns, tricep extensions, and rows. Each set includes two pulley machines, securely mounted to the foldable squat rack, optimizing space while maintaining full gym functionality. This innovative system offers a seamless, weight-free training experience, redefining strength workouts on the go.
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
