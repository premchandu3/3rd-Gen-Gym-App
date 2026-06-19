import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[320px] md:h-[420px] lg:h-[630px] overflow-hidden">

      <Image
        src="/about/about-bg.png"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#C50D3E]/50 via-[#5b0018]/20 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="
            text-white
            font-extrabold
            uppercase
            leading-none
            tracking-tight
            text-[60px]
            sm:text-[90px]
            md:text-[130px]
            lg:text-[165px]
          "
        >
          ABOUT US
        </h1>
      </div>

      <div
        className="
          absolute
          bottom-[-35px]
          md:bottom-[-10px]
          lg:bottom-[-15px]
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <Image
          src="/about/about-man.png"
          alt="Bodybuilder"
          width={430}
          height={580}
          priority
          className="
            w-[330px]
            sm:w-[350px]
            md:w-[300px]
            lg:w-[430px]
            h-auto
          "
        />
      </div>

    </section>
  );
}

