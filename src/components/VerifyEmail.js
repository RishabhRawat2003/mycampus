import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";

const VerifyEmail = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <h1 className="text-2xl font-bold text-red-400 mt-10 mx-16">LOGO</h1>
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-8 space-y-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-700 text-center md:text-left">
            Verify email
          </h1>
          <p className='text-lg mt-3 text-gray-400'>A verification code has been sent to you. Enter the code below</p>

          <div className='flex gap-8 mt-5'>
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />
            <input type="text" name="" id="" className='w-12 h-12 bg-gray-700 text-white text-center rounded-lg ' placeholder='_' />

          </div>


          <button className="w-full mt-8 bg-primarycolor text-white py-3 text-lg rounded-lg font-semibold">
            Verify email
          </button>


          <div className='flex justify-between items-center mt-7'>
            <div className='flex items-center gap-1'>
              <h1 className="text-gray-600 text-4xl">
                <IoIosArrowRoundBack />
              </h1>
              <Link to="/login" className="text-gray-700 hover:underline text-lg ml-2">
                Back to login
              </Link>
            </div>
            <div className='flex gap-3 items-center'>
              <h1 className='text-2xl text-primarycolor font-bold'><BsArrowRepeat /></h1>
              <p className='text-lg text-primarycolor font-semibold'>Resend it</p>
            </div>
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

export default VerifyEmail;
