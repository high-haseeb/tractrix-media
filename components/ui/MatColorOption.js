import Image from "next/image";
import React from "react";

const MatColorOption = ({ title, name, value, active, setActive }) => (
    <div
        className={`w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => { setActive(title) }}
    >
        <div className='w-24 h-24 rounded-full shadow shadow-black/20' >
            <Image src={value} height={1024} width={1024} alt={title} className="w-24 h-24 rounded-full shadow shadow-black/20"/>
        </div>
    </div>
);

export default MatColorOption;
