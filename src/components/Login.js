import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';
import { PiLockKey } from 'react-icons/pi';
import Logo from '../Images/Logo.png'

const Login = () => {

  return (
    <div className="h-screen flex flex-col sm:flex-row">
      <div className="w-full sm:w-full md:w-1/2 p-5 flex flex-col justify-start gap-3">
        <div>
          <div className="flex justify-between mt-1">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="w-24" />
            </Link>
            <Link to={"/"} className="text-primarycolor font-semibold">Go Back</Link>
          </div>
          <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-24">
            <h1 className="block font-semibold text-3xl text-center text-primarycolor">
              WELCOME BACK!
            </h1>
            <p className="mt-2 text-gray-500 text-center">
              Login To Access Your Personalized Health Dashboard.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md">
            <form>
              <div className="mb-5 relative">
                <label htmlFor="Email" className="block text-primarycolor">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full mt-1 p-3 pl-10 border border-gray-500 rounded-lg bg-white"
                  />
                  <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-primarycolor" />
                </div>
              </div>
              <div className="mb-5 relative">
                <label htmlFor="Password" className="block text-primarycolor">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full p-3 pl-10 pr-10 border border-gray-500 rounded-lg"
                  />
                  <PiLockKey className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer" />
                  <IoMdEye className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <label className="flex items-center text-primarycolor font-semibold">
                  <input type="checkbox" className="mr-2 text-primarycolor" />
                  Remember Me
                </label>
                <Link to={'/reset-password'} className="text-primarycolor font-semibold">
                  Forgot Password?
                </Link>
              </div>
              {/* Sign In Button */}
              <div className="flex justify-center">
                <button className="w-full p-3 bg-primarycolor text-white font-semibold text-lg rounded-lg hover:bg-primarycolor">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" text-center">
          <p className="text-gray-700">
            DOESN'T HAVE AN ACCOUNT?{' '}
            <Link to={"/register"} className="text-primarycolor underline">SIGNUP HERE</Link>
          </p>
        </div>
      </div>

      <div className="w-full sm:w-full md:w-1/2 relative">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/06/19/dubai-1050418_1280.jpg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;