'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { axiosApiInstance, notify } from '@/app/library/helper';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

export default function BookingTable() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await axiosApiInstance.get('/booknow/readall');
        if (res.data.flag === 1) {
          setBookings(res.data.bookings);
        } else {
          setError('Failed to fetch bookings.');
        }
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This booking will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosApiInstance.delete(`/booknow/delete/${id}`);
          notify(res.data.msg, res.data.flag);
          if (res.data.flag === 1) {
            setBookings((prev) => prev.filter((b) => b._id !== id));
          }
        } catch (err) {
          notify('Delete failed: ' + err.message, 0);
        }
      }
    });
  };

  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus = !currentStatus;

    try {
      const res = await axiosApiInstance.patch(`/booknow/status/${id}`, { status: newStatus });
      notify(res.data.msg, res.data.flag);
      if (res.data.flag === 1) {
        setBookings((prev) =>
          prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
        );
      }
    } catch (err) {
      notify('Status update failed: ' + err.message, 0);
    }
  };

  return (
    <div className="min-h-screen p-6 mt-28 sm:mt-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Booking List
        </h2>

        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        ) : error ? (
          <p className="text-red-600 dark:text-red-400">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No bookings found.</p>
        ) : (
          <div className="overflow-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Sr No</th>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">Pickup</th>
                  <th className="px-6 py-3 text-left">Drop-Off</th>
                  <th className="px-6 py-3 text-center">Passengers</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Time</th>
                  <th className="px-6 py-3 text-left">Message</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 dark:text-gray-300">
                {bookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className={`border-b transition cursor-pointer dark:hover:bg-gray-700 ${booking.status
                        ? 'bg-green-100 dark:bg-green-800'
                        : 'bg-white dark:bg-gray-800'
                      }`}
                  >
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.phoneNumber.trim()}</td>
                    <td className="px-6 py-4">{booking.pickupPoint}</td>
                    <td className="px-6 py-4">{booking.dropOffPoint}</td>
                    <td className="px-6 py-4 text-center">{booking.passengerCount}</td>
                    <td className="px-6 py-4">{booking.date}</td>
                    <td className="px-6 py-4">{booking.time}</td>
                    <td className="px-6 py-4">{booking.message}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span
                          onClick={() => handleStatusToggle(booking._id, booking.status)}
                          className={`inline-block cursor-pointer w-11 h-6 rounded-full relative ${booking.status ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition transform ${booking.status ? 'translate-x-full' : ''
                              }`}
                          />
                        </span>
                        {booking.status && (
                          <FaCheckCircle className="text-green-600" title="Confirmed" />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="text-red-600 cursor-pointer hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
