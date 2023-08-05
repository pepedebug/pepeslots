import Image from "next/image";
import pepeWildFace from "../../public/pepe-variants/pepe-wild-face.png"
import {primaryFont} from "@/components/fonts";
import {tertiaryFont} from "@/components/fonts";
import pepeLogo from "../../public/pepe-variants/pepe-logo-2-lg.png"
import PepeText from "@/components/styled-texts/pepe-text";

export default function AboutSection() {
    return (
        <>
            <div className={"w-full relative overflow-clip flex flex-row justify-center bg-pepe-green z-10"}>
                <div className={"max-w-content-width w-full flex px-2 md:px-16 py-16 flex-col md:flex-row justify-between items-center z-10"}>
                    <div className={"w-[70%] md:w-[40%]"}>
                        <Image src={pepeWildFace} alt={"pepe-wild-face"}/>
                    </div>
                    <div className={"md:w-[60%] flex flex-col items-center z-10"}>
                        <span className={`${primaryFont.className} text-5xl md:text-6xl text-shadow`}>About Pepe$lots</span>
                        <span className={`${tertiaryFont.className} text-sm md:text-base font-light text-center md:text-left`}>
                            In a nutshell we are a meme token who&apos;s primary product is the slot machine. Welcome to
                            <PepeText> Pepe$lots </PepeText>
                            where everything is completely decentralized. Everything, and I mean
                            <PepeText> Everything </PepeText>
                            is processed on the smart contract. You can literally play slots without playing on our app! As long as you can interact with the contract, you&apos;re free to play
                        </span>
                    </div>
                </div>
                <div className={"absolute right-0 top-0 z-0 -mt-12 opacity-30 hidden xl:block"}>
                    <Image src={pepeLogo} alt={"pepe-logo"} className={"w-[700px] transform scale-x-[-1]"}/>
                </div>
            </div>
        </>
    )
}