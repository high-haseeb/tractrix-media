import React from "react";

const Stat = ({ title, value, unit }) => (
    <div className="flex flex-col items-center justify-center">
        <div className='text-3xl font-semibold leading-[-1]'> {value} <span className='text-xl'>{unit}</span> </div>
        <div className='capitalize text-lg'>{title}</div>
    </div>
)

export default Stat;
