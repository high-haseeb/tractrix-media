'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ButtonModal = ({ title,cardData,left}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const cardWidth = 45;
    const cardSpacing = 10;
    
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <button
                    className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]"
                    onClick={() => setModalOpen(true)}
                >
                    {title}
                </button>
            </div>

            {modalOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="w-screen h-screen relative flex justify-center items-center z-[49]">
                        
                        <motion.div
                            className="flex gap-10 transition-all"
                            animate={{ x: `calc(50vw - ${(activeCard + 0.3) * (cardWidth + cardSpacing)}vw + ${cardWidth / 2}vw)` }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            {cardData.map((card, index) => (
                                <div 
                                    key={index} 
                                    className={`w-[45vw] h-[50vh] bg-white rounded-xl flex relative cursor-pointer shadow-lg transition-all duration-300 ease-in-out ${activeCard === index ? "scale-105 opacity-100" : "scale-100 opacity-80"}`}
                                    onClick={() => setActiveCard(index)}
                                >
                                    {/* Close Button Inside Each Card */}
                                    <button 
                                        className="absolute top-3 right-3 text-black rounded-full w-10 h-10 flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalOpen(false);
                                        }}
                                    >
                                        <Image src={'/icons/close.svg'} width={200} height={200} className='w-10 h-10 object-cover'/>
                                    </button>

                                    <div className='w-1/2 h-full p-10'>
                                        <Image src={card.image} width={600} height={600} className='w-full h-full object-cover' alt={card.title} />
                                    </div>

                                    <div className='w-1/2 h-full flex flex-col p-10 gap-2'>
                                        <div className='font-bold text-2xl'>{card.title}</div>
                                        <div className='font-semibold text-xl'>{card.subtitle}</div>
                                        <div className=' text-sm font-light'>{card.description}</div>
                                    </div>

                                    {/*Dots */}
                                    <div className={`absolute ${left ===true ?  "bottom-3 left-52":"bottom-5 left-1/2" } transform -translate-x-1/2 flex gap-3`}>
                                        {cardData.map((_, dotIndex) => (
                                            <div 
                                                key={dotIndex}
                                                className={`w-5 h-5 rounded-full border border-black cursor-pointer transition-all ${activeCard === dotIndex ? "bg-white scale-125" : "bg-gray-300"}`}
                                                onClick={(e) => { 
                                                    e.stopPropagation(); 
                                                    setActiveCard(dotIndex); 
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonModal;
