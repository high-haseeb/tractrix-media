import React from 'react'
import useStateStore from '@/stores/stateStore';
import RadioOption from "@/components/ui/RadioOption";

const Variants = () => {
    const { variants, activeVariant, setActiveVariant } = useStateStore();
    return (
        <div className='w-full flex flex-col gap-4'>
            {
                variants.map((variantDetails, idx) => <RadioOption {...variantDetails} key={idx} active={activeVariant} setActive={setActiveVariant} />)
            }
        </div>
    )
}

export default Variants
