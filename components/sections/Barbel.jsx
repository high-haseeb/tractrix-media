import React from 'react'
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';

const Barbell = () => {
    return (
        <div className='flex flex-col gap-6 mt-6'>
            <Slider max={2}/>
            <Card imgSrc={() => <Image src={"/img/barbell.webp"} width={200} height={200} alt='adjustable_pulley' className='w-24 h-auto'/>} price={"500"} name={"Barbell and Weights"} details={"10bs-45lbs \n (Set of 2) +1 Barbell"} />
            <ButtonModal title={'Feature Details'} details={''} />
        </div>
    )
}

export default Barbell;
