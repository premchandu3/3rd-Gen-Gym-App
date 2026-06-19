"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you offer a free trial or demo session?",
    answer:
      "Yes. We offer a free trial session so you can experience our training environment before joining.",
  },
  {
    question: "How many days per week should I work out?",
    answer:
      "For most people, 3–5 workout sessions per week provide excellent results depending on goals and fitness level.",
  },
  {
    question: "Is there a separate program for women?",
    answer:
      "Yes. We offer specialized fitness programs tailored specifically for women.",
  },
  {
    question: "How can I enquire or sign up?",
    answer:
      "You can contact us through our website, visit our gym, or call our support team.",
  },
  {
    question: "What should I bring on my first day?",
    answer:
      "Bring comfortable workout clothes, a water bottle, and a positive mindset.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="flex justify-center mb-4">
          <Image
            src="/faq-icon.png"
            alt="FAQ"
            width={60}
            height={60}
          />
        </div>

        <h2 className="text-center text-5xl font-extrabold mb-12">
          Frequently Asked{" "}
          <span className="text-[#C50D3E]">
            Questions
          </span>
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
                className={`w-full flex items-center justify-between px-6 py-5 text-left transition cursor-pointer ${
                  openIndex === index
                    ? "bg-[#C50D3E] text-white"
                    : "bg-white text-black"
                }`}
              >
                <span className="font-medium">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp size={22} />
                ) : (
                  <ChevronDown size={22} />
                )}
              </button>

              {openIndex === index && (
                <div className="bg-[#C50D3E] text-white px-6 pb-5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        <p className="text-center text-3xl font-semibold mt-12">
          Still have questions? Contact us and we'll be happy to help.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/contact"
            className="bg-[#C50D3E] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Contact Us →
          </Link>
        </div>

      </div>
    </section>
  );
}