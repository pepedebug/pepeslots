import wojakPepe from "../../public/pepe-variants/pepes-logo-lg.png"
import Image from "next/image";
import slotMachineGlow from "../../public/slot-machine-glow.png";
import {primaryFont, tertiaryFont} from "@/components/fonts";

export default function ProvablyFairSection () {
    return (
        <>
            <div className={"w-full relative flex items-center justify-center"}>
                <div className={"w-full absolute h-full z-0"} style={{
                    backgroundImage: "url('/pepe-backdrop.png')",
                    backgroundSize: "80px",
                    opacity: "0.2"
                }}></div>
                <div className={"w-full max-w-content-width px-4 pt-6 z-10 pb-24 flex flex-col justify-center items-center"}>
                    <span className={`${primaryFont.className} text-6xl text-shadow`}>Provably Fair</span>
                    <div className={"border-2 border-white bg-slate-950 shadow-xl rounded-xl overflow-clip w-full max-w-[500px] h-[300px] relative"}>
                        <div className={"w-full absolute h-full"} style={{
                            backgroundImage: "url('/pepe-backdrop.png')",
                            backgroundSize: "80px",
                            opacity: "0.3"
                        }}></div>
                        <Image src={slotMachineGlow} alt={"slot-machine"} className={"absolute -right-3 w-[300px]"}></Image>
                        <Image src={wojakPepe} alt={"wojak-pepe"} className={"cartoon-face w-[350px] mt-6"}/>
                    </div>
                    <span className={`${tertiaryFont.className} mt-6 text-center`}>What does "provably fair" mean? It means that our slot machine operates on a transparent algorithm that allows players to verify the fairness of each spin. When you play with
                        <span className={`${primaryFont.className} text-shadow`}> Pepe$</span>, the outcome of each spin is determined by a cryptographic algorithm that cannot be altered or influenced by external factors.
                    </span>
                </div>
            </div>
        </>
    )
}