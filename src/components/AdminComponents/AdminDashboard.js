import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBlog, FaBoxOpen, FaSignOutAlt } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role !== 'admin') {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6 relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <FaSignOutAlt />
        Logout
      </button>

      <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div
          className="p-6 bg-white shadow-xl rounded-lg text-center cursor-pointer hover:bg-blue-100 transition duration-300 flex flex-col items-center"
          onClick={() => navigate('/admin-dashboard/admin-blogs')}
        >
          <FaBlog className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold">Manage Blogs</h2>
          <p className="text-gray-600 mt-2">Create, Edit, and Delete Blogs</p>
        </div>
        <div
          className="p-6 bg-white shadow-xl rounded-lg text-center cursor-pointer hover:bg-blue-100 transition duration-300 flex flex-col items-center"
          onClick={() => navigate('/admin-dashboard/admin-packages')}
        >
          <FaBoxOpen className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold">Manage Packages</h2>
          <p className="text-gray-600 mt-2">Create, Edit, and Delete Packages</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;