import React from "react";

const Stat = ({ title, value, unit }) => (
    <div className="flex flex-col items-center justify-center">
        <div className='text-xl lg:text-3xl font-semibold leading-[-1]'> {value} <span className='lg:text-xl text-base'>{unit}</span> </div>
        <div className='capitalize text-sm'>{title}</div>
    </div>
)

export default Stat;
