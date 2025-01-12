import React from 'react'
import Card1 from '@/components/ui/Card1';
import Slider1 from '@/components/ui/Slider1';
import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const AdjustablePulley = () => {
    const details=[
        { title: "Adjustable Pulley", price: "1,000", detail: "15lbs-45lbs \n Set of 2", img: "adjustable_pulley.webp" },
        ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipments</div>

        <div className="w-[80%] lg:w-full">
            <Slider1 />
</div>
            <Card1 imgSrc={() => <Image src={"/img/pully.webp"} width={200} height={200} alt='adjustable_pulley' className='rounded-full w-24 h-auto' />} price={"1,000"} name={"Adjustable Pulley"} details={"15lbs-45lbs \n Set of 2"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    );
}

export default AdjustablePulley;
