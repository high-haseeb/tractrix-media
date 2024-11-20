import React from 'react'
import { useState, useRef } from 'react';


function Slider() {
  
    const [position, setPosition] = useState(0);
    const [range, setRange] = useState(1);
    const sliderRef = useRef(null);

    const handleDrag = (e) => {
        if (sliderRef.current) {
            const sliderRect = sliderRef.current.getBoundingClientRect();
            let newPosition = e.clientX - sliderRect.left;

            // Constrain the position within slider width
            newPosition = Math.max(0, Math.min(newPosition, sliderRect.width));

            // Set range based on thresholds
            if (newPosition >= 0 && newPosition < 0.25 * sliderRect.width) {
                setRange(1);
            } else if (newPosition >= 0.25 * sliderRect.width && newPosition < 0.5 * sliderRect.width) {
                setRange(2);
            } else if (newPosition >= 0.5 * sliderRect.width && newPosition < 0.75 * sliderRect.width) {
                setRange(3);
            } else if (newPosition >= 0.75 * sliderRect.width && newPosition < sliderRect.width) {
                setRange(4);
            } else if (newPosition >= sliderRect.width) {
                setRange(5);
            }

            setPosition(newPosition);
        }
    };

    const handleMouseDown = () => {
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className='w-full p-3 h-12 flex items-center justify-center'>
            <div className='w-full h-[4px] bg-gray-300 relative' ref={sliderRef}>
                <div className='h-[4px] bg-blue-400 absolute' style={{ width: `${position}px` }}></div><div
                    className=' select-none w-[35px] h-[35px] bg-blue-400 rounded-full absolute top-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer text-white'
                    style={{ left: `${position}px` }}
                    onMouseDown={handleMouseDown}
                >   x
                    <span className='text-xl font-bold'>{range}</span>
                </div>
            </div>
        </div>
    );
}

export default Slider
