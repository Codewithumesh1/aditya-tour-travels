'use client';

import { axiosApiInstance, notify } from '@/app/library/helper';
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCar,
  FaCalendarAlt,
  FaClock,
  FaEdit,
} from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingSection() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleMessageChange = (e) => {
    const input = e.target.value;
    const wordCount = input.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount <= 10) {
      setMessage(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const data = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      pickupPoint: e.target.pickupPoint.value,
      dropOffPoint: e.target.dropOffPoint.value,
      passengerCount: e.target.passengerCount.value,
      date: e.target.date.value,
      time: e.target.time.value,
      message,
    };

    try {
      const res = await axiosApiInstance.post('/booknow', data);
      notify(res.data.msg, res.data.flag);

      if (res.data.flag === 1) {
        e.target.reset(); // Reset form
        setMessage('');
        router.push('/thankyou');
      } else {
        setError(res.data.msg || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <section className="bg-[#fbf8f1] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/50 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Book Your Ride Today!</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Fill in the details below to schedule your ride. We’ll get in touch to confirm the booking.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full py-2 outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="w-full py-2 outline-none"
            />
          </div>

          {/* Pickup Point */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              name="pickupPoint"
              placeholder="Pick Up Point"
              required
              className="w-full py-2 outline-none"
            />
          </div>

          {/* Drop Off Point */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              name="dropOffPoint"
              placeholder="Drop Off Point"
              required
              className="w-full py-2 outline-none"
            />
          </div>

          {/* Passenger Count */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaCar className="text-gray-400 mr-2" />
            <select
              name="passengerCount"
              required
              className="w-full py-2 outline-none bg-transparent text-gray-700"
            >
              <option value="">Passenger</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              name="date"
              required
              className="w-full py-2 outline-none text-gray-700"
            />
          </div>

          {/* Time */}
          <div className="flex items-center bg-white border rounded-md px-3">
            <FaClock className="text-gray-400 mr-2" />
            <input
              type="time"
              name="time"
              required
              className="w-full py-2 outline-none text-gray-700"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col bg-white border rounded-md px-3 md:col-span-2">
            <div className="flex items-start">
              <FaEdit className="text-gray-400 mt-3 mr-2" />
              <textarea
                name="message"
                placeholder="Your Message (Max 6 words)..."
                rows="4"
                value={message}
                onChange={handleMessageChange}
                className="w-full py-2 outline-none resize-none"
              ></textarea>
            </div>
            <div className="text-sm text-right text-gray-500 pr-2">
              {message.trim().split(/\s+/).filter(Boolean).length}/6 words
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="md:col-span-2 text-red-600 text-sm text-center">{error}</div>
          )}

          {/* Submit Button */}
          <div className="text-center md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-[#fcb900] hover:bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md shadow transition inline-flex items-center gap-2"
            >
              Book Now <span className="text-xl">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
