import React from "react";

const ColorOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition  ${active === title ? "border border-black" : "border-none"}`}
        onClick={() => setActive(title)}
    >
        <div className='w-10 h-10 rounded-full shadow shadow-black/20' style={{ backgroundColor: value }} ></div>
    </div>
);

export default ColorOption;
