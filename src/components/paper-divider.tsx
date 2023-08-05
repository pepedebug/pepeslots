import React from 'react'
import Image from "next/image";
import paperDividerImg from "../../public/dividers/paper-divider.svg"

type PaperDividerProps = {
    className?: string
}

export default function PaperDivider({className} : PaperDividerProps) {
    return (
        <>
            <Image src={paperDividerImg} alt={"paper-divider"} className={`${className} w-full z-10`} priority={true}/>
        </>
    )
}