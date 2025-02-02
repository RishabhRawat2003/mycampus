import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ChoseNewPassword = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <h1 className="text-2xl font-bold text-red-400 mt-10 mx-10">LOGO</h1>
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-8 space-y-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-600 text-center md:text-left">
            Choose new Password
          </h1>
         
          <div className="w-full mt-20">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              New password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2 mt-5">
              Confirm password <span className="text-red-600">*</span>
            </label>
            <input
              id="confirm password"
              type="password"
              placeholder="password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='flex gap-4 mt-5 flex-wrap'>
            <div className='flex items-center gap-1'>
            <h1 className='text-green-600 text-xl '><IoCheckmarkCircleSharp /></h1>
            <p className='text-green-600 text-lg font-medium'>one lowercase character</p>
            </div>
            <div className='flex items-center gap-1'>
            <h1 className='text-green-600 text-xl '><IoCheckmarkCircleSharp /></h1>
            <p className='text-green-600 text-lg font-medium'>one special character</p>
            </div>
            <div className='flex items-center gap-1'>
            <h1 className='text-green-600 text-xl '><IoCheckmarkCircleSharp /></h1>
            <p className='text-green-600 text-lg font-medium'>one uppercase character</p>
            </div>
            <div className='flex items-center gap-1'>
            <h1 className='text-green-600 text-xl '><IoCheckmarkCircleSharp /></h1>
            <p className='text-green-600 text-lg font-medium'>8 character minimum</p>
            </div>
            <div className='flex items-center gap-1'>
            <h1 className='text-green-600 text-xl '><IoCheckmarkCircleSharp /></h1>
            <p className='text-green-600 text-lg font-medium'>one number</p>
            </div>
          </div>
          
          <button className="w-full mt-8 bg-primarycolor text-white py-3 text-lg rounded-lg font-semibold">
            Reset Password
          </button>
          <div className="flex items-center mt-5 justify-center md:justify-start">
            <h1 className="text-gray-600 text-4xl">
              <IoIosArrowRoundBack />
            </h1>
            <Link to="/login" className="text-gray-700 hover:underline text-lg ml-2">
              Back to login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className=" px-6 py-8 space-y-6 w-full md:w-1/2">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/06/19/dubai-1050418_1280.jpg"
          alt="Reset Password"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ChoseNewPassword;
