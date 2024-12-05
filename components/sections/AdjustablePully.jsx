import React from 'react'
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const AdjustablePulley = () => {
    return (
        <div className='flex flex-col gap-6 mt-6'>
            <Slider />
            <Card imgSrc={() => <Image src={"/img/adjustable_pulley.webp"} width={200} height={200} alt='adjustable_pulley' className='rounded-full w-24 h-auto'/>} price={"1,000"} name={"Adjustable Pulley"} details={"15lbs-45lbs \n Set of 2"} />
            <ButtonModal title={'Feature Details'} details={''} />
        </div>
    )
}

export default AdjustablePulley;

