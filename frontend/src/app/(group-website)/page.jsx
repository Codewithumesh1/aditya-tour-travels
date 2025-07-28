import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Link from 'next/link';

export default function () {

  const steps = [
    {
      number: "01",
      title: "Find a Taxi",
      desc: "Submit your request to begin the process of finding a suitable taxi near your location.",
    },
    {
      number: "02",
      title: "Wait for Confirmation",
      desc: "Please allow up to 24 hours for our team to assign a taxi. A company representative will call you to confirm the booking details.",
    },
    {
      number: "03",
      title: "Meet Your Driver",
      desc: "After confirmation, you'll receive driver details and can track their arrival in real-time.",
    },
    {
      number: "04",
      title: "Enjoy Your Trip",
      desc: "Relax and enjoy a safe, comfortable ride to your destination.",
    },
  ];

  return (
    <div>
      {/* top section */}
      <section
        className="relative w-full bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/topsec.png')" }}
      >
        {/* Optional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/0 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          {/* Left - Content Box */}
          <div className="flex-1 w-full bg-[#fcb900] rounded-tr-[100px] rounded-br-[200px] px-8 py-12 text-center md:text-left shadow-lg">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight tracking-tight">
                Join the Ride-<br className="hidden md:block" />
                Sharing Revolution
              </h1>

              <p className="text-gray-900 text-base md:text-lg max-w-md mb-8 mx-auto md:mx-0 leading-relaxed">
                Suspendisse ultrice gravida dictum fusce placerat ultricies{' '}
                <span className="font-semibold underline text-black">
                  integer quis auctor elit sed vulputate mi sit.
                </span>{' '}
                Auctor eu augue ut lectus arcu bibendum at varius vel.
              </p>

              {/* CTA Button */}
              <Link href={'/booknow'}>
                <button className="bg-black cursor-pointer text-white text-lg px-8 py-3 rounded-full hover:bg-gray-900 transition duration-300 shadow-md">
                  Find A Taxi <IoIosArrowForward className="inline ml-2" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Car Image */}
          <div className="flex-1 flex justify-center w-full">
            <img
              src="/banner2.png"
              alt="Taxi Illustration"
              className="w-full max-w-xl md:max-w-[520px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* 


    2 section  */}


      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How To{" "}
            <span className="text-[#fcb900] relative inline-block">
              Get Started
              <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#fcb900] rounded-full opacity-60 rotate-[-2deg]"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-16">
            Suspendisse ultrice gravida dictum fusce placerat ultricies fusce integer quis auctor elit sed vulputate mi sit.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Top Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#fcb900] text-white font-bold text-lg px-4 py-2 rounded-t-md rounded-b-[18px] z-10">
                  {step.number}
                </div>

                {/* Box */}
                <div className="bg-gray-50 p-6 pt-12 rounded-md text-center shadow-sm min-h-[200px]">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-48px] transform -translate-y-1/2 text-gray-400 z-20">
                    <FaArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* third section */}


      <section className="bg-[#fff4d6] py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the Ride with{" "}
            <span className="text-[#fcb900] relative inline-block">
              Us
              <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#fcb900] rounded-full opacity-60 rotate-[-2deg]" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-10">
            Book your ride quickly and easily. Start your journey with Aditya Tour & Travels today.
          </p>

          {/* Book Now Button */}
          <Link href="/booknow">
            <div className="bg-[#fcb900] text-black text-lg font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition cursor-pointer">
              Book a Ride
            </div>
          </Link>
        </div>
      </section>



      <section className="bg-[#f9f7f2] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="\delivery_taxi_13.jpg" // Replace with your image path
              alt="Ride Sharing"
              className="max-w-[500px] md:max-w-[600px] rounded-full w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elevate Your Taxi Experience{" "}
              <span className="text-[#fcb900] relative inline-block">
                With Ride-
                <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#fcb900] rounded-full opacity-60 rotate-[-2deg]"></span>
              </span>
              Sharing.
            </h2>
            <p className="text-gray-600 mb-8">
              Discover a smarter, safer, and more affordable way to travel. Our ride-sharing platform connects you with reliable drivers and modern vehicles for every journey.
            </p>

            {/* Feature Boxes */}
            <div className="space-y-6">
              {/* Safety First */}
              <div className="bg-white p-5 rounded-md shadow-sm flex items-start gap-4">
                <FaCheckCircle className="text-[#fcb900] mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Safety First</h3>
                  <p className="text-sm text-gray-600">
                    Your safety is our top priority. Every driver is verified, and each ride is GPS-tracked for peace of mind.
                  </p>
                </div>
              </div>

              {/* Affordable Prices */}
              <div className="bg-white p-5 rounded-md shadow-sm flex items-start gap-4">
                <FaCheckCircle className="text-[#fcb900] mt-1 text-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Affordable Prices</h3>
                  <p className="text-sm text-gray-600">
                    Enjoy transparent pricing with no hidden fees. Get to your destination without breaking the bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* fourth section */}


      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Side - Single Image */}
          <div className="w-full">
            <img
              src="/whychoose.jpg" // Change to your actual image path
              alt="Why Choose Us"
              className="rounded-xl w-full h-auto object-cover "
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="text-[#fcb900] relative inline-block">
                Choose Us?
                <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#fcb900] rounded-full opacity-60 rotate-[-2deg]" />
              </span>
            </h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              We go beyond just rides. From quick bookings and secure pickups to
              friendly support and multiple pickup points — we make your journey
              better, every time.
            </p>

            {/* Feature Boxes (8 items manually written) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Expert Guidance
                </span>
              </div>

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Free Customer Support
                </span>
              </div>

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Affordable Prices
                </span>
              </div>

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Easy & Fast Booking
                </span>
              </div>

              {/* <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Live Ride Tracking
                </span>
              </div> */}

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Verified Drivers
                </span>
              </div>

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  Multiple Pickup Locations
                </span>
              </div>

              <div className="bg-[#f9f7f2] hover:bg-[#fcb900] hover:rotate-[-1.5deg] transition duration-300 px-4 py-3 rounded-md shadow-md flex items-center gap-3 group">
                <FaCheckCircle className="text-[#fcb900] group-hover:text-white transition" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-white transition">
                  No More Waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
