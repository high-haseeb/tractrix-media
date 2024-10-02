import React from 'react'
import useStateStore from "@/stores/stateStore";
import Stat from "@/components/ui/Stat";

const Stats = () => {
    const { stats } = useStateStore();
    return (
        <div className="flex justify-between w-full">
            {
                stats.map((stat, idx) => <Stat {...stat} key={idx} />)
            }
        </div>
    )
}

export default Stats
