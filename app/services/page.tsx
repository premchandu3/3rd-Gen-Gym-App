import ServicesHero from "@/components/services/ServicesHero";
import StrengthTraining from "@/components/services/StrengthTraining";
import WeightLossProgram from "@/components/services/WeightLossProgram";
import FunctionalTraining from "@/components/services/FunctionalTraining";
import PersonalTraining from "@/components/services/PersonalTraining";
import GroupClasses from "@/components/services/GroupClasses";
import NutritionGuidance from "@/components/services/NutritionGuidance";
import WeightGainTraining from "@/components/services/WeightGainTraining";
import ZumbaClass from "@/components/services/ZumbaClass";
import ContestPreparation from "@/components/services/ContestPreparation";
import FaqSection from "@/components/services/FaqSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <StrengthTraining />
      <WeightLossProgram />
      <FunctionalTraining />
      <PersonalTraining />
      <GroupClasses />
      <NutritionGuidance />
      <WeightGainTraining />
      <ZumbaClass />
      <ContestPreparation />
      <FaqSection />
    </>
  );
}