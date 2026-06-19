import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative w-fit">

            <Image
              src="/about/founder.png"
              alt="Founder"
              width={650}
              height={725}
              className="object-cover"
            />

            <div className="absolute bottom-12 left-[55%] -translate-x-1/2 bg-[#D90452] px-8 py-5 min-w-[320px]">
              <h3 className="text-white text-[28px] font-bold leading-none">
                Mr. Raja Prabin
              </h3>

              <p className="text-white text-[15px] mt-3">
                Founder Of 3rd Gen
              </p>
            </div>

          </div>

          <div>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#D90452] uppercase tracking-wide text-[18px]">
                Leadership That Inspires
              </span>

              <div className="w-16 h-[2px] bg-[#D90452]" />
            </div>

            <h2 className="text-[56px] leading-[1.1] font-bold mb-8">
              Meet The{" "}
              <span className="text-[#D90452]">
                Founder
              </span>
            </h2>

            <p className="text-gray-500 text-[22px] leading-10 max-w-[560px]">
              With a deep commitment to health and discipline,
              the founder established this gym to deliver
              professional training, modern facilities, and a
              positive fitness culture. Every decision is guided
              by the goal of helping members achieve lasting
              results.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}