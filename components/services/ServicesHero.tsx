import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative h-[500px] sm:h-[600px] lg:h-[650px] w-full">

        
        <div className="absolute inset-y-0 left-0 w-1/2">
          <Image
            src="/service-left-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

       
        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image
            src="/service-right-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        
        <div className="absolute inset-0 bg-black/25 z-[2]" />

       
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1
            className="
              text-white
              font-extrabold
              uppercase
              leading-none
              opacity-95
              select-none
              text-[70px]
              sm:text-[100px]
              md:text-[130px]
              lg:text-[170px]
            "
          >
            SERVICES
          </h1>
        </div>

        
        <div
          className="
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2
            z-20
          "
        >
          <Image
            src="/service-hero.png"
            alt="Fitness Trainer"
            width={520}
            height={650}
            priority
            className="
              w-[230px]
              sm:w-[320px]
              md:w-[420px]
              lg:w-[520px]
              h-auto
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}