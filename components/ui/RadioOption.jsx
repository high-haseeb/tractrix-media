import React from "react";

const RadioOption = ({ title, value, active, setActive }) => (
    <div
        className={`w-full rounded-full cursor-pointer transition flex items-center justify-between px-8 py-3 border border-black ${active === title ? "bg-black/10 text-black" : "bg-none text-black/80 border-black/50 "}`}
        onClick={() => setActive(title)}
    >
        <div className={`capitalize ${active === title ? "font-semibold" : "font-light"} `}>{title}</div>
        <div className={`${active === title ? "font-semibold" : "font-light"}`}>${value}</div>
    </div>
)

export default RadioOption;
