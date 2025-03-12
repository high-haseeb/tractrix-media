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
                <div className='font-base text-sm lg:text-base capitalize'>Interior Color Options</div>
                <div className='font-semibold text-lg lg:text-xl capitalize w-full text-center text-black mt-2'>{activeWoodColor}</div>
            </div>
            <div className='flex items-center justify-center'>
                {
                    woodColors.map((color, idx) => <WoodColorOption title={color.name} value={color.img1} active={activeWoodColor} setActive={setActiveWoodColor} key={idx}/>)
                }
            </div>
            <ButtonModal items={woodColors} />
        </div>
    )
}



const ButtonModal = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [inter,setInter]=useState('/newimg/1.jpg')
    const [pressed,setPressed]=useState(false)

    const ImageHandler=()=>{
        if(!pressed){
            setInter('/newimg/2.jpg')
            setPressed(true)
        }
        else{
            setInter('/newimg/1.jpg')
            setPressed(false)
        }
    }

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
                    <div className='flex lg:flex-row flex-col lg:w-[50vw] w-[80vw] h-[80vh] lg:h-[50vh] rounded-xl bg-white relative'>
                        <Image src={'/icons/close.svg'}width={200} height={200} className='w-7 h-7 object-cover absolute right-5 top-5 cursor-pointer z-[100]' onClick={CloseDetails}/>
                        <div className='lg:w-1/2 w-full h-full p-5 relative'>
                            {!pressed && <div className='lg:w-12 lg:h-12 w-8 h-8 bg-black/80 right-10 top-1/2 -translate-y-1/2 rounded-full absolute flex justify-center items-center cursor-pointer' onClick={ImageHandler}>
                                <Image src={'/icons/right.svg'} width={200} height={200} className='lg:w-7 lg:h-7 w-5 h-5 object-cover'/>
                            </div>}
                            {pressed && <div className='lg:w-12 lg:h-12 w-8 h-8 bg-black/80 left-10 top-1/2 -translate-y-1/2 rounded-full absolute flex justify-center items-center cursor-pointer' onClick={ImageHandler}>
                                <Image src={'/icons/left.svg'} width={200} height={200} className='lg:w-7 lg:h-7 w-5 h-5 object-cover'/>
                            </div>}
                            <Image src={inter} alt='color' width={400} height={200} className='w-full h-full object-cover' /> 
                        </div>
                        <div className='flex flex-col lg:w-1/2 w-full h-full p-5 lg:gap-3'>
                            <div className='font-bold lg:text-3xl text-lg'>
                                Interior: Engineered Cork
                            </div>
                            <div className='lg:text-sm text-xs lg:overflow-hidden overflow-y-scroll'>
                                <div className='lg:h-full h-[25vh]'>
                                    Engineered Cork Fabric is the perfect blend of innovation, sustainability, and high-performance design, making it an ideal material for trailer interiors. Developed with the expertise of our team at WellBuilt, this patent-pending material is engineered for use on floors, ceilings, and cabinets, offering a sleek yet natural aesthetic while enhancing durability and functionality. Infused with antimicrobial coatings, it actively resists mold, bacteria, and odors, ensuring a cleaner and healthier living space.Its easy-to-maintain surface repels stains and requires minimal upkeep, making it perfect for life on the road. Beyond its practical benefits, Engineered Cork Fabric provides superior insulation for sound and temperature regulation, creating a comfortable and energy-efficient environment inside the trailer. Stylish, functional, and eco-friendly, this groundbreaking material transforms any trailer into a modern, high-tech living space—another innovation proudly brought to life by WellBuilt.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default InteriorColor;
