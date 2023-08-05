import tgLogo from "../../../public/socials/tg-logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function TgIcon() {
    return (
        <>
            <div className={"tooltip"} data-tip={"Telegram"}>
                <Link href={""}>
                    <Image src={tgLogo} alt={"tg-logo"} className={"w-[39px] md:w-[52px] shadow-xl hover:scale-105 hover:-translate-y-1 hover:z-10 transition-all duration-300 transform overflow-visible rounded-full"}/>
                </Link>
            </div>
        </>
    )
}