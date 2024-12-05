"use client";
import { useState } from "react";
import Image from "next/image";

const Card = ({ imgSrc, price, name, details }) => {
    const [checked, setChecked] = useState(false);
    return(
        <div className="flex flex-row items-center justify-around w-full h-auto p-4 rounded-[34px] border-2 border-black/20">
            <button className="flex items-center justify-center bg-gray-300 rounded-2xl w-10 h-10" onClick={() => setChecked(state => !state)}>
                <Image src={'/icons/tick.svg'} width={40} height={40} alt="tick icon" className={`${checked ? "opacity-100" : "opacity-0"} transition-opacity duration-100`} />
            </button>
            {imgSrc()}
            <div className="flex flex-col items-center justify-center text-center">
                <span className='font-semibold text-base'>${price}</span>
                <span className='font-semibold text-base'>{name}</span>
                <span className='font-normal text-sm text-gray-500 whitespace-pre-line'>{details}</span>
            </div>
        </div>
    )
}

export default Card;
