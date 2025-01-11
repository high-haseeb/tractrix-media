import Image from 'next/image';
import React from 'react';
import useSectionsStore from "@/stores/SectionStore"


function ThankUpage() {
    const {setActiveSectionIndex}=useSectionsStore();
    return (
        <div className='bg-black flex flex-col justify-between items-center px-6 lg:px-20 lg:pt-12 pt-8 w-full h-screen'>
            <div className='flex flex-col items-center text-white'>
                <div className='lg:mb-8 mb-2'>
                    <Image src="/logo-symbol.webp" width={1080} height={1080} className='lg:w-32 lg:h-32 w-24 h-24 object-cover' alt="Logo" />
                </div>
                
                <div className='text-center lg:mb-6 mb-2'>
                    <h1 className='lg:text-3xl text-lg font-semibold'>Thank you for your purchase!</h1>
                    <p className='lg:text-2xl text-base'>We will contact you shortly</p>
                </div>
                
                <button className='lg:w-52 w-40 py-3 border border-white rounded-full text-white lg:text-base text-sm lg:mt-20 mt-5' onClick={()=>setActiveSectionIndex(0)}>
                    Return to Home Page
                </button>
            </div>
            
            <div className='flex gap-4 lg:mb-14 mb-6'>
                <Image src="/icons/social/ig.svg" className=' lg:w-14 lg:h-14 w-8 h-8 object-cover' width={700} height={700} alt="Instagram" />
                <Image src="/icons/social/tiktok.svg" className='lg:w-14 lg:h-14 w-8 h-8 object-cover' width={700} height={700} alt="TikTok" />
                <Image src="/icons/social/twitter-x.svg" className='lg:w-14 lg:h-14 w-8 h-8 object-cover' width={700} height={700} alt="Twitter X" />
            </div>
        </div>
    );
}

export default ThankUpage;
