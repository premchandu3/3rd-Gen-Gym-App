import Image from "next/image";

export default function FranchiseBlueprint() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative hidden lg:block h-[520px]">

            <div className="absolute left-[-60px] top-[160px] w-[140px] h-[110px] bg-gradient-to-r from-[#6a001e] to-[#C50D3E]" />

            <div className="absolute top-0 left-0 w-[320px] h-[380px] z-10">
              <Image
                src="/franchise/blueprint-main.png"
                alt="Gym Interior"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-[150px] w-[260px] h-[160px] z-20">
              <Image
                src="/franchise/blueprint-small.png"
                alt="Weight Training"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

          </div>

          <div>

            <div className="bg-[linear-gradient(90deg,#000000_0%,#8B002D_100%)] p-6 mb-8">

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-white" />
                <span className="uppercase text-white text-sm tracking-wide">
                  The Blueprint
                </span>
              </div>

              <h2 className="font-bold text-[34px] md:text-[56px] leading-tight">
                <span className="text-white">What You Need</span>
                <br />
                <span className="text-black">To </span>
                <span className="text-[#ff2f6d]">Get Started</span>
              </h2>

            </div>

            <p className="text-[#777777] text-lg leading-relaxed mb-10">
              We look for partners who are passionate about fitness
              and committed to delivering a premium experience.
            </p>


            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <Image
                  src="/franchise/area-icon.png"
                  alt="Area"
                  width={42}
                  height={42}
                />

                <div>
                  <p className="text-[#888]">
                    Area Requirement
                  </p>

                  <h4 className="font-bold text-[32px] text-black">
                    Minimum 2500 Sq. Ft.
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Image
                  src="/franchise/investment-icon.png"
                  alt="Investment"
                  width={42}
                  height={42}
                />

                <div>
                  <p className="text-[#888]">
                    Initial Investment
                  </p>

                  <h4 className="font-bold text-[32px] text-black">
                    30 - 35 Lakhs
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Image
                  src="/franchise/roi-icon.png"
                  alt="ROI"
                  width={42}
                  height={42}
                />

                <div>
                  <p className="text-[#888]">
                    ROI Timeline
                  </p>

                  <h4 className="font-bold text-[32px] text-black">
                    24 - 36 Months
                  </h4>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="lg:hidden mt-10">

          <div className="relative h-[350px] mb-5">
            <Image
              src="/franchise/blueprint-main.png"
              alt="Gym Interior"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="relative h-[180px]">
            <Image
              src="/franchise/blueprint-small.png"
              alt="Weight Training"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}