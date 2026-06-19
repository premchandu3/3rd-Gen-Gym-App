"use client";

import { useState } from "react";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Choose the{" "}
            <span className="text-[#E01153]">Plan</span>{" "}
            That Fits Your{" "}
            <span className="text-[#E01153]">Goals</span>
          </h2>

          
          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <button
              onClick={() => setActiveTab("general")}
              className={`px-6 py-2 rounded-md border text-sm transition ${
                activeTab === "general"
                  ? "bg-[#E01153] text-white border-[#E01153]"
                  : "bg-transparent text-white border-gray-700"
              }`}
            >
              General Training
            </button>

            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-md border text-sm transition ${
                activeTab === "personal"
                  ? "bg-[#E01153] text-white border-[#E01153]"
                  : "bg-transparent text-white border-gray-700"
              }`}
            >
              Personal Training
            </button>

            <button
              onClick={() => setActiveTab("body")}
              className={`px-6 py-2 rounded-md border text-sm transition ${
                activeTab === "body"
                  ? "bg-[#E01153] text-white border-[#E01153]"
                  : "bg-transparent text-white border-gray-700"
              }`}
            >
              Body Transformation
            </button>

          </div>
        </div>

        
        {activeTab === "general" && (
          <div className="grid md:grid-cols-4 gap-4 mt-10">

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Monthly Plan
              </h3>

              <p className="text-white font-semibold">
                Rs. 1,499 (Regular)
              </p>

              <p className="text-white font-semibold mb-6">
                Rs. 999 (Student)
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                3 Month Plan
              </h3>

              <p className="text-white font-semibold">
                Rs. 4,499 (Regular)
              </p>

              <p className="text-white font-semibold mb-6">
                Rs. 2,499 (Student)
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
              Join Now
              </button>
            </div>

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                6 Month Plan
              </h3>

              <p className="text-white font-semibold">
                Rs. 7,999 (Regular)
              </p>

              <p className="text-white font-semibold mb-6">
                Rs. 4,999 (Student)
              </p>

              <ul className="space-y-2 text-sm text-white">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Annual Plan
              </h3>

              <p className="text-white font-semibold">
                Rs. 9,999 (Regular)
              </p>

              <p className="text-white font-semibold mb-6">
                Rs. 7,999 (Student)
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

          </div>
        )}

        
        {activeTab === "personal" && (
          <div className="grid md:grid-cols-3 gap-4 mt-10">

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Monthly Plan
              </h3>

              <p className="text-white font-semibold">Rs. 5,000</p>
              <p className="text-white mb-6">12 Sessions</p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Monthly Plan
              </h3>

              <p className="text-white font-semibold">Rs. 8,000</p>
              <p className="text-white mb-6">16 Sessions</p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">
                Monthly Plan
              </h3>

              <p className="text-white font-semibold">Rs. 10,000</p>
              <p className="text-white mb-6">24 Sessions</p>

              <ul className="space-y-2 text-sm text-white">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

          </div>
        )}

        
        {activeTab === "body" && (
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">

            <div className="bg-black border border-[#2A2A2A] rounded-xl p-5 hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] transition-all duration-300">
              <h3 className="text-white text-3xl font-bold mb-6">
                75 + 15 Days Plan
              </h3>

              <p className="text-white text-2xl font-semibold mb-6">
                Rs. 20,000
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">                
                Join Now
              </button>
            </div>

            <div className="bg-black hover:bg-gradient-to-b hover:from-[#FF005D] hover:to-[#F59AB5] border border-[#2A2A2A] rounded-xl p-5 transition-all duration-300">
              <h3 className="text-white text-3xl font-bold mb-6">
                130 + 20 Days Plan
              </h3>

              <p className="text-white text-2xl font-semibold mb-6">
                Rs. 35,000
              </p>

              <ul className="space-y-2 text-sm text-white">
                <li>✓ Steam bath - free</li>
                <li>✓ Diet chart - free</li>
                <li>✓ Workout plan - free</li>
              </ul>

              <button className="mt-6 bg-[#E01153] text-white px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black">
                Join Now
              </button>
            </div>

          </div>
        )}

        <p className="text-center text-gray-400 text-sm mt-8">
          Personal Training & other add-ons are not included.
          Student price applicable only with valid ID.
          Terms & conditions apply.
        </p>

      </div>
    </section>
  );
}