import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      image: "/home/services/weight-gain.png",
    },
    {
      image: "/home/services/group-classes.png",
    },
    {
      image: "/home/services/strength-training.png",
    },
    {
      image: "/home/services/weight-loss.png",
    },
    {
      image: "/home/services/functional-training.png",
    },
    {
      image: "/home/services/personal-training.png",
    },
    {
      image: "/home/services/contest-preparation.png",
    },
    {
      image: "/home/services/nutrition-guidance.png",
    },
    {
      image: "/home/services/zumba.png",
    },
  ];

  return (
    <section id="services" className="bg-white pt-12 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-start mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
              <span className="text-[#C50D3E] uppercase text-sm font-medium">
                Services
              </span>
              <div className="w-10 h-[2px] bg-[#C50D3E]" />
            </div>

            <h2 className="text-center lg:text-left text-4xl lg:text-6xl font-bold leading-tight">
              Programs Designed
              <br />
              to <span className="text-[#C50D3E]">Transform You</span>
            </h2>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-base leading-7">
              From strength to fat loss, our expert-led programs help
              you train smarter and achieve real results at any
              fitness level.
            </p>

            <a
              href="/about"
              className="inline-block mt-6 bg-[#C50D3E] text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Know More →
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-b-[100%] z-20" />

        <div className="hidden lg:block overflow-hidden">
          <div className="services-slider flex w-max">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="
                  relative
                  w-[25vw]
                  min-w-[25vw]
                  h-[320px]
                  flex-shrink-0
                  overflow-hidden
                  group
                  cursor-pointer
                "
              >
                <Image
                  src={service.image}
                  alt="service"
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    group-hover:bg-black/5
                    transition-all
                    duration-500
                  "
                />
              </div>
            ))}
          </div>
        </div>

        
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative min-w-[220px] h-[320px] snap-center flex-shrink-0"
            >
              <Image
                src={service.image}
                alt="service"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[100%] z-20" />
      </div>
    </section>
  );
}