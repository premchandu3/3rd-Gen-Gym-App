import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseAbout from "@/components/franchise/FranchiseAbout";
import FranchiseSupport from "@/components/franchise/FranchiseSupport";
import FranchiseBlueprint from "@/components/franchise/FranchiseBlueprint";
import FranchiseProcess from "@/components/franchise/FranchiseProcess";
import FranchiseContact from "@/components/franchise/FranchiseContact";

export default function FranchisePage() {
  return (
    <>
      <FranchiseHero />
      <FranchiseAbout />
      <FranchiseSupport />
      <FranchiseBlueprint />
      <FranchiseProcess />
      <FranchiseContact />  
    </>
  );
}