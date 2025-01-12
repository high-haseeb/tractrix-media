import Image from "next/image";
import useSectionsStore from "@/stores/SectionStore";
import useVariantStore from "@/stores/VariantStore";
import { useMovementStore } from "@/stores/stateStore";
import useExtrasStore from "@/stores/ExtrasStore";

const Footer = () => {
    let total = 0;
    const { nextSection, prevSection, isFirstSection, activeSectionIndex, sections } = useSectionsStore();
    const { variants, activeVariantName, activeFinanceOption } = useVariantStore();
    const { totalMovementPrice } = useMovementStore();
    const {
        totalpriceExtra,
        totalPriceWeight,
        activeWeights,
        pullyPrice,
        activePully,
        barbellWeightPrice,
        activeBarbell,
        activeMats,
        matPrice,
    } = useExtrasStore();
    
    const TextButton = ({ title, action }) => (
        <button
            className="bg-black text-white px-12 font-bold text-sm rounded-full py-1 shadow shadow-black/40"
            onClick={action}
        >
            {title}
        </button>
    );

    const currentVariant = variants.find((variant) => variant.name === activeVariantName);
    const currentVariantValue = currentVariant
        ? Number(currentVariant.value[activeFinanceOption].replace(/,/g, ""))
        : 0;

    if (activeFinanceOption === "cash") {
        total =
            currentVariantValue +
            totalMovementPrice +
            totalpriceExtra +
            totalPriceWeight * activeWeights +
            pullyPrice * activePully +
            barbellWeightPrice * activeBarbell + 
            matPrice * activeMats;
            
    } else {
        total = Math.round(
            currentVariantValue +
            totalMovementPrice / 72 +
            totalpriceExtra / 72 +
            (totalPriceWeight * activeWeights) / 72 +
            (pullyPrice * activePully) / 72 +
            (barbellWeightPrice * activeBarbell) / 72 +
            (matPrice * activeMats) / 72
        );
    }

    return (
        <div
            className={`w-full lg:w-[80%] px-6 py-4 flex justify-between items-center bg-white z-50 ${
                activeSectionIndex >= sections.length - 1 ? "" : "shadow shadow-black/80"
            }`}
        >
            {activeSectionIndex <= 7 ? (
                <>
                    <div>
                        <div className="text-xl lg:text-2xl font-bold">
                            ${total.toLocaleString()}
                            <span className="text-xl text-black/80 lg:text-2xl">
                                {activeFinanceOption === "finance" ? " /mo" : ""}
                            </span>
                        </div>
                        <div className="text-light text-black/50 text-xs lg:text-base capitalize">
                            Sales tax not included
                        </div>
                    </div>
                    {isFirstSection() ? (
                        <TextButton title="Next" action={nextSection} />
                    ) : (
                        <div className="flex gap-4">
                            <button
                                className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                                onClick={prevSection}
                            >
                                <Image
                                    src={"/icons/left.svg"}
                                    width={30}
                                    height={30}
                                    alt="navigation icon"
                                    className="translate-x-1"
                                />
                            </button>
                            <button
                                className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                                onClick={nextSection}
                            >
                                <Image
                                    src={"/icons/right.svg"}
                                    width={30}
                                    height={30}
                                    alt="navigation icon"
                                />
                            </button>
                        </div>
                    )}
                </>
            ) : activeSectionIndex === 8 ? (
                <div className="flex items-center gap-4 w-full justify-between">
                    <button
                        className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                        onClick={prevSection}
                    >
                        <Image
                            src={"/icons/left.svg"}
                            width={30}
                            height={30}
                            alt="navigation icon"
                            className="translate-x-1"
                        />
                    </button>
                    <button
                        className="bg-black text-white px-8 py-3 font-bold text-sm rounded-full shadow shadow-black/40"
                        onClick={nextSection}
                    >
                        Register Now
                    </button>
                </div>
            ) : activeSectionIndex === 9 ? (
                <div className="flex items-center gap-4 w-full justify-between">
                    <button
                        className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                        onClick={prevSection}
                    >
                        <Image
                            src={"/icons/left.svg"}
                            width={30}
                            height={30}
                            alt="navigation icon"
                            className="translate-x-1"
                        />
                    </button>
                    <button
                        className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                        onClick={nextSection}
                    >
                        <Image
                            src={"/icons/right.svg"}
                            width={30}
                            height={30}
                            alt="navigation icon"
                        />
                    </button>
                </div>
            ) : activeSectionIndex === 10 ? (
                <div className="flex items-center gap-4 w-full justify-between">
                    <button
                        className="bg-black font-bold rounded-full shadow shadow-black/40 flex items-center justify-center p-2"
                        onClick={prevSection}
                    >
                        <Image
                            src={"/icons/left.svg"}
                            width={30}
                            height={30}
                            alt="navigation icon"
                            className="translate-x-1"
                        />
                    </button>
                    <button
                        className="bg-black text-white px-8 py-3 font-bold text-sm rounded-full shadow shadow-black/40"
                        onClick={nextSection}
                    >
                        Place Your Reservation
                    </button>
                </div>
            ):(<></>)}
        </div>
    );
};

export default Footer;
