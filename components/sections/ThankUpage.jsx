import Image from 'next/image';
import React from 'react';

function ThankUpage() {
    return (
        <div className='bg-black flex flex-col justify-between items-center px-6 lg:px-20 lg:pt-12 pt-8 w-full h-screen'>
            <div className='flex flex-col items-center text-white'>
                <div className='mb-8'>
                    <Image src="/logo-symbol.webp" width={1080} height={1080} className='w-32 h-32 object-cover' alt="Logo" />
                </div>
                
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-semibold'>Thank you for your purchase!</h1>
                    <p className='text-2xl'>We will contact you shortly</p>
                </div>
                
                <button className='w-52 py-3 border border-white rounded-full text-white text-base mt-20'>
                    Return to Home Page
                </button>
            </div>
            
            <div className='flex gap-4 mb-14'>
                <Image src="/icons/social/ig.svg" className=' w-14 h-14 object-cover' width={700} height={700} alt="Instagram" />
                <Image src="/icons/social/tiktok.svg" className='w-14 h-14 object-cover' width={700} height={700} alt="TikTok" />
                <Image src="/icons/social/twitter-x.svg" className='w-14 h-14 object-cover' width={700} height={700} alt="Twitter X" />
            </div>
        </div>
    );
}

export default ThankUpage;
