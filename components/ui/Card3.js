import { useEffect, useState } from "react";
import Image from "next/image";
import useExtrasStore from "@/stores/ExtrasStore";
import useColorStore from '@/stores/ColorStore';
import MatColorOption from "@/components/ui/MatColorOption";


const Card3 = ({ price, name, details }) => {
    const [checked, setChecked] = useState(false);
    const { setMatPrice, barbellWeightPrice, setBarbelState, matPrice ,setMateState,MateState,setMateTexture} = useExtrasStore();
    const { activeMatColor, setActiveMatColor, woodColors } = useColorStore();

    useEffect(()=>{
        if(activeMatColor==="natural cork"){
            setMateTexture("/textures/wood/walnut/diff.jpg")
        }
        else{
            setMateTexture("/textures/wood/ash/diff.jpg")
        }
    },[activeMatColor])


    useEffect(() => {
        if (checked) {
            setMatPrice(1000);
            setMateState(true)
            console.log(MateState)
        } else {
            setMatPrice(0);
            setMateState(false)
            console.log(MateState)

        }
        // console.log(matPrice)
    }, [checked, setMatPrice,setMateState]);

    return (
        <div className="flex gap-3 lg:flex-row flex-col">

        
            <div className='flex items-center justify-center lg:hidden '>
                {
                    woodColors.map((color, idx) => <MatColorOption title={color.name} value={color.img} active={activeMatColor} setActive={setActiveMatColor} key={idx} />)
                }
            </div>

            <div className="flex flex-row items-center justify-around lg:w-auto w-full h-auto lg:p-6 p-2 rounded-[34px] border-2 border-black/20 relative lg:_gap-0 gap-3">
                <button
                    className="flex items-center justify-center bg-gray-300 rounded-xl w-8 h-8 left-3 top-1 relative lg:absolute "
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
                <div className="flex flex-col items-center justify-center text-center">
                    <span className='font-semibold text-sm'>${price}</span>
                    <span className='font-semibold text-sm'>{name}</span>
                    <span className='font-normal text-[14px]'>color:{activeMatColor}</span>
                    <span className='font-normal text-xs text-gray-500 whitespace-pre-line'>{details}</span>
                </div>
            </div>

            <div className=' items-center justify-center lg:flex hidden'>
                {
                    woodColors.map((color, idx) => <MatColorOption title={color.name} value={color.img} active={activeMatColor} setActive={setActiveMatColor} key={idx} />)
                }
            </div>


        </div>


    );
};

export default Card3;
