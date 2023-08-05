import HeroSection from "@/app/hero-section";
import AboutSection from "@/app/about-section";
import PaperDivider from "@/components/paper-divider";
import TokenomicsSection from "@/app/tokenomics-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-16">
            <HeroSection/>
            <PaperDivider className={"scale-y-50"}/>
            <AboutSection/>
            <PaperDivider className={"scale-y-50 scale-x-[-1] transform"}/>
            <TokenomicsSection/>
        </main>
    );
}
