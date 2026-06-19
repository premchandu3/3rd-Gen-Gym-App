"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Whey Protein Powder",
    price: 800,
    image: "/products/whey-protein.png",
    description: "Supports muscle recovery and lean muscle growth.",
  },
  {
    id: 2,
    name: "Pre-Workout Formula",
    price: 1800,
    image: "/products/pre-workout.png",
    description: "Boosts energy, focus and workout performance.",
  },
  {
    id: 3,
    name: "Multivitamin Tablets",
    price: 500,
    image: "/products/multivitamin-tablets.png",
    description: "Daily nutrients to support overall health and immunity.",
  },
  {
    id: 4,
    name: "Gym Training T-Shirt",
    price: 400,
    image: "/products/gym-tshirt.png",
    description: "Breathable fabric designed for intense workouts.",
  },
  {
    id: 5,
    name: "Gym Jacket",
    price: 1600,
    image: "/products/gym-jacket.png",
    description: "Lightweight jacket for warm-ups and cool-downs.",
  },
  {
    id: 6,
    name: "Gym Gloves",
    price: 800,
    image: "/products/gym-gloves.png",
    description: "Improves grip and protects hands during lifts.",
  },
  {
    id: 7,
    name: "Skipping Rope",
    price: 200,
    image: "/products/skipping-rope.png",
    description: "Effective cardio tool for endurance and fat loss.",
  },
  {
    id: 8,
    name: "Protein Shaker",
    price: 250,
    image: "/products/protein-shaker.png",
    description: "Easy mixing for supplements on the go.",
  },
  {
    id: 9,
    name: "Foam Roller",
    price: 500,
    image: "/products/foam-roller.png",
    description: "Helps reduce muscle soreness and improve mobility.",
  },
  {
    id: 10,
    name: "MuscleTech Multivitamin",
    price: 800,
    image: "",
    description: "Daily multivitamin for support immunity and energy.",
  },
  {
    id: 11,
    name: "Fish Oil",
    price: 800,
    image: "",
    description: "Omega-3 supplement for heart and joint support.",
  },
  {
    id: 12,
    name: "Collagen",
    price: 1600,
    image: "",
    description: "Supports joint strength, skin health and recovery.",
  },
  {
    id: 13,
    name: "Alpino Muesli",
    price: 250,
    image: "",
    description: "High-fiber nutrition option for sustained energy.",
  },
  {
    id: 14,
    name: "Protein Bar",
    price: 130,
    image: "",
    description: "Convenient high-protein snack for quick recovery.",
  },
  {
    id: 15,
    name: "Creatine",
    price: 850,
    image: "",
    description: "Enhances strength, power and workout performance.",
  },
  {
    id: 16,
    name: "Essential Amino Acids",
    price: 1800,
    image: "",
    description: "Supports recovery and reduces muscle breakdown.",
  },
  {
    id: 17,
    name: "Fat Burner",
    price: 1400,
    image: "",
    description: "Supports metabolism and energy during workouts.",
  },
];

export default function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-center font-black text-[42px] mb-14">
          Our <span className="text-[#C50D3E]">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="
                        bg-white
                        border
                        border-gray-200
                        rounded-2xl
                        overflow-hidden
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-xl
                        "
            >
              <div className="relative h-[180px] bg-white">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>

                <p className="text-sm text-gray-600 mt-2 min-h-[48px]">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-xl">
                    Rs. {product.price}
                  </span>

                  <button
                        className="
                            bg-[#C50D3E]
                            text-white
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-[#a50b34]
                            hover:scale-105
                            cursor-pointer
                        "
                        >
                        Buy Now »
                        </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="w-8 h-8 border border-gray-300 text-gray-500"
          >
            ‹
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 text-sm ${
                currentPage === index + 1
                  ? "bg-[#C50D3E] text-white"
                  : "border border-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            className="w-8 h-8 border border-gray-300 text-gray-500"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}