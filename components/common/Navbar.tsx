"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#010101] border-b border-[#7E7C7C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          
          <Link href="/home">
              <Image
                  src="/logo.png"
                  alt="3rd Gen Gym"
                  width={64}
                  height={64}
                  priority
                  className="object-contain"
                />
              </Link>

          
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link href="/home" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/career">Career</Link>
            <Link href="/franchise">Franchise</Link>
            <Link href="/contact" >Contact</Link>
          </nav>

         
          <div className="flex items-center gap-4">

            <button
              className="
                bg-[#C50D3E]
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                hover:opacity-90
              "
            >
              Join 3rd Gen
            </button>

            
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 py-4 text-white">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/career">Career</Link>
            <Link href="/franchise">Franchise</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}