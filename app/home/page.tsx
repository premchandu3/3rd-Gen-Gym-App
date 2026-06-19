import Hero from "@/components/home/Hero";
// import FeatureBar from "@/components/FeatureBar";
import AboutPreview from "@/components/home/AboutPreview";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TransformationSection from "@/components/home/TransformationSection"
import TestimonalSection from "@/components/home/TestimonialSection"
import PricingSection from "@/components/home/PricingSection"
import CommitmentSection from "@/components/home/CommitmentSection";
import FitnessJourney from "@/components/home/FitnessJourney";


export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <FeatureBar /> */}
      <AboutPreview />
      <StatsSection />
      <ServicesSection />
      <TransformationSection />
      <TestimonalSection />
      <PricingSection />
      <CommitmentSection />
      <FitnessJourney /> 
    </>
  );
}




// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }