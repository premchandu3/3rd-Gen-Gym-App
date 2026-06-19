import Image from "next/image";

export default function FranchiseHero() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative h-[500px] md:hidden">
        <Image
          src="/franchise/franchise-bg.png"
          alt="Franchise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/franchise/franchise-logo.png"
            alt="3rd Generation"
            width={140}
            height={140}
            priority
            unoptimized
          />
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
          <h1
            className="
              text-white
              uppercase
              font-extrabold
              text-[52px]
              leading-none
              tracking-tight
              text-center
            "
          >
            FRANCHISE
          </h1>
        </div>
      </div>

      <div className="relative hidden md:block h-[540px]">
        <Image
          src="/franchise/franchise-bg.png"
          alt="Franchise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/franchise/franchise-logo.png"
            alt="3rd Generation"
            width={180}
            height={180}
            priority
            unoptimized
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <h1
            className="
              uppercase
              font-extrabold
              text-white
              text-[90px]
              lg:text-[120px]
              xl:text-[140px]
              leading-none
              tracking-tight
              whitespace-nowrap
            "
          >
            FRANCHISE
          </h1>
        </div>
      </div>

    </section>
  );
}