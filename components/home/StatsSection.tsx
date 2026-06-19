import Image from "next/image";

export default function StatsSection() {
  const stats = [
    {
      number: "1000+",
      label: "People Trained",
    },
    {
      number: "09+",
      label: "Years Experience",
    },
    {
      number: "100+",
      label: "Lives Transformed",
    },
    {
      number: "10+",
      label: "Awards &\nAchievements",
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="hidden md:block relative">

          <Image
            src="/home/stats-bg.png"
            alt="Stats Background"
            width={1600}
            height={300}
            className="w-full h-auto"
            priority
          />

          <div className="absolute inset-0 grid grid-cols-4 place-items-center px-8">

            {stats.map((item) => (
              <div
                key={item.label}
                className="text-center text-white"
              >
                <h3 className="text-5xl lg:text-6xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-2 text-base lg:text-lg leading-tight whitespace-pre-line px-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        <div className="md:hidden flex justify-center">

          <Image
            src="/home/stats-bg-mobilev.png"
            alt="Stats Mobile"
            width={340}
            height={780}
            priority
            className="w-[85%] max-w-[340px] h-auto"
          />

        </div>

      </div>
    </section>
  );
}