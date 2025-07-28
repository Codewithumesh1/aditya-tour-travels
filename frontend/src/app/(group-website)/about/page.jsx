
import Link from 'next/link';
import { FaTaxi, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-black">Aditya Tour & Travels</span> – your trusted partner for reliable and affordable taxi bookings. We make travel easy, safe, and convenient across your city.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              At <strong>Aditya Tour & Travels</strong>, our mission is to simplify urban and intercity transportation by connecting riders with professional drivers through our user-friendly platform. Whether it’s a quick trip across town or a long-distance journey, we make sure your travel experience is smooth and stress-free.
            </p>
            <p className="text-gray-600">
              We are committed to punctuality, safety, and affordability—because your time and comfort matter.
            </p>
          </div>
          <img
            src="/choose-s2.png" // Replace with your image
            alt="Taxi service"
            className="rounded-xl w-full h-auto"
          />
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Aditya Tour & Travels?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-yellow-500 text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-1">Safety First</h3>
              <p className="text-sm text-gray-600">All our drivers are verified and trained for safe travel.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FaThumbsUp className="text-yellow-500 text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-1">Reliable Service</h3>
              <p className="text-sm text-gray-600">On-time pickup and drop with real-time tracking.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition">
              <FaTaxi className="text-yellow-500 text-3xl mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-1">Affordable Rates</h3>
              <p className="text-sm text-gray-600">Transparent pricing with no hidden charges.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-yellow-500 text-black text-center py-10 px-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Ready to Book Your Ride?</h2>
          <p className="text-lg mb-4">Experience hassle-free taxi service with just a few clicks.</p>
          <Link
            href="/booknow"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
