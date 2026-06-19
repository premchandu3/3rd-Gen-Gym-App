import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="hidden lg:block">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#C50D3E]" />
            <span className="text-[#C50D3E] uppercase text-sm font-semibold tracking-wider">
              About Us
            </span>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-16 items-start">

            <div>

              <h2 className="text-[72px] font-extrabold leading-[1.05] mb-10 text-black">
                More Than a <span className="text-[#C50D3E]">Gym.</span>
                <br />
                A Place to <span className="text-[#C50D3E]">Transform.</span>
              </h2>

              <div className="grid grid-cols-[300px_1fr] gap-8 items-start">

                <Image
                  src="/about-small.png"
                  alt="About Gym"
                  width={300}
                  height={420}
                  className="w-full h-auto object-cover"
                />

                <div>
                  <p className="text-gray-600 text-[18px] leading-10">
                    We are a results-driven fitness community built to help you
                    become stronger, healthier, and more confident. Our programs
                    are designed by certified experts and backed by proven
                    training methods that deliver real, lasting results.
                  </p>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 mt-10 bg-[#C50D3E] text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
                  >
                    Know More →
                  </Link>
                </div>

              </div>

            </div>

            <div className="pt-10">
              <Image
                src="/about-main.png"
                alt="Gym Training"
                width={650}
                height={850}
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

        </div>

        <div className="lg:hidden">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#C50D3E]" />
            <span className="text-[#C50D3E] uppercase text-xs font-semibold tracking-wider">
              About Us
            </span>
          </div>

          <h2 className="text-[42px] font-extrabold leading-tight text-black">
            More Than a <span className="text-[#C50D3E]">Gym.</span>
            <br />
            A Place to <span className="text-[#C50D3E]">Transform.</span>
          </h2>

          <p className="mt-5 text-gray-600 text-base leading-8">
            We are a results-driven fitness community built to help you
            become stronger, healthier, and more confident. Our programs are
            designed by certified experts and backed by proven training
            methods that deliver real, lasting results.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 bg-[#C50D3E] text-white px-8 py-4 rounded-full font-semibold"
          >
            Know More →
          </Link>

          <div className="mt-8 space-y-4">

            <Image
              src="/about-small.png"
              alt="About Gym"
              width={600}
              height={700}
              priority
              className="w-full h-auto object-cover"
            />

            <Image
              src="/about-main.png"
              alt="Gym Training"
              width={600}
              height={700}
              priority
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}