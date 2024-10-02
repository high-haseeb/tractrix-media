import React from "react";

const SliderOption = ({ activeOption, setActiveOption }) => (
    <div className='flex flex-col w-full gap-2 relative'>
        <div className='flex text-lg cursor-pointer'>
            <div
                className={`w-1/2 text-center ${activeOption === "cash" ? "font-semibold" : "font-light"}`}
                onClick={() => setActiveOption("cash")}>
                Cash
            </div>
            <div
                className={`w-1/2 text-center ${activeOption === "finance" ? "font-semibold" : "font-light"}`}
                onClick={() => setActiveOption("finance")} >
                Financing
            </div>
        </div>
        <div>
            <div className={`w-1/2 h-1 rounded-full bg-black ${activeOption === "cash" ? "translate-x-0" : "translate-x-full"} transition-transform`}></div>
            <div className='bg-black/20 h-1 w-full absolute bottom-0 rounded-full'></div>
        </div>
    </div>
)

export default SliderOption;
