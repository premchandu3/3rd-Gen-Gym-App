import Image from "next/image";
import Link from "next/link";

export default function FitnessJourney() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-b
            from-[#D5004F]
            to-[#F22A69]
            min-h-[650px]
            lg:min-h-[320px]
          "
        >

          
          <div className="relative z-10 p-10 lg:p-16">

            <h2 className="text-[32px] lg:text-[60px] font-bold leading-tight">
              <span className="text-black">
                Start Your Fitness
                <br />
                Journey
              </span>
              <span className="text-white"> Today.</span>
            </h2>

            <p className="mt-6 text-black text-[18px] leading-9 max-w-[360px]">
              Train with expert coaches,
              modern equipment, and
              programs designed to deliver
              real results.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                mt-8
                bg-black
                text-white
                px-8
                py-4
                rounded-full
                text-lg
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Contact Us 
            </Link>

          </div>

         
          <div
            className="
              absolute
              bottom-0
              right-0
              lg:right-8
            "
          >
            <Image
              src="/home/fitness-model.png"
              alt="Fitness Model"
              width={700}
              height={600}
              priority
              className="
                w-[300px]
                sm:w-[350px]
                lg:w-[460px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}