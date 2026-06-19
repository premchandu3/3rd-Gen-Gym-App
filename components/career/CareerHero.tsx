import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="
          relative w-full
          h-[250px]
          sm:h-[350px]
          md:h-[500px]
          lg:h-[651px]
        "
      >
        <Image
          src="/career/career-bg.png"
          alt="Career Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}