import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 lg:px-6">

        
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
              <span className="text-[#C50D3E] uppercase text-sm font-semibold">
                About Us
              </span>
            </div>

            <h2 className="text-[58px] font-extrabold leading-tight mb-8">
              More Than a <span className="text-[#C50D3E]">Gym.</span>
              <br />
              A Place to <span className="text-[#C50D3E]">Transform.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-[620px]">
              We are a results-driven fitness community built to help you
              become stronger, healthier, and more confident. Our programs are
              designed by certified experts and backed by proven training
              methods that deliver real, lasting results.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center mt-8 bg-[#C50D3E] text-white px-8 py-4 rounded-full font-semibold"
            >
              Know More →
            </Link>
          </div>

          <div className="space-y-4">
            <Image
              src="/about-small.png"
              alt=""
              width={380}
              height={500}
              className="w-full h-auto object-cover"
            />

            <Image
              src="/about-main.png"
              alt=""
              width={380}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        
        <div className="lg:hidden">

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[2px] bg-[#C50D3E]" />
            <span className="text-[#C50D3E] text-[11px] uppercase font-semibold">
              About Us
            </span>
          </div>

          <h2 className="text-[36px] font-extrabold leading-tight">
            More Than a <span className="text-[#C50D3E]">Gym.</span>
            <br />
            A Place to <span className="text-[#C50D3E]">Transform.</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm leading-7">
            We are a results-driven fitness community built to help you
            become stronger, healthier, and more confident. Our programs are
            designed by certified experts and backed by proven training
            methods that deliver real, lasting results.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center mt-5 bg-[#C50D3E] text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Know More →
          </Link>

          
          <div className="mt-6">
            <Image
              src="/about-small.png"
              alt=""
              width={500}
              height={700}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          
          <div className="mt-3">
            <Image
              src="/about-main.png"
              alt=""
              width={500}
              height={700}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}