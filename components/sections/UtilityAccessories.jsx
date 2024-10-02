import React from 'react'
import useStateStore from "@/stores/stateStore";
import ButtonModal from '@/components/ui/ButtonModal';
import CardOption from '@/components/ui/CardOption';

const MovementAccessories = () => {
    const { utilityAccessories, activeMovementAccessories, addMovementAccessory, removeMovementAccessory } = useStateStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-3xl text-black font-semibold capitalize'>Accessories</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                {
                    utilityAccessories.map((accessory, idx) => <CardOption key={idx} {...accessory} horizontal/>)
                }
            </div>
            {/* <ButtonModal title={"feature details"} details={accessories.filter((accessory) => accessory.title === activeAccessories)} /> */}
        </div>
    )
}

export default MovementAccessories;
