import Image from "next/image";
import { useSectionsStore } from "@/stores/stateStore";
import useVariantStore from "@/stores/VariantStore";
import useCheckMobile from "../utils/isMobile";

const Footer = () => {
    const { nextSection, prevSection, nextSectionMobile, prevSectionMobile, isFirstSection } = useSectionsStore();
    const { variants, activeVariantName, activeFinanceOption } = useVariantStore();
    const isMobile = useCheckMobile();

    const TextButton = ({ title, action }) => (
        <button className="bg-black text-white px-12 font-bold rounded-full py-1 shadow shadow-black/40" onClick={action}>
            {title}
        </button>
    );

    const ImageButton = ({ imgUrl, action }) => (
        <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={action}>
            <Image src={imgUrl} width={30} height={30} alt="navigation icon" />
        </button>
    );

    const currentVariant = variants.find((variant) => variant.name === activeVariantName);

    return (
        <div className="w-[80%] shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white z-50">
            <div>
                <div className='text-2xl font-bold'>${currentVariant ? currentVariant.value[activeFinanceOption] : "please choose an option"}</div>
                <div className='text-light text-black/50 text-base capitalize'>Sales tax not included</div>
            </div>
            {isFirstSection() ? (
                <TextButton title="Next" action={isMobile ? nextSectionMobile : nextSection} />
            ) : (
                <div className="flex gap-4">
                    <ImageButton imgUrl="/icons/left.svg" action={isMobile ? prevSectionMobile : prevSection} />
                    <ImageButton imgUrl="/icons/right.svg" action={isMobile ? nextSectionMobile : nextSection} />
                </div>
            )}
        </div>
    );
}
export default Footer;
