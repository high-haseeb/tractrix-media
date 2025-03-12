"use client"
// import Card2 from '@/components/ui/Card2';
// import Slider2 from '@/components/ui/Slider2';
// import ButtonModal from '../ui/ButtonModal';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from "react";
import useExtrasStore from "@/stores/ExtrasStore";

const HeartRate = () => {
    const details=[
        { title: "Barbell and Weights", price: "500", detail: "10bs-45lbs \n (Set of 2) +1 Barbell", img: "barbell.webp" },
        ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipment</div>
        <div className="w-[80%] lg:w-full">
            <Slider2/>
        </div>
            <Card2 imgSrc={() => <Image src={"/img/puls.jpg "} width={200} height={200} alt='adjustable_pulley' className='w-24 h-auto'/>} price={"400"} name={"Heart-Rate Monitor"} details={"Pulse Tracker\n Set of 4"} />
            <ButtonModal title={'Feature Details'} details={details} />
        </div>
    )
}

export default HeartRate;





function Slider2({ max = 5 }) {
    const sliderRef = useRef(null);
    const { MonitorPrice, setActiveMonitor, activeMonitor } = useExtrasStore();
    const [value, setValue] = useState(activeMonitor);

    useEffect(() => {
        if (MonitorPrice > 0) {
            setValue(1); 
        } else {
            setValue(0); 
        }
    }, [MonitorPrice]);

    useEffect(() => {
        if (value >= 1 && value !== activeMonitor) {
            setActiveMonitor(value); 
        }
    }, [value, activeMonitor, setActiveMonitor]);

    useEffect(()=>{
        if (activeMonitor) {
            setValue(activeMonitor)
        }
    },[activeMonitor])

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







const Card2 = ({ imgSrc, price, name, details }) => {
    const [checked, setChecked] = useState(false);
    const { setActiveMonitorPrice,MonitorPrice,setMonitorState,MonitorState,activeMonitor} = useExtrasStore();

    useEffect(() => {
        if (checked) {
            setActiveMonitorPrice(400); 
            setMonitorState(true);
            // console.log(MonitorPrice)
            // console.log(activeMonitor)
            
        } else {
            setActiveMonitorPrice(0);
            setMonitorState(false);
            // console.log(MonitorPrice)
            // console.log(activeMonitor)

        }
    }, [checked, MonitorPrice]);

    return (
        <div className="flex flex-row items-center justify-around w-full h-auto p-4 rounded-[34px] border-2 border-black/20">
            <button
                className="flex items-center justify-center bg-gray-300 rounded-2xl w-10 h-10"
                onClick={() => setChecked((state) => !state)} 
            >
                <Image
                    src={'/icons/tick.svg'}
                    width={40}
                    height={40}
                    alt="tick icon"
                    className={`${checked ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
                />
            </button>
            {imgSrc()}
            <div className="flex flex-col items-center justify-center text-center">
                <span className='font-semibold text-base'>${price}</span>
                <span className='font-semibold text-base'>{name}</span>
                <span className='font-normal text-sm text-gray-500 whitespace-pre-line'>{details}</span>
            </div>
        </div>
    );
};






const ButtonModal = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const CloseDetails=()=>{
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
                    Feature Detials
                </button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black/40 flex items-center justify-center z-[99]'>
                    <div className='flex lg:flex-row flex-col lg:w-[50vw] lg:h-[50vh] w-[80vw] h-[80vh] rounded-xl bg-white relative'>
                        <Image src={'/icons/close.svg'}width={200} height={200} className='w-7 h-7 object-cover absolute right-5 top-5 cursor-pointer z-[100]' onClick={CloseDetails}/>
                        <div className='lg:w-1/2 w-full h-full p-5 relative'>
                            <Image src={'/img/puls.jpg'} alt='color' width={400} height={200} className='w-full h-full object-cover' /> 
                        </div>
                        <div className='flex flex-col lg:w-1/2 w-full h-full lg:p-5 p-3 gap-3'>
                            <div className='font-bold lg:text-3xl text-xl'>
                                {/* Patent-Pending Adjustable Weight: Exclusive to WellBuilt */} 
                                {/* Adjustable Weightless Pulley Machine: Innovative Resistance Training */}
                                {/* Barbell with Weights: Full-Range Strength Training Anywhere */}
                                Garmin Heart Rate Monitors & Receivers: Real-Time Performance Tracking

                            </div>
                            <div className='lg:overflow-hidden h-full overflow-y-scroll'>
                            <div className='lg:text-base text-xs lg:h-full h-[25vh]'>
                                To enhance training and performance analysis, we offer Garmin heart rate monitors and receivers, designed to track real-time heart rate data and sync seamlessly with the leaderboard system. These monitors can be comfortably worn on the wrist or arm, providing accurate insights into each participant’s workout intensity. The system ensures precise performance tracking, helping users optimize their training and reach their fitness goals. Each set includes four monitors for $400, making it an essential tool for those looking to elevate their workouts with professional-grade monitoring and data integration.                               
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
