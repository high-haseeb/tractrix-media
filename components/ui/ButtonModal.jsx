'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ButtonModal = ({ title, details }) => {
    const [oriant, setOriant] = useState(["lg:flex-row", "w-1/2", "h-full"]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (
            details[0]?.title === "Adjustable Weights" ||
            details[0]?.title === "Adjustable Pulley" ||
            details[0]?.title === "Barbell and Weights"
        ) {
            setOriant(["lg:flex-row flex-col", "w-full", "h-full"]);
            if (details[0]?.title === "Adjustable Pulley") {
                setOriant(["lg:flex-row flex-col", "w-full", "h-1/2"]);
            }
        }
    }, [details]);

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
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50 p-4">
                    <div
                        className={`bg-[#E8E8E8] text-[#707070] lg:w-auto w-full h-1/2 rounded-3xl flex ${oriant[0]} pointer-events-auto relative`}
                    >
                        <div className={`lg:w-1/2 lg:h-full ${oriant[2]} ${oriant[1]}`}>
                            <Image
                                src={`/img/${details[0]?.img}`}
                                className="w-full h-full object-cover rounded-t-3xl"
                                alt="image"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="h-full lg:py-4 p-3 flex flex-col justify-between">
                            {details.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-start lg:gap-2 gap-1"
                                >
                                    <div className="font-bold lg:text-3xl text-lg text-black capitalize">
                                        {item.title}
                                    </div>
                                    <div className="font-semibold lg:text-xl text-base text-black/80 capitalize">
                                        {item.price}$
                                    </div>
                                    <div className="font-normal lg:text-lg text-xs text-black/80">
                                        {item.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Image
                            src="/icons/close.svg"
                            width={50}
                            height={50}
                            alt="close"
                            className="cursor-pointer absolute top-4 right-4 w-6 h-6 lg:w-10 lg:h-10"
                            onClick={() => setModalOpen(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonModal;
