import { useState } from 'react'
import Image from 'next/image';
import useExtrasStore from "@/stores/ExtrasStore";

const MovementAccessories = () => {
    // const { utilityAccessories, activeMovementAccessories, addMovementAccessory, removeMovementAccessory } = useStateStore();
    const { extraItems, activeExtraItems, addExtraItem, removeExtraItem } = useExtrasStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-3xl text-black font-semibold capitalize'>Accessories</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                {
                    extraItems.map(
                        (item, idx) =>
                            <CardOption key={idx} {...item} onCheck={addExtraItem} onUncheck={removeExtraItem} checked={activeExtraItems.has(item.title)} />
                    )
                }
            </div>
        </div>
    )
}
const CardOption = ({ title, price, detail, onCheck, onUncheck, checked }) => {
    const [selected, setSelected] = useState(false);
    return (
        <div className='flex w-full border border-[#707070] rounded-3xl p-4 items-center justify-between relative cursor-pointer'
            onClick={
                () => {
                    setSelected(s => !s);
                    !selected ? onCheck(title) : onUncheck(title);
                }}
        >
            <div className='flex gap-4'>
                <div className='bg-black/20 rounded-xl w-8 h-8 flex items-center justify-center'>
                    {selected && <Image src={'icons/tick.svg'} width={40} height={40} alt='tick' />}
                </div>
                <div className='flex flex-col'>
                    <div className='text-sm capitalize text-black/90'>{title}</div>
                    <div className='text-[#707070] text-xs font-normal'>{detail}</div>
                </div>
            </div>
            <div className='font-semibold text-lg text-[#707070]'>${price}</div>
        </div >
    )
}

export default MovementAccessories;
