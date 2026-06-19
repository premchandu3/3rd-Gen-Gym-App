import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="bg-[#010101] overflow-hidden">
      <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[652px]">

        {/* Background */}
        <Image
          src="/products-bg.png"
          alt="Products Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Red Glow */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#C50D3E]/25 via-[#C50D3E]/8 to-transparent" />

        {/* Right Equipment Image */}
        <div
          className="
            absolute
            top-0
            right-0
            h-full
            z-30

            w-[45%]

            overflow-hidden

            [clip-path:polygon(18%_0%,100%_0%,100%_100%,0%_100%)]
          "
        >
          <Image
            src="/products-equipment.png"
            alt="Equipment"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="absolute inset-0 z-40 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto">

            <h1
              className="
                text-white
                font-black
                uppercase
                leading-none

                ml-6
                sm:ml-12
                lg:ml-[60px]

                text-[34px]
                sm:text-[64px]
                lg:text-[80px]
              "
            >
              PRODUCTS
            </h1>

          </div>
        </div>

      </div>
    </section>
  );
}