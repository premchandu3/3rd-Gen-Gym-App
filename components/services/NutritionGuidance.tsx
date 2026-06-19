import Image from "next/image";

export default function NutritionGuidance() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

          <div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/nutrition-icon.png"
                alt="Nutrition Guidance"
                width={24}
                height={24}
              />

              <div className="h-[2px] w-56 bg-gradient-to-r from-[#C50D3E] to-transparent" />
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-8">
              Nutrition
              <br />
              <span className="text-[#C50D3E]">
                Guidance
              </span>
            </h2>

            <h3 className="font-bold text-lg mb-2">
              Who Its For
            </h3>

            <p className="text-gray-500 mb-8 max-w-md">
              Suitable for anyone looking to improve results
              through proper nutrition.
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
                <span>Better workout performance</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Supports fat loss & muscle gain</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Sustainable eating habits</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Improved overall health</span>
              </li>

            </ul>

            <h3 className="font-bold text-lg mb-2">
              Duration / Intensity
            </h3>

            <p className="text-gray-500 mb-8">
              Lifestyle-based & flexible
            </p>

            <button className="bg-[#C50D3E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
              Enquire Now →
            </button>

          </div>

          <div>
            <Image
              src="/nutrition-guidance.png"
              alt="Nutrition Guidance"
              width={420}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}