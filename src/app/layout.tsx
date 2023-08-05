import './globals.css'
import type { Metadata } from 'next'
import Header from "@/app/header";
import {secondaryFont} from "@/components/fonts";
import BottomNavigationBar from "@/app/bottom-navigation-bar";

export const metadata: Metadata = {
    title: 'Pepe$ - Pepe Slots',
    description: "A slot machine, but completely decentralized",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme={"forest"}>
            <body className={secondaryFont.className}>
                <Header/>
                {children}
                <BottomNavigationBar/>
            </body>
        </html>
    );
}
