import localFont from "next/font/local";
import {Montserrat} from "next/font/google";

export const secondaryFont = localFont({ src: [
    {
        path: "../../public/fonts/alro-alro-regular-400.ttf",
        weight: "400"
    },
    {
        path: "../../public/fonts/alro-alro-bold-700.ttf",
        weight: "700"
    }
]});

export const tertiaryFont = Montserrat({
    subsets: ['latin'],
});

export const primaryFont = localFont({ src: [
    {
        path: "../../public/fonts/GentyDemo-Regular.ttf",
        weight: "400"
    }
]})