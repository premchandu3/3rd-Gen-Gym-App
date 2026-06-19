import Image from "next/image";

export default function ApplyNow() {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          <div>

            <div className="relative w-full h-[220px] sm:h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/career/apply-now.png"
                alt="Gym Team"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 lg:mt-8">

              <h3 className="text-[28px] sm:text-[36px] font-bold mb-3">
                Address
              </h3>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                No 10, Ganesh Nagar,
                <br />
                Alamathi Main Road,
                <br />
                Vellanur, Chennai - 600062
              </p>

              <h3 className="text-[28px] sm:text-[36px] font-bold mt-8 mb-3">
                Contact
              </h3>

              <p className="text-gray-600 text-base sm:text-lg">
                +91 8190895694
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                +91 8778359643
              </p>

              <h3 className="text-[28px] sm:text-[36px] font-bold mt-8 mb-3">
                E-mail
              </h3>

              <p className="text-gray-600 text-base sm:text-lg break-all">
                3rdgenerationfitnessstudio@gmail.com
              </p>

              <p className="text-gray-500 mt-8 leading-relaxed">
                Immediate joining preferred.
                <br />
                Salary based on experience and performance.
              </p>

            </div>
          </div>

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-[#edd7e0]
              shadow-md
              p-5 sm:p-6 lg:p-8
              w-full
              min-w-0
            "
          >
            <h2 className="text-center text-[34px] sm:text-[42px] lg:text-[56px] font-black mb-8">
              <span className="text-[#C50D3E]">
                Apply Now !
              </span>
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="
                  w-full
                  border
                  rounded-md
                  px-4
                  py-3
                  outline-none
                "
              />

              <div className="flex gap-2">

                <input
                  type="text"
                  value="+91"
                  readOnly
                  className="
                    w-[75px]
                    border
                    rounded-md
                    px-3
                    py-3
                    shrink-0
                  "
                />

                <input
                  type="tel"
                  placeholder="Contact"
                  className="
                    flex-1
                    min-w-0
                    border
                    rounded-md
                    px-4
                    py-3
                    outline-none
                  "
                />

              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="
                  w-full
                  border
                  rounded-md
                  px-4
                  py-3
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Job Position"
                className="
                  w-full
                  border
                  rounded-md
                  px-4
                  py-3
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Location"
                className="
                  w-full
                  border
                  rounded-md
                  px-4
                  py-3
                  outline-none
                "
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="
                  w-full
                  border
                  rounded-md
                  px-4
                  py-3
                  outline-none
                  resize-none
                "
              />

              <input
                type="file"
                className="
                  w-full
                  border
                  rounded-md
                  px-3
                  py-2
                "
              />

              <div className="flex justify-center pt-2">

                <button
                  type="submit"
                  className="
                    bg-[#C50D3E]
                    text-white
                    px-10
                    sm:px-12
                    py-3
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-[#a50b34]
                  "
                >
                  Submit
                </button>

              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}