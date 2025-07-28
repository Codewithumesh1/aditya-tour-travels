'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { setAdmin, removeAdmin } from '../redux/features/adminSlice';

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const admin = useSelector((state) => state.admin);
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    if (!admin?.data) {
      const lsadmin = localStorage.getItem('admin');
      const token = localStorage.getItem('admin_token');
      const loginAt = localStorage.getItem('loginAt');

      if (lsadmin && token) {
        dispatch(
          setAdmin({
            admin: JSON.parse(lsadmin),
            token,
            loginAt,
          })
        );
      }

      if (loginAt) {
        const date = new Date(loginAt);
        setFormattedTime(date.toLocaleString());
      }
    }
  }, [dispatch, admin]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('admin');
    localStorage.removeItem('admin_token');
    localStorage.removeItem('loginAt');
    dispatch(removeAdmin());
    router.push('/admin-login');
  };

  return (
    <header className="bg-[#1e293b] dark:bg-[#0f172a] fixed top-0 z-50 w-full px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg border-b border-gray-700">
      {/* Title */}
      <div className="text-xl md:text-2xl font-semibold text-white tracking-wide">
        🚐 Aditya Tour & Travels
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center cursor-pointer gap-2 text-sm px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition duration-200"
        >
          <FaSignOutAlt />
          <span>Log Out</span>
        </button>

        {/* Admin Info */}
        <div className="flex items-center gap-3 bg-gray-800 dark:bg-gray-900 px-3 py-2 rounded-md shadow-sm">
          <FaUserCircle className="text-2xl text-gray-400" />
          <div className="flex flex-col text-sm leading-tight">
            <span className="font-medium text-white">
              Hi, {admin?.data?.name || 'Admin'}
            </span>
            <span className="text-xs text-gray-400">{formattedTime || '—'}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
