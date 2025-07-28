import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-16 pb-8 px-4 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-4">
            <span className="text-[#fcb900] text-3xl">🚕</span>
            <span>Aditya Tour & Travels</span>
          </div>
          <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
            <p>
              <span className="font-medium text-white">Address:</span> Mansarovar,
              Jaipur, Raj. (302020)
            </p>
            <p>
              <span className="font-medium text-white">Owner:</span>{" "}
              <span className="text-[#fcb900]">Navratan Sharma</span>
            </p>
            <p>
              <span className="font-medium text-white">Co-founder:</span>{" "}
              <span className="text-[#fcb900]">Umesh Kumar</span>
            </p>
            <p>
              <span className="font-medium text-white">Owner Email:</span>{" "}
              <a
                href="mailto:navratans210@gmail.com"
                className="underline hover:text-[#fcb900]"
              >
                navratans210@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Business Email:</span>{" "}
              <a
                href="mailto:adityatourist5099@gmail.com"
                className="underline hover:text-[#fcb900]"
              >
                adityatourist5099@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Mobile:</span>{" "}
              <a href="tel:8700343544" className="hover:text-[#fcb900]">
                8700343544
              </a>
              ,{" "}
              <a href="tel:8094852370" className="hover:text-[#fcb900]">
                8094852370
              </a>
            </p>
          </div>

          {/* Contact Icons */}
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

        {/* Why Choose Us */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>24/7 Reliable Taxi Services</li>
            <li>Professional & Experienced Drivers</li>
            <li>Affordable Rates with Transparent Pricing</li>
            <li>Easy Online Booking</li>
            <li>Well-maintained & Sanitized Vehicles</li>
            <li>Customer Satisfaction is Our Priority</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        © All rights reserved. Made by ||{" "}
        <span className="text-[#fcb900] font-medium">Lokesh Jangir</span>
      </div>
    </footer>
  );
}
