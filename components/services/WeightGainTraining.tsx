import Image from "next/image";

export default function WeightGainTraining() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">

          <div>
            <Image
              src="/weight-gain-training.png"
              alt="Weight Gain Training"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/weight-gain-icon.png"
                alt="Weight Gain"
                width={24}
                height={24}
              />

              <div className="h-[2px] w-56 bg-gradient-to-r from-[#C50D3E] to-transparent" />
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-8">
              Weight Gain
              <br />
              <span className="text-[#C50D3E]">
                Training
              </span>
            </h2>

            <h3 className="font-bold text-lg mb-2">
              Who Its For
            </h3>

            <p className="text-gray-500 mb-8 max-w-md">
              Ideal for individuals looking to gain healthy weight,
              muscle mass, and overall body strength.
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
                <span>Supports healthy weight and muscle gain</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Improves strength and body structure</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Boosts metabolism and appetite</span>
              </li>

              <li className="flex items-center gap-3">
                <Image
                  src="/check-icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
                <span>Enhances overall physique and confidence</span>
              </li>

            </ul>

            <h3 className="font-bold text-lg mb-2">
              Duration / Intensity
            </h3>

            <p className="text-gray-500 mb-8">
              45–75 min per session • Moderate to High
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