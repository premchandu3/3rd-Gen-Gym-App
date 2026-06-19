"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export default function FranchiseContact() {
  return (
    <section className="bg-white py-16 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          <div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#C50D3E] uppercase text-sm font-medium tracking-wide">
                Get In Touch
              </span>
              <div className="w-14 h-[1px] bg-[#C50D3E]" />
            </div>

            <h2 className="font-bold leading-tight text-[34px] sm:text-[42px] lg:text-[64px]">
              <span className="text-black">
                Let's Build Your
              </span>
              <br />
              <span className="text-[#C50D3E]">
                Fitness Goals
              </span>
              <br />
              <span className="text-black">
                Together.
              </span>
            </h2>

            <div className="mt-10 lg:mt-16 space-y-8">

              <div className="flex gap-4">
                <MapPin
                  size={24}
                  className="text-[#C50D3E] mt-1 shrink-0"
                />

                <div>
                  <h4 className="font-bold text-[20px] text-black">
                    Head Office
                  </h4>

                  <p className="text-[#777777] mt-2 leading-relaxed">
                    No.10, Ganesh Nagar,
                    <br />
                    Alamathi Main Road,
                    <br />
                    Vellanur, Chennai - 600062
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  size={22}
                  className="text-[#C50D3E] mt-1 shrink-0"
                />

                <div>
                  <h4 className="font-bold text-[20px] text-black">
                    Email Support
                  </h4>

                  <p className="text-[#777777] mt-2 break-all">
                    3rdgenerationfitnessstudio@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  size={22}
                  className="text-[#C50D3E] mt-1 shrink-0"
                />

                <div>
                  <h4 className="font-bold text-[20px] text-black">
                    Let's Talk
                  </h4>

                  <p className="text-[#777777] mt-2">
                    +91 8190895694
                  </p>

                  <p className="text-[#777777]">
                    +91 8778359643
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div
            className="
              w-full
              min-w-0
              rounded-[24px]
              p-5 sm:p-6 lg:p-10
              bg-[radial-gradient(circle_at_top_left,_#8A0025,_#000000_70%)]
              text-white
            "
          >
            <h3 className="text-[36px] md:text-4xl font-bold leading-tight">
              Start Your
              <br />
              Application
            </h3>

            <p className="text-white/80 mt-4 leading-relaxed">
              Fill out the form below and our franchise
              manager will contact you within 24 hours.
            </p>

            <form className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="
                  w-full
                  bg-transparent
                  border border-white/30
                  rounded-lg
                  px-4 py-3
                  outline-none
                  placeholder:text-white/60
                "
              />

              <div className="flex gap-2">

                <select
                  className="
                    w-[80px]
                    bg-transparent
                    border border-white/30
                    rounded-lg
                    px-2
                    text-white
                  "
                >
                  <option className="text-black">
                    +91
                  </option>
                </select>

                <input
                  type="text"
                  placeholder="Contact"
                  className="
                    flex-1
                    min-w-0
                    bg-transparent
                    border border-white/30
                    rounded-lg
                    px-4 py-3
                    outline-none
                    placeholder:text-white/60
                  "
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  bg-transparent
                  border border-white/30
                  rounded-lg
                  px-4 py-3
                  outline-none
                  placeholder:text-white/60
                "
              />

              <input
                type="text"
                placeholder="City"
                className="
                  w-full
                  bg-transparent
                  border border-white/30
                  rounded-lg
                  px-4 py-3
                  outline-none
                  placeholder:text-white/60
                "
              />

              <input
                type="text"
                placeholder="Investment Capacity"
                className="
                  w-full
                  bg-transparent
                  border border-white/30
                  rounded-lg
                  px-4 py-3
                  outline-none
                  placeholder:text-white/60
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[#C50D3E]
                  hover:bg-[#d9134a]
                  transition
                  py-3
                  rounded-lg
                  font-semibold
                "
              >
                Submit Enquiry
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}