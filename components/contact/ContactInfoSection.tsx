import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-11 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">

          <div className="space-y-8">

            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin
                  size={22}
                  className="text-[#C50D3E]"
                />
                <h3 className="text-[24px] sm:text-[28px] font-bold text-black">
                  Location
                </h3>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                No. 10, Ganesh Nagar,
                Alamathi Main Road,
                Vellanur, Chennai - 600062
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail
                  size={22}
                  className="text-[#C50D3E]"
                />
                <h3 className="text-[24px] sm:text-[28px] font-bold text-black">
                  Email
                </h3>
              </div>

              <p className="text-gray-600 text-base sm:text-lg break-all">
                3rdgenerationfitnessstudio@gmail.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone
                  size={22}
                  className="text-[#C50D3E]"
                />
                <h3 className="text-[24px] sm:text-[28px] font-bold text-black">
                  Contact
                </h3>
              </div>

              <p className="text-gray-600 text-base sm:text-lg">
                +91 8190895694
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                +91 8778359643
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock
                  size={22}
                  className="text-[#C50D3E]"
                />
                <h3 className="text-[24px] sm:text-[28px] font-bold text-black">
                  Open Hours
                </h3>
              </div>

              <p className="text-gray-600 text-base sm:text-lg">
                Monday - Sunday
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                5 AM - 11 PM
              </p>
            </div>

          </div>

          <div className="w-full min-w-0 border border-gray-300 rounded-2xl p-4 sm:p-6">

            <h2 className="text-center text-[34px] sm:text-[48px] font-bold text-[#C50D3E] mb-6">
              Get In Touch
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full h-12 border border-gray-300 rounded-md px-4"
              />

              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  placeholder="+91"
                  className="w-[80px] h-12 border border-gray-300 rounded-md px-3"
                />

                <input
                  type="text"
                  placeholder="Contact"
                  className="flex-1 min-w-0 h-12 border border-gray-300 rounded-md px-4"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="w-full h-12 border border-gray-300 rounded-md px-4"
              />

              <input
                type="text"
                placeholder="Location"
                className="w-full h-12 border border-gray-300 rounded-md px-4"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none"
              />

              <button
                type="submit"
                className="
                  mx-auto
                  block
                  bg-[#C50D3E]
                  text-white
                  px-10
                  py-2.5
                  rounded-full
                  font-semibold
                  hover:bg-[#a80a34]
                  transition
                "
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}