import Image from "next/image";
import useSectionsStore from "@/stores/SectionStore";
import useVariantStore from "@/stores/VariantStore";

const Footer = () => {
    const { nextSection, prevSection, isFirstSection } = useSectionsStore();
    const { variants, activeVariantName, activeFinanceOption } = useVariantStore();

    const TextButton = ({ title, action }) => (
        <button className="bg-black text-white px-12 font-bold text-sm rounded-full py-1 shadow shadow-black/40" onClick={action}>
            {title}
        </button>
    );

    const currentVariant = variants.find((variant) => variant.name === activeVariantName);

    return (
        <div className="w-full lg:w-[80%] shadow shadow-black/80 px-6 py-4 flex justify-between items-center bg-white z-50">
            <div>
                <div className='text-xl lg:text-2xl font-bold'>${currentVariant.value[activeFinanceOption]}
                    <span className="text-xl text-black/80 lg:text-2xl">{activeFinanceOption === "finance" ? " /mo" : ""}</span>
                </div>
                <div className='text-light text-black/50 text-xs lg:text-base capitalize'>Sales tax not included</div>
            </div>
            {isFirstSection() ? (
                <TextButton title="Next" action={nextSection} />
            ) : (
                <div className="flex gap-4">
                    <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={prevSection}>
                        <Image src={"/icons/left.svg"} width={30} height={30} alt="navigation icon" className="translate-x-1" />
                    </button>
                    <button className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2" onClick={nextSection}>
                        <Image src={"/icons/right.svg"} width={30} height={30} alt="navigation icon" className="" />
                    </button>
                </div>
            )}
        </div>
    );
}
export default Footer;
