'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ButtonModal = ({ title, cardData, left }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTranslation = () => {
        if (isMobile) {
            const mobileWidths = [215, 47, 65];
            const cardWidth = mobileWidths[activeCard] || 40;
            return `calc(50vw - ${(activeCard + 0.3) * (cardWidth + 10)}vw + ${cardWidth / 2}vw)`;
        }
        return `calc(50vw - ${(activeCard + 0.3) * (45 + 10)}vw + ${45 / 2}vw)`;
    };

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
                <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 flex items-center justify-center z-[999] p-4">
                    <div className="w-screen h-screen relative flex justify-center items-center z-[49]">
                        <motion.div
                            className="flex gap-10 transition-all will-change-transform"
                            animate={{ x: getTranslation() }}
                            transition={{ type: "spring", stiffness: 100, mass: 0.5 }}
                            layout
                        >
                            {cardData.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className={`lg:w-[50vw] lg:h-[50vh] w-[80vw] h-[80vh] bg-white rounded-xl flex ${isMobile ? 'flex-col' : 'flex-row'} relative cursor-pointer shadow-lg will-change-transform`}
                                    onClick={() => setActiveCard(index)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.5,
                                        scale: activeCard === index ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    layout  
                                >
                                    {/* Close Button Inside Each Card */}
                                    <button
                                        className="absolute top-3 right-3 text-black rounded-full w-10 h-10 flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalOpen(false);
                                        }}
                                    >
                                        <Image src={'/icons/close.svg'} width={200} height={200} className='w-10 h-10 object-cover' />
                                    </button>

                                    <div className='lg:w-1/2 w-full lg:h-full h-2/4 lg:p-10 p-3'>
                                        <Image src={card.image} width={600} height={600} className='w-full h-full object-cover' alt={card.title} />
                                    </div>

                                    <div className='lg:w-1/2 w-full h-full flex flex-col lg:p-10 p-3 gap-2'>
                                        <div className='font-bold lg:text-2xl text-base'>{card.title}</div>
                                        <div className='font-semibold lg:text-xl text-sm'>{card.subtitle}</div>
                                        <div className='lg:text-sm text-xs font-light'>{card.description}</div>
                                    </div>

                                    {/* Dots */}
                                    <div className={`absolute ${left === true ? "bottom-3 left-52" : "bottom-3 left-1/2"} transform -translate-x-1/2 flex gap-3`}>
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonModal;
