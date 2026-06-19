import Image from "next/image";

export default function FunctionalTraining() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">

          <div>
            <Image
              src="/functional-training.png"
              alt="Functional Training"
              width={420}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/functional-icon.png"
                alt="Functional Icon"
                width={24}
                height={24}
              />

              <div className="h-[2px] w-56 bg-gradient-to-r from-[#C50D3E] to-transparent" />
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-8">
              Functional{" "}
              <span className="text-[#C50D3E]">
                Training
              </span>
            </h2>

            <h3 className="font-bold text-lg mb-2">
              Who Its For
            </h3>

            <p className="text-gray-500 mb-8 max-w-md">
              Perfect for those who want better mobility,
              balance, and day-to-day strength.
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
                <span>Improves flexibility & coordination</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Enhances core stability</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Reduces injury risk</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Boosts overall movement efficiency</span>
              </li>

            </ul>

            <h3 className="font-bold text-lg mb-2">
              Duration / Intensity
            </h3>

            <p className="text-gray-500 mb-8">
              45–60 min per session • Low to High
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