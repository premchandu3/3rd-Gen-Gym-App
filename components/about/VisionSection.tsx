import Image from "next/image";

export default function VisionSection() {
  const cards = [
    {
      title: "Our Vision",
      description:
        "We aim to create a community where every individual is empowered to become stronger, healthier, and more confident inside and out.",
      icon: "/about/vision-icon.png",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide expert guidance, personalized training, and a motivating environment that helps you achieve your fitness goals faster and sustainably.",
      icon: "/about/mission-icon.png",
    },
    {
      title: "Our Value",
      description:
        "We believe in dedication, integrity, and supporting every member's journey with the right mindset, tools, and encouragement.",
      icon: "/about/value-icon.png",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#120107] via-[#22040d] to-[#120107]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-center gap-6">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
                group
                bg-black
                text-white
                w-full
                md:w-[320px]
                h-[340px]
                px-8
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-300
                hover:bg-[#D90452]
                hover:-translate-y-2
              "
            >
              <div className="w-[58px] h-[58px] bg-[#D90452] group-hover:bg-black flex items-center justify-center mt-10 mb-6 transition-all duration-300">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={28}
                  height={28}
                />
              </div>

              <h3 className="text-[28px] font-bold mb-5">
                {card.title}
              </h3>

              <p className="text-[15px] leading-8 max-w-[240px]">
                {card.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}