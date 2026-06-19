export default function Hero() {
  return (
    <section className="bg-black overflow-hidden">

      <div className="relative h-[560px] md:h-[620px] lg:h-[680px] flex flex-col justify-center items-center text-center px-6">

        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,13,62,0.28),transparent_70%)]" />

        <div className="hidden md:flex absolute left-12 bottom-20 flex-col gap-4 opacity-90">
          <div className="w-14 h-14 border-l-[10px] border-b-[10px] border-black rotate-[135deg]" />
          <div className="w-14 h-14 border-l-[10px] border-b-[10px] border-black rotate-[135deg]" />
          <div className="w-14 h-14 border-l-[10px] border-b-[10px] border-black rotate-[135deg]" />
        </div>

        <div className="hidden md:flex absolute right-12 bottom-20 flex-col gap-4 opacity-90">
          <div className="w-14 h-14 border-r-[10px] border-b-[10px] border-black rotate-45" />
          <div className="w-14 h-14 border-r-[10px] border-b-[10px] border-black rotate-45" />
          <div className="w-14 h-14 border-r-[10px] border-b-[10px] border-black rotate-45" />
        </div>

        <div className="relative z-10">

          <h2
            className="
              text-[40px]
              md:text-[64px]
              lg:text-[76px]
              font-black
              uppercase
              text-transparent
              [-webkit-text-stroke:1.5px_#6b0020]
            "
          >
            3RD GEN
          </h2>

          <h1
            className="
              mt-2
              font-black
              uppercase
              leading-[1.05]
              text-white
              text-[34px]
              md:text-[52px]
              lg:text-[62px]
            "
          >
            TRAIN <span className="text-[#C50D3E]">HARD</span> SEE{" "}
            <span className="text-[#C50D3E]">RESULTS.</span>

            <br />

            LIVE <span className="text-[#C50D3E]">STRONG.</span>
          </h1>

          <p
            className="
              mt-4
              max-w-xl
              mx-auto
              text-[#9B9B9B]
              text-sm
              md:text-base
              leading-relaxed
            "
          >
            Premium training plans, certified experts &
            a community built for success. Start your
            fitness transformation today.
          </p>

          <a
            href="#services"
            className="
              inline-flex
              items-center
              mt-6
              bg-[#C50D3E]
              hover:bg-[#a00b33]
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
            "
          >
            Get Started →
          </a>

        </div>

      </div>

      <div className="h-12 border-t border-[#C50D3E]/20 bg-black overflow-hidden flex items-center">
        <div className="whitespace-nowrap animate-pulse text-[#C50D3E] text-sm font-medium">
          Certified Trainers • Modern Equipment • Personalized Programs •
          Certified Trainers • Modern Equipment • Personalized Programs •
          Certified Trainers • Modern Equipment • Personalized Programs •
        </div>
      </div>

    </section>
  );
}