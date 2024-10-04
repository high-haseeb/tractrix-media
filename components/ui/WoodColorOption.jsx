import Image from "next/image";
import React from "react";

const WoodColorOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-40 h-40 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => { setActive(title) }}
    >
        <div className='w-32 h-32 rounded-full shadow shadow-black/20' >
            <Image src={`/textures/wood/${value}/diff.jpg`} height={1024} width={1024} alt={title} className="w-32 h-32 rounded-full shadow shadow-black/20"/>
        </div>
    </div>
);

export default WoodColorOption;
