import React, { useState } from 'react'
import Card3 from '@/components/ui/Card3';
import Slider3 from '@/components/ui/Slider3';
import Image from 'next/image';
import useColorStore from '@/stores/ColorStore';



const YogaMats = () => {
    const {woodColors} = useColorStore();
    const details=[
    { title: "Round Station Mat", price: "1,000", detail: "4.5 diameter"},
    ]
    return (
        <div className='flex flex-col gap-8 mt-2 items-center'>
            <div className='text-3xl text-black font-semibold capitalize'>Equipment</div>
        <div className="w-[80%] lg:w-full">
            <Slider3/>            
        </div>
            <Card3 price={"1,000"} name={"Round Station Mat"} details={"4.5 diameter"} />
            <ButtonModal items={woodColors} details={details[0]} />
        </div>
    )
}

export default YogaMats;



const ButtonModal = ({ items }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [inter,setInter]=useState('/img/white-wood.jpg')
    const [pressed,setPressed]=useState(false)

    const ImageHandler=()=>{
        if(!pressed){
            setInter('/img/dark-wood.jpg')
            setPressed(true)
        }
        else{
            setInter('/img/white-wood.jpg')
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
                <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-black/40 flex items-center justify-center z-[9999]'>
                    <div className='flex w-[50vw] h-[50vh] rounded-xl bg-white relative'>


                        
                        <Image src={'/icons/close.svg'}width={200} height={200} className='w-7 h-7 object-cover absolute right-5 top-5 cursor-pointer' onClick={CloseDetails}/>
                        <div className='w-1/2 h-full p-12 relative'>
                            {/* wood name */}
                            <div className='absolute flex bottom-4 left-1/2 -translate-x-1/2 justify-center items-center'>
                                <div className='font-extrabold'>Color:</div>
                                {!pressed && <div>Natural Cork</div>}
                                {pressed && <div>Choclate cork</div>}

                            </div>



                            {!pressed && <div className='w-12 h-12 bg-black/80 right-16 top-1/2 -translate-y-1/2 rounded-full absolute flex justify-center items-center cursor-pointer' onClick={ImageHandler}>
                                <Image src={'/icons/right.svg'} width={200} height={200} className='w-7 h-7 object-cover'/>
                            </div>}
                            {pressed && <div className='w-12 h-12 bg-black/80 left-16 top-1/2 -translate-y-1/2 rounded-full absolute flex justify-center items-center cursor-pointer' onClick={ImageHandler}>
                                <Image src={'/icons/left.svg'} width={200} height={200} className='w-7 h-7 object-cover'/>
                            </div>}
                            <Image src={inter} alt='color' width={400} height={200} className='w-full h-full object-cover rounded-full' /> 
                        </div>
                        <div className='flex flex-col w-1/2 h-full p-10 gap-3'>
                            <div className='font-bold text-2xl'>
                                Patent-Pending Round Outdoor Station Mats: Luxury, Durability & Performance
                            </div>
                            <div className='text-base'>
                                Exclusively designed by WellBuilt, our patent-pending round station mats offer a luxurious feel with superior support, hygiene, and durability. Made with a thick, absorbent natural rubber-like closed-cell material, they absorb impact while the patent-pending Engineered Cork Fabric top layer provides a non-slip, antimicrobial surface with a premium texture.
                                With a 4-ft diameter, these mats ensure a solid grip, heat resistance in the sun, and easy cleaning. Plus, the Engineered Cork Fabric comes in two colors & can be matched exactly to the trailer’s interior, creating a cohesive and stylish aesthetic.
                                Each set includes four mats for $1,000, delivering both style and functionality for an elevated training experience.
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}














// const ButtonModal = ({ items,details }) => {
//     const [modalOpen, setModalOpen] = useState(false);
//     return (
//         <>
//             <div className='w-full flex items-center justify-center '>
//                 <button className="rounded-full font-lg font-semibold text-center capitalize py-1 w-1/2 bg-[#E8E8E8] text-[#707070]" onClick={() => setModalOpen(true)}>
//                     Feature Detials
//                 </button>
//             </div>
//             {modalOpen &&
//                 <div className='fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none bg-black/40 flex items-center justify-center z-50'>
//                     <div className="bg-[#E8E8E8] text-[#707070] w-auto h-auto rounded-3xl flex flex-row pointer-events-auto relative" >
//                         <div className='py-8 px-6 flex lg:gap-6 gap-2 justify-between'>
//                             {
//                                 items.map(item => (
//                                     <div className='flex flex-col items-center justify-center'>
//                                         <div className='lg:w-40 w-24 h-24 lg:h-40'>
//                                             <Image src={item.img} className='w-full h-full object-cover rounded-full' alt='image' width={200} height={200} />
//                                         </div>
//                                         <div className='font-semibold lg:text-3xl text-lg text-black capitalize'>{item.name}</div>
//                         <div className='flex flex-col items-center'>
//                             <div className='text-sm '>Round Station Mat</div>
//                             <div className='text-sm '>${details.price}</div>                            
//                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                         <Image src={'/icons/close.svg'} width={50} height={50} alt='close' className='cursor-pointer absolute top-4 right-4 w-6 h-6 lg:w-10 lg:h-10 ' onClick={() => setModalOpen(false)} />
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }