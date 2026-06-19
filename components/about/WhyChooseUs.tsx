import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Pro Equipment",
      image: "/about/pro-equipment.png",
      description:
        "Our gym is equipped with modern, high-performance machines designed to support strength, endurance, and functional training for all fitness levels.",
    },
    {
      title: "Expert Trainers",
      image: "/about/expert-trainers.png",
      description:
        "Our certified trainers provide personalized coaching, correct techniques, and motivation to help you reach your goals faster and safely.",
    },
    {
      title: "Health Report",
      image: "/about/health-report.png",
      description:
        "We provide regular fitness assessments and detailed health reports to monitor your progress and adjust your plan for maximum results.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1180px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-[2px] bg-[#D90452]" />

              <span className="uppercase text-[#D90452] text-[16px] tracking-wide">
                Why Choose Us
              </span>

              <div className="w-14 h-[2px] bg-[#D90452]" />
            </div>

            <h2 className="text-[58px] leading-[1.05] font-extrabold">
              Personal{" "}
              <span className="text-[#D90452]">
                Training
              </span>
              <br />
              Will{" "}
              <span className="text-[#D90452]">
                Work For You
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-gray-500 text-[18px] leading-8 max-w-[420px]">
              From strength to fat loss, our expert-led programs help
              you train smarter and achieve real results at any fitness
              level.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="relative h-[225px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-[#D90452]/40" />

              <div className="absolute bottom-5 left-4 right-4 text-white">

                <h3 className="text-[24px] font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-7 text-gray-100">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}