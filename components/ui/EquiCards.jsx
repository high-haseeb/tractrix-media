import React from 'react'
import Slider from "@/components/ui/Slider"
import AdjustableCard from "@/components/ui/AdjustableCard"
import EqButtonModel from "@/components/ui/EqButtonModel"



function EquiCards({item}) {
    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <Slider/>
            <AdjustableCard item={item} />
            <EqButtonModel item={item} />
        </div>
    )
}

export default EquiCards






