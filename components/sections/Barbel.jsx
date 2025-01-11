import React from 'react'
import Card2 from '@/components/ui/Card2';
import Slider2 from '@/components/ui/Slider2';
import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const Barbell = () => {
    const details=[
        { title: "Barbell and Weights", price: "500", detail: "10bs-45lbs \n (Set of 2) +1 Barbell", img: "barbell.webp" },
        ]
    return (
        <div className='flex flex-col gap-6 mt-6 items-center'>
        <div className="w-[80%] lg:w-full">
            <Slider2/>
        </div>
            <Card2 imgSrc={() => <Image src={"/img/barbell.webp"} width={200} height={200} alt='adjustable_pulley' className='w-24 h-auto'/>} price={"500"} name={"Barbell and Weights"} details={"10bs-45lbs \n (Set of 2) +1 Barbell"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    )
}

export default Barbell;
