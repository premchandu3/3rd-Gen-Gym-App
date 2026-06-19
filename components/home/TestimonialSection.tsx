export default function TestimonialSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[#C50D3E]" />
          <span className="text-[#C50D3E] font-medium">
            What Our Members Say
          </span>
          <div className="w-12 h-[2px] bg-[#C50D3E]" />
        </div>

        
        <h2 className="text-5xl font-bold text-center mb-12">
          Real <span className="text-[#C50D3E]">Stories.</span>{" "}
          Honest <span className="text-[#C50D3E]">Results.</span>
        </h2>

        
        <div className="max-w-xl mx-auto bg-[#F8F1F3] rounded-3xl p-10 text-center">

          <div className="text-[#C50D3E] text-6xl mb-6">
            ❝
          </div>

          <p className="text-gray-700 leading-relaxed">
            This is an excellent facility for workouts,
            equipped with first-class equipment and
            supported by highly trained trainers who
            motivate and guide us towards achieving
            our goals. A special thanks to Mr. Praveen
            for offering such a gym at a reasonable price.
          </p>

          <h4 className="font-bold text-lg mt-6">
            Agilesh GS
          </h4>

        </div>

        
        <div className="flex justify-center gap-4 mt-8">

          <button className="w-12 h-12 rounded-full bg-[#C50D3E] text-white">
            ←
          </button>

          <button className="w-12 h-12 rounded-full bg-[#C50D3E] text-white">
            →
          </button>

        </div>

      </div>
    </section>
  );
}