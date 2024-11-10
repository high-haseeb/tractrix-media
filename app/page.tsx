import Configurator from "@/components/Configurator";
import Experience from "@/components/Experience";
import Image from "next/image";

export default function Home() {
    return (
        <main className="h-screen w-screen overflow-hidden flex">
            <Image src={"/logo.webp"} width={300} height={100} alt="logo" className="absolute top-4 left-0 z-50" />
            <Image src={"/logo-symbol.webp"} width={150} height={100} alt="logo" className="absolute bottom-2 left-2 z-50" />
            <div className="w-[70%]"><Experience /></div>
            <div className="w-[30%]"><Configurator /></div>
        </main>
    );
}
