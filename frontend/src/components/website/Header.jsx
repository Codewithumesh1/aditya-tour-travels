'use client';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#fcb900] text-black text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap font-medium">
          <div className="flex items-center gap-1 bg-black/10 px-2 py-[2px] rounded-md">
            <MdPhone className="text-lg" /> (+91) 8700343544
          </div>
          <div className="flex items-center gap-x-6 flex-wrap">
            <span className="flex items-center gap-1">
              <MdEmail className="text-lg" /> adityatourist5099@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <MdLocationOn className="text-lg" />
              Mansarovar, Jaipur, Raj.(302020)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white sticky top-0 z-50 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 bg-white rounded-xl md:rounded-3xl shadow-md flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 text-xl font-bold">
              <img src="/serv3.png" alt="Taxi" className="w-10 h-10" />
              Aditya Tour & Travels
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <Link href={"/"}>
              <span className="cursor-pointer flex items-center gap-1">
                Home <IoIosArrowDown className="text-xs" />
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="cursor-pointer">About Us</span>
            </Link>

            <Link href={"/contact"}>
              <span className="cursor-pointer">Contact</span>
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={"/booknow"}>
              <button className="border cursor-pointer border-black text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoClose /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white border-t rounded-b-2xl shadow-md">
            <nav className="flex flex-col gap-4 text-sm pt-4">
              <Link href={"/"}><span className="cursor-pointer">Home</span></Link>
              <Link href={"/about"}><span className="cursor-pointer">About Us</span></Link>
              <Link href={"/contact"}><span className="cursor-pointer">Contact</span></Link>

              <div className="flex flex-col gap-2 mt-4">
                <Link href={"/booknow"}>
                  <button className="border cursor-pointer border-black text-black px-4 py-2 rounded-md w-full">
                    Book Now
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
