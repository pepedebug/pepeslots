import discordLogo from "../../../public/socials/discord-logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function DiscordIcon() {
    return (
        <>
            <div className={"tooltip"} data-tip={"Discord"}>
                <Link href={""}>
                    <div className={"bg-[#5865F2] rounded-full w-[39px] md:w-[52px] p-2 md:p-3 shadow-lg hover:scale-105 hover:-translate-y-1 hover:z-10 transition-all duration-300 transform overflow-visible"}>
                        <Image src={discordLogo} alt={"discord-logo"} className={"w-[30px]"}/>
                    </div>
                </Link>
            </div>
        </>
    )
}