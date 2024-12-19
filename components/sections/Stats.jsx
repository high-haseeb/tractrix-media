import useVariantStore from '@/stores/VariantStore';

const Stats = () => {
    const { activeVariantName, variants } = useVariantStore();
    const stats = variants.filter((variant) => variant.name == activeVariantName)[0].stats;

    return (
        <div className="flex justify-between w-full transition-all">
            <Stat title={'Operating'} value={stats.operatingHours} unit={'hrs'} />
            <Stat title={'Solar Panels'} value={stats.solarCapacity} unit={'W'} />
            <Stat title={'Battery Capacity'} value={stats.batteryCapacity} unit={'kWh'} />
        </div>
    )
}

const Stat = ({ title, value, unit }) => (
    <div className="flex flex-col items-center justify-center w-1/3 text-center">
        <div className='text-xl lg:text-2xl font-semibold leading-none'> {value} <span className='lg:text-xl text-base'>{unit}</span> </div>
        <div className='capitalize text-xs lg:text-base leading-none'>{title}</div>
    </div>
)

export default Stats
