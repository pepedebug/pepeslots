import pepesLogo from "../../public/pepe-variants/pepe-logo-2-lg.png";
import Image from "next/image";
import Link from "next/link";

import Divider from "@/components/divider";
import {primaryFont} from "@/components/fonts";

export default function Header() {

    return (
        <div className={"w-full shadow-md flex-col justify-between items-center z-50 bg-pepe-green sticky top-0 hidden md:flex"}>
            <div className={"w-full pt-2 max-w-content-width flex flex-row justify-between items-center"}>
                <div className={"w-36 flex flex-row space-x-3 items-center text-2xl"}>
                    <Image src={pepesLogo} alt={"pepes-logo"} className={"w-[70px] md:w-[150px] lg:-mb-1 -mb-1"}/>
                    <span className={`font-bold ${primaryFont.className} hidden md:flex text-4xl lg:-mb-2 text-shadow -mb-1`}>Pepe$</span>
                </div>
                <div className={"w-full text-xl hidden lg:flex flex-row justify-center space-x-4"}>
                    <Link className={"hover:text-slate-300 duration-150"} href="">Home</Link>
                    <Link className={"hover:text-slate-300 duration-150"} href="">Something</Link>
                    <Link className={"hover:text-slate-300 duration-150"} href="">Whitepaper</Link>
                    <Link className={"hover:text-slate-300 duration-150"} href="">Roadmap</Link>
                </div>
                <div className={"btn text-xs btn-outline md:btn-wide border-white hover:bg-white text-white"}>
                    Buy Now
                </div>
            </div>
            <Divider className={"h-[7px] -mb-[3px] transform scale-x-[-1]"}/>
        </div>
    )
}