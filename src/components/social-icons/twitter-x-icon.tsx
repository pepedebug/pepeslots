import xLogo from "../../../public/socials/twitter-x.svg"
import Image from "next/image";
import Link from "next/link";
export default function TwitterXIcon() {
    return (
        <>
            <div className={"tooltip"} data-tip={"Twitter"}>
                <Link href={""}>
                    <div className={"bg-black w-50 h-50 rounded-full p-3 md:p-4 shadow-lg hover:scale-105 hover:-translate-y-1 hover:z-10 transition-all duration-300 transform overflow-visible"}>
                        <Image src={xLogo} alt={"twitter-x-logo"} className={"w-[15px] md:w-[20px]"}/>
                    </div>
                </Link>
            </div>
        </>
    )
}