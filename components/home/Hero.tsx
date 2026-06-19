export default function Hero() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="relative h-[760px] md:h-[780px] lg:h-[850px] flex flex-col justify-center items-center text-center px-4">

        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,13,62,0.22),transparent_70%)]" />

        
        <div className="hidden md:flex absolute left-0 bottom-0 flex-col gap-6 opacity-90">
          <div className="w-28 h-28 border-l-[20px] border-b-[20px] border-black rotate-[135deg]" />
          <div className="w-28 h-28 border-l-[20px] border-b-[20px] border-black rotate-[135deg] -mt-8" />
          <div className="w-28 h-28 border-l-[20px] border-b-[20px] border-black rotate-[135deg] -mt-8" />
        </div>

        
        <div className="hidden md:flex absolute right-0 bottom-0 flex-col gap-6 opacity-90">
          <div className="w-28 h-28 border-r-[20px] border-b-[20px] border-black rotate-45" />
          <div className="w-28 h-28 border-r-[20px] border-b-[20px] border-black rotate-45 -mt-8" />
          <div className="w-28 h-28 border-r-[20px] border-b-[20px] border-black rotate-45 -mt-8" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4">

          
          <h2
            className="
              text-[42px]
              md:text-[70px]
              lg:text-[90px]
              font-black
              uppercase
              leading-none
              text-transparent
              [-webkit-text-stroke:2px_#C50D3E]
            "
          >
            3RD GEN
          </h2>

          
          <h1
            className="
              mt-6
              font-black
              uppercase
              leading-[0.95]

              text-[34px]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[56px]
              xl:text-[64px]
            "
          >
            
            <div className="hidden md:block">
              <div className="whitespace-nowrap">
                <span className="text-white">TRAIN </span>
                <span className="text-[#C50D3E]">HARD</span>
                <span className="text-white"> SEE </span>
                <span className="text-[#C50D3E]">RESULTS.</span>
              </div>

              <div className="mt-1">
                <span className="text-white">LIVE </span>
                <span className="text-[#C50D3E]">STRONG.</span>
              </div>
            </div>

            
            <div className="block md:hidden">
              <div>
                <span className="text-white">TRAIN </span>
                <span className="text-[#C50D3E]">HARD</span>
              </div>

              <div>
                <span className="text-white">SEE </span>
                <span className="text-[#C50D3E]">RESULTS.</span>
              </div>

              <div>
                <span className="text-white">LIVE </span>
                <span className="text-[#C50D3E]">STRONG.</span>
              </div>
            </div>
          </h1>

          
          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-[#9B9B9B]
              text-[16px]
              md:text-[22px]
              leading-relaxed
            "
          >
            Premium training plans, certified experts & a community built for
            success, start your fitness transformation today.
          </p>

          
          <a
            href="#services"
            className="
              inline-flex
              items-center
              mt-8
              bg-[#C50D3E]
              hover:bg-[#a00b33]
              text-white
              px-10
              py-4
              rounded-2xl
              font-bold
              text-xl
              transition-all
            "
          >
            Get Started →
          </a>
        </div>
      </div>

      
      <div className="h-14 border-t border-[#C50D3E]/20 bg-black overflow-hidden flex items-center">
        <div className="animate-marquee flex whitespace-nowrap text-[#C50D3E] text-[18px] font-bold tracking-wide">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-10">
              Certified Trainers • Modern Equipment • Personalized Programs •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

