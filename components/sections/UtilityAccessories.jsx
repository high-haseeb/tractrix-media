import { useState } from 'react'
import Image from 'next/image';
import useExtrasStore from "@/stores/ExtrasStore";
import ButtonModal from '../ui/ButtonModal';

const MovementAccessories = () => {
    const { extraItems, activeExtraItems, addExtraItem, removeExtraItem } = useExtrasStore();


    const cardData = [
       
        {
            title: "Enhancing Comfort with Advanced Cooling Technology",
            subtitle: "Stay Cool in Any Condition",
            description: "The integrated misting system cools participants outside the trailer with a fine mist, positioned between the two awning doors. A built-in water supply ensures reliability, while portable fanned misters offer flexible, targeted cooling for workouts or activities, creating a refreshing environment in hot conditions.",
            image: "/acces/1.png"
        },
        {
            title: "Essential Stability for a Secure and Level Trailer",
            subtitle: "Reliable Trailer Stabilization",
            description: "A trailer stabilizer is a device that minimizes movement and sway in a parked trailer, ensuring stability and safety. One of the most effective types is the scissor jack, which extends from the trailer’s frame to the ground, providing firm support on various terrains. By preventing unwanted rocking and shifting, scissor jacks enhance comfort and security, making them essential for trailers used as living spaces or workstations.",
            image: "/acces/2.jpg"
        },
        {
            title: "Starlink Mini: Seamless Connectivity for Streaming and Downloads",
            subtitle: "Reliable Internet for Your Trailer",
            description: "Our trailers feature the Starlink Mini for reliable satellite internet. Professionally installed on the roof, it enables seamless streaming and real-time content access. While we provide the hardware, owners manage their Starlink service plan separately. This ensures uninterrupted connectivity wherever the trailer is stationed.",
            image: "/acces/3.jpg"
        }
    ];
    
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-3xl text-black font-semibold capitalize'>Accessories</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
                {
                    extraItems.map(
                        (item, idx) =>
                            <CardOption key={idx} {...item} onCheck={addExtraItem} onUncheck={removeExtraItem} checked={activeExtraItems.has(item.title)} />
                    )
                }
            </div>
            <ButtonModal title={"feature details"} cardData={cardData}/>
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
                    console.log(title,price)
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
        </div>
    )
}

export default MovementAccessories;
