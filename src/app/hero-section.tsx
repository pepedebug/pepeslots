import Image from "next/image";

import pepePlayingSlots from "../../public/pepe-variants/pepe-playing-slots.png";
import pepePunching from "../../public/pepe-variants/pepe-punching2.png";
import {tertiaryFont} from "@/components/fonts";
import {primaryFont} from "@/components/fonts";
import Socials from "@/app/socials";

export default function HeroSection() {
    return (
        <>
            <div className={"w-full relative overflow-clip flex flex-row justify-center bg-pepe-green z-10"}>
                <div className={"absolute z-0 left-0 opacity-30 w-[600px] h-[600px]"}>
                    <Image src={pepePunching} alt={"pepe-punching"} className={"transform scale-x-[-1] hidden xl:block z-0"}></Image>
                </div>
                <div className={"max-w-content-width w-full flex px-4 md:px-16 md:py-16 flex-col-reverse md:flex-row justify-between items-center z-10"}>
                    <div className={"flex flex-col md:w-[60%] items-center md:items-start md:text-start text-center md:text-base text-sm"}>
                        <span className={`${primaryFont.className} text-5xl md:text-7xl text-shadow`}>
                            $Pepe$
                        </span>
                            <span>
                                Contract Address:&nbsp;
                                <span className={`${tertiaryFont.className} underline cursor-pointer font-bold text-xs`}>0xCom1ng_S00N!1</span>
                            </span>
                            <span className={` ${tertiaryFont.className} font-light`}>
                            Welcome to
                            <span className={`${primaryFont.className} text-shadow`}> Pepe$</span>,
                            the meme token that&apos;s more than just a cryptocurrency. We&apos;ve spiced up the crypto scene by embedding a slot machine right into the contract.
                        </span>
                            <span className={`${tertiaryFont.className} font-light mt-2`}>
                            It&apos;s said that being addicted to something isn&apos;t always a bad thing, and with
                            <span className={`${primaryFont.className} text-shadow`}> Pepe$</span>,
                            you&apos;ll find yourself hooked on the excitement of investing, spinning, and potentially winning. Dive into the world of
                            <span className={`${primaryFont.className} text-shadow`}> Pepe$</span>,
                            where finance meets fun, and discover a whole new way to enjoy crypto!
                        </span>
                    </div>
                    <Image src={pepePlayingSlots} alt={"mascot"} className={'w-[80%] md:w-[40%]'} />
                </div>
            </div>
            <Socials/>
        </>
    )
}