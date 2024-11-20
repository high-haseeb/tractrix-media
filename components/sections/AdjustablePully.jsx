import React from 'react'
import useStateStore from "@/stores/stateStore";
import ButtonModal from '@/components/ui/ButtonModal';
import CardOption from '@/components/ui/CardOption';
import EquiCards from "@/components/ui/EquiCards"

const AdjustablePully = () => {
    const { utilityAccessories, activeMovementAccessories, addMovementAccessory, removeMovementAccessory } = useStateStore();


    const item = [
        {
            name: "Adjustable Pully",
            price: "$1,000",
            dis:"15lbs-45lbs Set of 2",
            img: "/img/pngtree-pulley-with-a-metal-finish-and-a-metal-wheel-image_2935895.jpg"
        }
    ]
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-2xl text-black  font-semibold capitalize'>Equipments</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                {/* {
                    utilityAccessories.map((accessory, idx) => <CardOption key={idx} {...accessory} horizontal/>)
                } */}
                <EquiCards item={item}/>
            </div>
            {/* <ButtonModal title={"feature details"} details={accessories.filter((accessory) => accessory.title === activeAccessories)} /> */}
        </div>
    )
}

export default AdjustablePully;


