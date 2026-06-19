"use client";

const jobs = [
  {
    id: 1,
    title: "Front Desk Executive",
    vacancies: 3,
    salary: "₹12,000 – ₹15,000 + Incentives",
  },
  {
    id: 2,
    title: "Manager",
    vacancies: 1,
    salary: "₹25,000 + Incentives",
  },
  {
    id: 3,
    title: "Head Coach",
    vacancies: 1,
    salary: "₹18,000 + Incentives",
  },
  {
    id: 4,
    title: "Senior Coach",
    vacancies: 2,
    salary: "₹15,000 + Incentives",
  },
  {
    id: 5,
    title: "Trainer",
    vacancies: 5,
    salary: "₹12,000 + Incentives",
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-6">

        <h2 className="text-center font-black text-[42px] mb-12">
          Open <span className="text-[#C50D3E]">Positions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-[1050px] mx-auto">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                group
                relative
                border
                border-gray-300
                rounded-2xl
                p-6
                bg-white
                transition-all
                duration-300
                hover:bg-[#C50D3E]
                hover:text-white
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div
                className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  border
                  flex
                  items-center
                  justify-center
                  bg-white
                  text-black
                  transition-all
                  duration-300
                  group-hover:text-[#C50D3E]
                "
              >
                ↗
              </div>

              <h3 className="text-[20px] font-bold mb-5">
                {job.title}
              </h3>

              <div className="space-y-1 text-sm">
                <p>Morning shift : 5.00 AM - 2.00 PM</p>
                <p>Evening shift : 2.00 PM - 11.00 PM</p>
                <p>Vacancies : {job.vacancies}</p>
                <p>Salary : {job.salary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          <button className="w-8 h-8 border rounded text-gray-400">
            ‹
          </button>

          <button className="w-8 h-8 bg-[#C50D3E] text-white rounded">
            1
          </button>

          <button className="w-8 h-8 border rounded text-gray-400">
            ›
          </button>
        </div>

      </div>
    </section>
  );
}