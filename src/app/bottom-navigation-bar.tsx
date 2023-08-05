import Divider from "@/components/divider";
import pepesLogo from "../../public/pepe-variants/pepe-logo-2-lg.png";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/dropdown";
import {primaryFont} from "@/components/fonts";

export default function BottomNavigationBar() {
    return (
        <>
            <div className="h-[4rem] w-full fixed top-[calc(100dvh-64px)] z-50 md:hidden backdrop-blur-lg bg-transparent flex flex-col shadow-upward">
                <div className={"relative w-full"}>
                    <Divider className={"absolute top-0 h-[5px] -mt-[3px]"}/>
                    <div className={"w-full flex flex-row justify-between items-center px-6 outline-0"}>
                        <Link href={"/"}>
                            <div className={"flex flex-row space-x-2 items-center"}>
                                <Image src={pepesLogo} alt={"pepes-logo"} className={"w-[70px] md:w-[150px] mt-[4px]"}/>
                                <span className={`font-bold ${primaryFont.className} text-3xl text-shadow -mb-2`}>Pepe$</span>
                            </div>
                        </Link>
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </>
    )
}