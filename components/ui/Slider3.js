import React, { useState, useRef, useEffect } from "react";
import useExtrasStore from "@/stores/ExtrasStore";

function Slider3({ max = 5 }) {
    const sliderRef = useRef(null);
    const { matPrice, setActiveMats, activeMats, } = useExtrasStore();
    const [value, setValue] = useState(activeMats);

    useEffect(() => {
        if (matPrice > 0) {
            setValue(1); 
        } else {
            setValue(0); 
        }
    }, [matPrice]);

    useEffect(() => {
        if (value >= 1 && value !== activeMats) {
            setActiveMats(value); 
        }
    }, [value, activeMats, setActiveMats]);

    useEffect(()=>{
        if (activeMats) {
            setValue(activeMats)
        }
    },[activeMats])

    const calculateValue = (clientX) => {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const sliderWidth = sliderRect.width;

        let newValue = Math.min(
            Math.max(0, clientX - sliderRect.left),
            sliderWidth
        );

        return Math.round((newValue / sliderWidth) * max);
    };

    const handleDrag = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const newValue = calculateValue(clientX);
        setValue(newValue);
    };

    const startDrag = (e) => {
        handleDrag(e);
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("touchmove", handleDrag);
        document.addEventListener("touchend", stopDrag);
    };

    const stopDrag = () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        document.removeEventListener("touchmove", handleDrag);
        document.removeEventListener("touchend", stopDrag);
    };

    return (
        <div
            className="bg-black/80 relative h-1 rounded-full isolate flex"
            ref={sliderRef}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
        >
            <input
                type="range"
                min={0}
                max={max}
                step={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full opacity-0 z-50 absolute top-1/2 -translate-y-1/2 left-0"
            />
            <div
                className="bg-[#008FF5] absolute top-0 left-0 h-1 rounded-full"
                style={{ width: `${(value / max) * 100}%` }}
            />
            <div
                className="w-8 h-8 rounded-full bg-[#008FF5] absolute top-1/2 -translate-y-1/2 flex items-center justify-center font-semibold text-white select-none -translate-x-1/2 cursor-pointer"
                style={{ left: `${(value / max) * 100}%` }}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
            >
                {value}x
            </div>
        </div>
    );
}

export default Slider3;
