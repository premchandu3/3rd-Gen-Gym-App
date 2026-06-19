"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "This is an excellent facility for workouts, equipped with first-class equipment and supported by highly trained trainers who motivate and guide us towards achieving our goals. A special thanks to Mr. Praveen for offering such a gym at a reasonable price.",
    name: "Agilesh GS",
    role: "Member, 3G Gym",
  },
  {
    quote:
      "The gym is clean, well-organized, and equipped with everything you need for effective training. The trainers are knowledgeable, supportive, and always focused on proper form and real progress.",
    name: "Arjun M.",
    role: "Fitness Enthusiast",
  },
  {
    quote:
      "3G Gym transformed my fitness journey. The community is amazing, the equipment is top-notch, and the trainers push you to be your best. Highly recommend!",
    name: "Priya S.",
    role: "Member, 3G Gym",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-[#C50D3E]" />
          <span className="text-[#C50D3E] font-medium">
            What Our Members Say
          </span>
          <div className="w-12 h-[2px] bg-[#C50D3E]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Real <span className="text-[#C50D3E]">Stories.</span>{" "}
          Honest <span className="text-[#C50D3E]">Results.</span>
        </h2>

        <div className="max-w-5xl mx-auto">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8F1F3] rounded-[40px] p-8 md:p-12 text-center border border-[#F0D8DF]"
            >
              <div className="text-[#C50D3E] text-7xl leading-none mb-6">
                ❝
              </div>

              <p className="text-gray-700 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
                {testimonials[current].quote}
              </p>

              <h4 className="font-bold italic text-2xl mt-8">
                {testimonials[current].name}
              </h4>

              <p className="text-gray-500 mt-2">
                {testimonials[current].role}
              </p>
            </motion.div>

          </AnimatePresence>

        </div>

        <div className="flex justify-center gap-5 mt-10">

          <button
            onClick={prevSlide}
            className="w-16 h-16 rounded-full bg-[#C50D3E] text-white text-2xl hover:scale-105 transition-all"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="w-16 h-16 rounded-full bg-[#C50D3E] text-white text-2xl hover:scale-105 transition-all"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}