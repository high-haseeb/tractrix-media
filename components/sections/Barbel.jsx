
import React from 'react'
import useStateStore from "@/stores/stateStore";
import EquiCards from "@/components/ui/EquiCards"

function Barbel() {
  
    const { utilityAccessories, activeMovementAccessories, addMovementAccessory, removeMovementAccessory } = useStateStore();


    const item = [
        {
            name: "Barbell and Weights",
            price: "$500",
            dis:"10bs-45lbs (Set of 2) +1 Barbell",
            img: "/img/babel.png"
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

export default Barbel






