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
            <div className='flex items-center justify-center gap-4 '>
                {
                    movementArray.map(
                        (accessory, idx) =>
                            <CardOption key={idx} {...accessory} onCheck={addMovement} onUncheck={removeMovement} checked={activeMovement.has(accessory.title)} />
                    )
                }
            </div>
            <ButtonModal title={"feature details"} details={movementArray} cardData={cardData} />
        </div>
    )
}

export default MovementAccessories;

const cardData = [
    {
        title: "Manual Trailer Dolly",
        subtitle: "Compact and Versatile Trailer Movement",
        description: "Move your trailer with ease using the WellBuilt Manual Trailer Dolly. Featuring a sturdy dual-wheel system and ergonomic handle, this dolly provides maximum control and effortless maneuverability. Ideal for tight spaces and quick adjustments, it's the perfect manual solution for hassle-free trailer positioning. Manufactured by WellBuilt Trailers.",
        image: "/img/dolly.webp"
    },
    {
        title: "Electric Trailer Dolly",
        subtitle: "Effortless Trailer Positioning",
        description: "Experience effortless trailer movement with our Electric Trailer Dolly. Equipped with a powerful motor, this dolly allows precise control and smooth maneuverability, making trailer positioning a breeze. Designed and produced by EZ-Tow Systems.",
        image: "/img/valet.webp"
    },
    {
        title: "Heavy-Duty Trailer Dolly",
        subtitle: "Designed for Larger Loads",
        description: "Handle heavy-duty trailers with ease using our robust Heavy-Duty Trailer Dolly. Built with reinforced materials and advanced wheel technology, this dolly ensures maximum stability and strength. Manufactured by PowerHaul Industries.",
        image: "/img/jack.webp"
    }
];