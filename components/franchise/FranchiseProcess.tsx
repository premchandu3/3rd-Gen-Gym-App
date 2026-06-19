import Image from "next/image";

const processSteps = [
  {
    number: "1",
    title: "FRANCHISE ENQUIRY",
    description:
      "We look for partners who are passionate about fitness and committed to delivering a premium experience.",
    image: "/franchise/process-1.png",
    bg: "bg-[#C50D3E]",
  },
  {
    number: "2",
    title: "DISCUSSION",
    description:
      "Detailed presentation of the business model, financials, and expectations.",
    image: "/franchise/process-2.png",
    bg: "bg-black",
  },
  {
    number: "3",
    title: "LOCATION APPROVAL",
    description:
      "Site selection assistance and final approval of the gym premises.",
    image: "/franchise/process-3.png",
    bg: "bg-[#C50D3E]",
  },
  {
    number: "4",
    title: "LAUNCH SUPPORT",
    description:
      "Pre-launch marketing, staff hiring, and grand opening execution.",
    image: "/franchise/process-4.png",
    bg: "bg-black",
  },
];

export default function FranchiseProcess() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">

          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-[1px] bg-[#C50D3E]" />
            <span className="uppercase text-[#C50D3E] text-sm font-medium">
              The Journey
            </span>
            <div className="w-10 h-[1px] bg-[#C50D3E]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-black">Franchise </span>
            <span className="text-[#C50D3E]">Process</span>
          </h2>

        </div>

        <div className="overflow-hidden">

          {processSteps.map((step) => (
            <div
              key={step.number}
              className={`${step.bg} px-8 py-8 lg:px-12`}
            >
              <div className="grid lg:grid-cols-[120px_1fr_280px] items-center gap-8">

                <div>
                  <h3 className="text-white font-extrabold text-[64px] leading-none">
                    {step.number}
                  </h3>
                </div>

                <div>
                  <h4 className="text-white text-3xl font-bold mb-3">
                    {step.title}
                  </h4>

                  <p className="text-white/90 text-sm max-w-md leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="relative h-[140px] lg:h-[120px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}