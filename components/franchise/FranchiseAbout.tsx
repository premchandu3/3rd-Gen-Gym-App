import Image from "next/image";
import Link from "next/link";

export default function FranchiseAbout() {
  return (
<section className="bg-white py-16 lg:py-24 overflow-x-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-bold leading-tight text-[34px] sm:text-[38px] md:text-[50px] break-words">
              <span className="text-black">Build Your </span>
              <span className="text-[#C50D3E]">Fitness Empire</span>
              <br />
              <span className="text-black">At </span>
              <span className="text-[#C50D3E] uppercase">
                3RD GEN
              </span>
            </h2>

            <p className="mt-8 text-[#6B6B6B] text-lg leading-relaxed">
              We believe fitness is not just about lifting weights;
              it's about building strength, confidence, and a healthier
              lifestyle. Our gym is designed to motivate you at every
              step, whether you're a beginner or a seasoned athlete.
            </p>

            <p className="mt-4 text-[#6B6B6B] text-lg leading-relaxed">
              We offer a fully equipped training space, expert-certified
              trainers, and a supportive environment that pushes you to
              become the best version of yourself.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                mt-8
                bg-[#C50D3E]
                text-white
                px-8
                py-3
                rounded-full
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Enquire Now →
            </Link>
          </div>

          <div className="relative h-[520px] hidden lg:block overflow-hidden">

            <div className="absolute top-0 right-0 w-[280px] h-[360px]">
              <Image
                src="/franchise/franchise-man.png"
                alt="Fitness Training"
                fill
                quality={100}
                sizes="280px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[300px] h-[340px]">
              <Image
                src="/franchise/franchise-woman.png"
                alt="Gym Equipment"
                fill
                quality={100}
                sizes="300px"
                className="object-contain"
              />
            </div>

          </div>

          <div className="lg:hidden flex flex-col gap-6">

            <div className="relative w-full h-[350px]">
              <Image
                src="/franchise/franchise-man.png"
                alt="Fitness Training"
                fill
                quality={100}
                sizes="100vw"
                className="object-cover rounded-md"
              />
            </div>

            <div className="relative w-full h-[380px] sm:h-[420px] overflow-hidden">
              <Image
                src="/franchise/franchise-woman.png"
                alt="Gym Equipment"
                fill
                quality={100}
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}