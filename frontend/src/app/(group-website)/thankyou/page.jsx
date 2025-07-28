'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to homepage after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f0fdf4] px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You for Booking!</h1>
        <p className="text-gray-700 text-lg">
          Your request has been received successfully.
        </p>
        <p className="mt-4 text-gray-600">
          Our team will contact you within <strong>24 hours</strong> on your provided phone number.
        </p>
        <p className="text-sm mt-6 text-gray-400">
          You will be redirected to the homepage shortly...
        </p>
      </div>
    </section>
  );
}
