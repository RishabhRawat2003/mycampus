import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${apiUrl}/api/v1/admin/admin-login`, { email, password });
      const token = response.data.token;
      localStorage.setItem('token', JSON.stringify(token));
      alert("Login successful!");
      navigate('/admin-dashboard')
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
