import ContactHero from "@/components/contact/ContactHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactHero />
      <ContactInfoSection />
      <ContactMap />
    </main>
  );
}