import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ResetComplete = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <h1 className="text-2xl font-bold text-red-400 mt-10 mx-10">LOGO</h1>
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-8 space-y-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-700 text-center md:text-left">
            Reset complete!
          </h1>
          <p className='text-lg mt-3 text-gray-400'>All donel! We have sent an email to m***********@gmail.com to confirm</p>
         
          
          
          <button className="w-full mt-8 bg-primarycolor  py-3 text-lg rounded-lg font-semibold">
            Reseturn to login
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

export default ResetComplete;
