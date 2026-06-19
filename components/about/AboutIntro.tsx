import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutIntro() {
  const features = [
    "Modern Facilities",
    "Expert Team",
    "Diverse Offering",
    "Fitness Focus",
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-center">

          <div className="flex justify-center lg:block">
            <div className="relative">

              <Image
                src="/about/about-intro.png"
                alt="Fitness Training"
                width={320}
                height={420}
                className="w-full max-w-[320px] h-auto object-cover"
              />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#E61257] to-[#8A001D] rounded-[22px] px-6 py-4 w-[245px] shadow-xl border border-white/20">

                <div className="flex items-center gap-4">
                  <h3 className="text-white text-5xl font-bold leading-none">
                    09+
                  </h3>

                  <p className="text-white font-semibold leading-5 text-sm">
                    Years Of Fitness
                    <br />
                    Experience
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
              <span className="text-[#C50D3E] uppercase text-lg font-medium">
                About 3rd Gen
              </span>
            </div>

            <h2 className="text-4xl lg:text-[58px] font-bold leading-tight mb-6">
              Always Provide Best
              <br />
              <span className="text-[#C50D3E]">
                Fitness Trainers.
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-8 max-w-xl mb-8">
              With over 9 years of experience, 3rd Gen Fitness delivers
              expert training designed to transform your strength,
              endurance, and confidence. Our certified trainers
              combine modern techniques with personalized programs
              to help you achieve real, lasting results in a motivating
              environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-[700px]">

              {features.map((item) => (
                <div
                  key={item}
                  className="bg-gradient-to-r from-[#FFE7EE] to-[#F9D4DE] rounded-lg px-4 py-3 flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#C50D3E] flex-shrink-0"
                  />

                  <span className="font-semibold text-black">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}