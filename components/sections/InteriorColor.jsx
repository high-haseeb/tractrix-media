import { useState } from 'react'
import Image from 'next/image';
import WoodColorOption from "@/components/ui/WoodColorOption";
import useColorStore from '@/stores/ColorStore';

const InteriorColor = () => {
    const { woodColors, activeWoodColor, setActiveWoodColor } = useColorStore();
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col items-center justify-center text-black/50'>
                <div className='font-light text-base lg:text-xl'>INCLUDED</div>
                <div className='font-base text-sm lg:text-base capitalize'>exterior color options</div>
                <div className='font-semibold text-lg lg:text-xl capitalize w-full text-center text-black mt-2'>{activeWoodColor}</div>
            </div>
            <div className='flex items-center justify-center'>
                {
                    woodColors.map((color, idx) => <WoodColorOption title={color.name} value={color.img} active={activeWoodColor} setActive={setActiveWoodColor} key={idx}/>)
                }
            </div>
            <ButtonModal items={woodColors} />
        </div>
    )
}



const ButtonModal = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='w-full flex items-center justify-center '>
                <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
                    Feature Detials
                </button>
            </div>
            {modalOpen &&
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50'>
                    <div className="bg-[#E8E8E8] text-[#707070] w-auto h-auto rounded-3xl flex flex-row pointer-events-auto relative" >
                        <div className='py-8 px-6 flex lg:gap-6 gap-2 justify-between'>
                            {
                                items.map(item => (
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='lg:w-40 w-24 h-24 lg:h-40'>
                                            <Image src={item.img} className='w-full h-full object-cover rounded-full' alt='image' width={200} height={200} />
                                        </div>
                                        <div className='font-bold lg:text-3xl text-lg text-black capitalize'>{item.name}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <Image src={'/icons/close.svg'} width={50} height={50} alt='close' className='cursor-pointer absolute top-4 right-4 w-6 h-6 lg:w-10 lg:h-10 ' onClick={() => setModalOpen(false)} />
                    </div>
                </div>
            }
        </>
    )
}

export default InteriorColor;
