import Image from "next/image";

const supportCards = [
  {
    title: "Marketing Support",
    description:
      "Full-scale digital marketing, local SEO, and brand guidelines to ensure your gym is packed from day one.",
    icon: "/franchise/marketing-icon.png",
  },
  {
    title: "Training & Onboarding",
    description:
      "Comprehensive training for owners and staff on sales, management, and fitness excellence.",
    icon: "/franchise/onboarding-icon.png",
  },
  {
    title: "Equipment Guidance",
    description:
      "Exclusive partnerships with top-tier equipment manufacturers for premium gear at wholesale prices.",
    icon: "/franchise/equipment-icon.png",
  },
  {
    title: "Software & Ops Support",
    description:
      "Proprietary gym management software and streamlined workflows for maximum efficiency.",
    icon: "/franchise/software-icon.png",
  },
];

export default function FranchiseSupport() {
  return (
    <section
      className="
        py-16
        lg:py-24
        bg-[radial-gradient(circle_at_top_right,#C50D3E_0%,#000000_55%)]
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-14 h-[1px] bg-white/50" />
          <span className="text-white/70 uppercase tracking-wider text-sm">
            Why Partner With Us
          </span>
          <div className="w-14 h-[1px] bg-white/50" />
        </div>

        <h2
          className="
            text-center
            text-white
            font-bold
            text-4xl
            md:text-5xl
            lg:text-6xl
            mb-14
          "
        >
          Unmatched Support
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {supportCards.map((card, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-[#070707]
                p-6
                min-h-[250px]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  bg-[linear-gradient(135deg,#ff88ad_0%,#C50D3E_50%,#8A002B_100%)]
                "
              />

              <div className="relative z-10">

                <h3 className="text-white text-[28px] font-bold leading-tight">
                  {card.title}
                </h3>

                <div className="w-12 h-[2px] bg-white mt-3 mb-5" />

                <p className="text-white/75 text-[15px] leading-7">
                  {card.description}
                </p>

                <Image
                  src={card.icon}
                  alt={card.title}
                  width={55}
                  height={55}
                  className="
                    absolute
                    bottom-0
                    right-0
                    opacity-20
                    group-hover:opacity-40
                    transition-all
                    duration-300
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}