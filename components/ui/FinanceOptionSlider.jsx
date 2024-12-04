import useVariantStore from '@/stores/VariantStore'

const FinanceOptionSlider = () => {
    const { activeFinanceOption, setActiveFinanceOption } = useVariantStore();

    const Option = ({ name }) => (
        <button className={`capitalize ${activeFinanceOption === name ? "font-semibold border-b-black" : "font-light border-b-gray-300"} w-1/2 border-b-2 pb-2 transition-colors`} onClick={() => setActiveFinanceOption(name)}>
            {name}
        </button>
    )
    return (
        <div className="flex w-full relative text-lg">
            <Option name="cash" />
            <Option name="finance" />
        </div>
    )
}

export default FinanceOptionSlider
