import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import VisionSection from "@/components/about/VisionSection";
import FounderSection from "@/components/about/FounderSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Infrastructure from "@/components/about/Infrastructure";

export default function AboutPage(){
    return (
        <>
        <AboutHero />
        <AboutIntro />
        <VisionSection />
        <FounderSection />
        <WhyChooseUs />
        <Infrastructure />
        </>
    )
}