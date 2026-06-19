import Image from "next/image";

export default function ContestPreparation() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">

          <div>
            <Image
              src="/contest-preparation.png"
              alt="Contest Preparation"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/contest-icon.png"
                alt="Contest"
                width={24}
                height={24}
              />

              <div className="h-[2px] w-56 bg-gradient-to-r from-[#C50D3E] to-transparent" />
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-8">
              Contest
              <br />
              <span className="text-[#C50D3E]">
                Preparation
              </span>
            </h2>

            <h3 className="font-bold text-lg mb-2">
              Who Its For
            </h3>

            <p className="text-gray-500 mb-8 max-w-md">
              Designed for athletes and fitness enthusiasts
              preparing for bodybuilding or physique competitions.
            </p>

            <h3 className="font-bold text-lg mb-4">
              Benefits
            </h3>

            <ul className="space-y-3 text-gray-600 mb-8">

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Customized training and workout plans</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Improves muscle definition and symmetry</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Enhances stage presence and confidence</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Focuses on peak performance and conditioning</span>
              </li>

            </ul>

            <h3 className="font-bold text-lg mb-2">
              Duration / Intensity
            </h3>

            <p className="text-gray-500 mb-8">
              60–90 min per session • High
            </p>

            <button className="bg-[#C50D3E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
              Enquire Now →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}