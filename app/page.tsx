import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main className="h-screen w-screen overflow-hidden flex">
            <div className="w-[70%]"><Experience /></div>
            <div className="w-[30%]"><Configurator /></div>
        </main>
    );
}
