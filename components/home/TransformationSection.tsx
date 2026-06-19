import Image from "next/image";

export default function TransformationSection() {
  const transformations = [
    {
      image: "/home/transformations/male-before-after.png",
      title: "-14 kg in 12 Weeks",
      subtitle: "Strength Training + Nutrition Plan",
    },
    {
      image: "/home/transformations/female-before-after.png",
      title: "Abs Built in 8 Weeks",
      subtitle: "Personal Training + Core Workouts",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#3B0014] via-black to-[#3B0014] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Real{" "}
            <span className="text-[#C50D3E]">
              People.
            </span>{" "}
            Real{" "}
            <span className="text-[#C50D3E]">
              Results.
            </span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm lg:text-lg">
            Transformations That Inspire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {transformations.map((item) => (
            <div
              key={item.title}
              className="bg-black overflow-hidden"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-3 left-3 bg-[#C50D3E] text-white px-3 py-1 rounded text-sm">
                  Before
                </div>

                <div className="absolute top-3 right-3 bg-[#C50D3E] text-white px-3 py-1 rounded text-sm">
                  After
                </div>
              </div>

              <div className="bg-black py-4 text-center">
                <h3 className="text-white text-xl lg:text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm lg:text-lg mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}