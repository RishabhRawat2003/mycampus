import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const ResetPassword = () => {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col gap-32 items-center w-full md:w-1/2 px-6 py-8 space-y-6">
          <div>
          </div>
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-600 text-center md:text-left">
              Reset Your Password
            </h1>
            <p className="text-gray-400 mt-2 text-center md:text-left">
              Have no fear! We will send you instructions to reset your password.
              If you don’t have access to your email, we can assist with account recovery.
            </p>
            <div className="w-full mt-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="myemailexample@gmail.com"
                className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full mt-8 bg-primarycolor text-black py-2 rounded-lg font-semibold">
              Reset Password
            </button>
            <div className="flex items-center mt-5 justify-center md:justify-start">
              <h1 className="text-gray-600 text-4xl">
                <IoIosArrowRoundBack />
              </h1>
              <Link to="/login" className="text-gray-600 hover:underline text-lg ml-2">
                Back to login
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" space-y-6 w-full md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2015/11/19/06/19/dubai-1050418_1280.jpg"
            alt="Reset Password"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>

  );
};

export default ResetPassword;
