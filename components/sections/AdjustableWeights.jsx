import React from 'react'
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const AdjustableWeights = () => {
    const details=[
    { title: "Adjustable Weights", price: "1,000", detail: "15lbs-45lbs \n Set of 4", img: "adjustable_weights.webp" },
    ]
    return (
        <div className='flex flex-col gap-6 mt-6 items-center'>
        <div className="w-[80%] lg:w-full">
            <Slider/>            
        </div>
            <Card imgSrc={() => <Image src={'/img/adjustable_weights.webp'} width={160} height={160} className="w-40 h-auto" />} price={"1,000"} name={"Adjustable Weights"} details={"15lbs-45lbs \n Set of 4"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    )
}

export default AdjustableWeights;


