import React from 'react'
import { useState } from 'react';

function Slider({ max = 5 }) {

    const [value, setValue] = useState(0);
    const handleChange = (e) => setValue(e.target.value);

    return (
        <div className='w-full bg-black/80 relative h-1 rounded-full isolate'>
            <input type='range' min={0} max={max} step={1} className='w-full opacity-0 z-50 absolute top-1/2 -translate-y-1/2 left-0' onChange={handleChange} />
            <div className="bg-[#008FF5] absolute top-0 left-0 h-1 rounded-full" style={{ width: `${value / max * 100}%` }} />
            <div className='w-8 h-8 rounded-full bg-[#008FF5] absolute top-1/2 -translate-y-1/2 flex items-center justify-center font-semibold text-white select-none -translate-x-1/2' style={{ left: `${value / max * 100}%` }}>{value}x</div>
        </div>
    );
}

export default Slider
