import dividerImg from "../../public/dividers/divider-white.png";
import Image from "next/image";
import React from "react";

type DividerProps = {
    className?: string,
}

export default function Divider({className} : DividerProps) {
    return (
        <>
            <Image src={dividerImg} alt={"divider-img"} className={`w-full z-10 ${className}`} priority={true}/>
        </>
    )
}