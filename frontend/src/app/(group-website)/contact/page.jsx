'use client';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f6f4ef] p-6 md:p-10 rounded-3xl shadow-md">
        {/* Left: Contact Info Only */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
          <div className="text-sm text-black space-y-5">
            <div className="flex items-center gap-3">
              <MdEmail className="text-yellow-600 text-xl" />
              <a
                href="mailto:navratans210@gmail.com"
                className="hover:text-yellow-600 transition"
              >
                navratans210@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-yellow-600 text-xl" />
              <a
                href="mailto:adityatourist5099@gmail.com"
                className="hover:text-yellow-600 transition"
              >
                adityatourist5099@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-yellow-600 text-xl" />
              <div>
                <a href="tel:8700343544" className="hover:text-yellow-600 transition">
                  8700343544
                </a>
                ,{" "}
                <a href="tel:8094852370" className="hover:text-yellow-600 transition">
                  8094852370
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-yellow-600 text-xl" />
              <span>Mansarovar, Jaipur, Raj. (302020)</span>
            </div>
            <div className="flex gap-4 mt-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918700343544?text=Hello%2C%20I%20am%20interested%20in%20your%20taxi%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-[#25D366] text-white p-2 rounded-full"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:adityatourist5099@gmail.com"
                className="bg-red-600 hover:bg-[#fcb900] text-white p-2 rounded-full"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>

              {/* Phone */}
              <a
                href="tel:8700343544"
                className="bg-blue-600 hover:bg-[#fcb900] text-white p-2 rounded-full"
                title="Call Us"
              >
                <FaPhone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Larger Google Map */}
        <div className="w-full h-[500px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps?q=Mansarovar,+Jaipur,+Raj,+India&output=embed"
            className="w-full h-full rounded-xl border"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
