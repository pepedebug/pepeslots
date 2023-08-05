import {primaryFont} from "../fonts";
import React from "react";

type PepeTextProps = {
    children?: React.ReactNode
    className?: string
}

export default function PepeText({className, children} : PepeTextProps) {
    return (
        <>
            <span className={`${primaryFont.className} text-shadow ${className} text-xl`}>
                {children}
            </span>
        </>
    )
}