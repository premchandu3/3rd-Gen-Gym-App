import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Infrastructure() {
  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#C50D3E] uppercase text-[14px] md:text-[16px] tracking-wide">
                Infrastructure
              </span>

              <div className="w-14 h-[2px] bg-[#C50D3E]" />
            </div>

            <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-extrabold leading-[1.05]">
              <span className="text-[#C50D3E]">
                Explore
              </span>{" "}
              Our
              <br />
              Gym Space
            </h2>

            <p className="mt-5 text-gray-500 text-[16px] md:text-[18px] leading-7 md:leading-8 max-w-[430px]">
              Our gym combines modern infrastructure,
              spacious layouts, and a motivating
              environment to help you train comfortably
              and stay focused on your goals.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#C50D3E] text-[#C50D3E] flex items-center justify-center hover:bg-[#C50D3E] hover:text-white transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#C50D3E] text-[#C50D3E] flex items-center justify-center hover:bg-[#C50D3E] hover:text-white transition"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#C50D3E] text-[#C50D3E] flex items-center justify-center hover:bg-[#C50D3E] hover:text-white transition"
              >
                <FaInstagram size={14} />
              </a>

            </div>

          </div>

          <div className="relative flex justify-center lg:justify-end">

            <div
              className="
                relative
                w-full
                max-w-[520px]
                h-[320px]
                sm:h-[380px]
                md:h-[440px]
                overflow-hidden
                [clip-path:polygon(16%_0%,100%_0%,84%_100%,0%_100%)]
              "
            >
              <Image
                src="/about/infrastructure.png"
                alt="Gym Infrastructure"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div
              className="
                absolute
                right-[10px]
                sm:right-[20px]
                md:right-[35px]
                bottom-[10px]
                sm:bottom-[15px]
                md:bottom-[20px]
                bg-[#C50D3E]
                rotate-[12deg]
                px-3
                py-4
                shadow-xl
              "
            >
              <span
                className="
                  text-white
                  font-bold
                  uppercase
                  tracking-wider
                  text-[12px]
                  md:text-[14px]
                "
                style={{ writingMode: "vertical-rl" }}
              >
                INFRASTRUCTURE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}