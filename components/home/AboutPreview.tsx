import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

         
          <div>

            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
              <span className="text-[#C50D3E] uppercase text-base font-medium tracking-wide">
                About Us
              </span>
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
            </div>

           
            <h2 className="text-5xl sm:text-6xl lg:text-[58px] font-extrabold leading-tight mb-10">
              More Than a{" "}
              <span className="text-[#C50D3E]">Gym.</span>
              <br />
              A Place to{" "}
              <span className="text-[#C50D3E]">Transform.</span>
            </h2>

            
            <div className="flex flex-col lg:flex-row gap-6 items-end">

              
              <div className="shrink-0">
                <Image
                  src="/about-small.png"
                  alt="Gym Member"
                  width={170}
                  height={260}
                  priority
                  className="w-[170px] h-[260px] object-cover rounded-md"
                />
              </div>

              
              <div className="max-w-[280px]">
                <p className="text-gray-500 text-[16px] leading-8">
                  We are a results-driven fitness community built to help you
                  become stronger, healthier, and more confident. Our programs
                  are designed by certified experts and backed by proven
                  training methods that deliver real, lasting results.
                </p>

                <Link
                  href="/about"
                  className="inline-block mt-6 bg-[#C50D3E] text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
                >
                  Know More →
                </Link>
              </div>

            </div>

          </div>

          <div>
            <Image
              src="/about-main.png"
              alt="Fitness Training"
              width={340}
              height={520}
              priority
              className="w-full h-[520px] object-cover rounded-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}