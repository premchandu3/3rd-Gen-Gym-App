import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/gym-footer-bg.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-[#010101]/85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          
          <div>
            <Image
              src="/logo.png"
              alt="3rd Generation Gym"
              width={100}
              height={100}
              className="mb-4"
            />

            <h2 className="font-bold text-[24px] md:text-[32px] leading-tight">
            Let's Transform
              <br />
              Your Life
            </h2>

            <div className="mt-8">
              <h4 className="font-semibold text-[18px] mb-4">
                Follow Us
              </h4>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#C50D3E] flex items-center justify-center hover:scale-110 transition-all"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#C50D3E] flex items-center justify-center hover:scale-110 transition-all"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#C50D3E] flex items-center justify-center hover:scale-110 transition-all"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold text-[20px] md:text-[24px] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#D9D9D9]">
              <li>
                <Link href="/home" className="hover:text-[#C50D3E] transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#C50D3E] transition-colors">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#C50D3E] transition-colors">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-[#C50D3E] transition-colors">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/career" className="hover:text-[#C50D3E] transition-colors">
                  Career
                </Link>
              </li>

              <li>
                <Link href="/franchise" className="hover:text-[#C50D3E] transition-colors">
                  Franchise
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#C50D3E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-[20px] md:text-[24px] mb-5">
              Our Programs
            </h3>

            <ul className="space-y-3 text-[#D9D9D9]">
              <li>Strength Training</li>
              <li>Weight Loss Program</li>
              <li>Functional Training</li>
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
              <li>Zumba Classes</li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-[20px] md:text-[24px] mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-[#D9D9D9]">

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#C50D3E]" />
                <div>
                  <p>+91 8190895694</p>
                  <p>+91 8778359643</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#C50D3E]" />
                <p className="break-all">
                  3rdgenerationfitnessstudio@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C50D3E]" />
                <p>
                  No.10, Ganesh Nagar,
                  <br />
                  Alamadhi Main Road,
                  <br />
                  Vellanur, Chennai - 600062
                </p>
              </div>

            </div>
          </div>

        </div>

        
        <div className="border-t border-[#7E7C7C]/30 mt-12 pt-6 text-center text-[14px] md:text-[16px] text-[#D9D9D9]">
          © 2026 3rd Generation Gym. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}