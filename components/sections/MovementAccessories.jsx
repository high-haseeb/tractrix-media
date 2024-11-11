import React from 'react'
import { useMovementStore } from "@/stores/stateStore";
import ButtonModal from '@/components/ui/ButtonModal';
import CardOption from '@/components/ui/CardOption';

const MovementAccessories = () => {
    const { movementArray, addMovement, removeMovement, activeMovement } = useMovementStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-3xl text-black font-semibold capitalize'>Accessories</div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                {
                    movementArray.map((accessory, idx) => <CardOption key={idx} {...accessory} onCheck={addMovement} onUncheck={removeMovement} 
                        checked={activeMovement.has(accessory.title)}/>)
                }
            </div>
            <ButtonModal title={"feature details"} details={movementArray} />
        </div>
    )
}

export default MovementAccessories;
