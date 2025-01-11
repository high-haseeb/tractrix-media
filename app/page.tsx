import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";


export default function Home() {
    return (
        <main className="h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full h-[40%] lg:h-full lg:w-[70%]"><Experience/></div>

            <div className="w-full h-[60%] lg:h-full lg:w-[30%]">
                <Configurator/>
            </div>
        </main>
    );
}
