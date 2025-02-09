import Logo from '../Images/Logo.png'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';
import { PiLockKey } from 'react-icons/pi';
import { CgProfile } from "react-icons/cg";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [terms, setTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate()

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      errors.name = "Full Name is required.";
    } else if (formData.fullName.length < 3) {
      errors.name = "Full Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    }
    else if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!terms) {
      errors.terms = "You must accept the Terms and Conditions.";
    }

    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return false;
    }
  
    return true;
  };

  // **Register Function**
  const registerUser = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${apiUrl}/api/v1/signup`, formData);
        // console.log(response);
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page after successful registration
      } catch (error) {
        console.error("Error while registering user", error);
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="h-auto flex flex-col sm:flex-row">
      <div className="w-full sm:w-full md:w-1/2 p-5 flex flex-col">
        <div>
          <div className="flex justify-between mt-1">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="w-24" />
            </Link>
            <Link to={"/"} className="text-primarycolor font-semibold">Go Back</Link>
          </div>
          <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-24">
            <h1 className="block font-semibold text-3xl text-center text-primarycolor">
              CREATE AN ACCOUNT
            </h1>
            <p className="mt-2 text-gray-500 text-center">
              Register to Access Your Personalized Health Dashboard.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md">
            <form>
              <div className="mb-5 relative">
                <label htmlFor="Name" className="block text-primarycolor">
                  FULL NAME
                </label>
                <div className='relative'>
                  <input
                    type="text"
                    id="Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter Your Full Name"
                    className="w-full mt-1 p-3 pl-10 border border-gray-500 rounded-lg bg-white"
                  />
                  <CgProfile className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-primarycolor" />
                </div>
              </div>

              <div className="mb-5 relative">
                <label htmlFor="Email" className="block text-primarycolor">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    type={passwordVisible ? 'text' : 'password'}
                    id="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter Your Password"
                    className="w-full p-3 pl-10 pr-10 border border-gray-500 rounded-lg"
                  />
                  <PiLockKey className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer" />
                  <IoMdEye
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer"
                  />
                </div>
              </div>

              <div className="mb-5 relative">
                <label htmlFor="ConfirmPassword" className="block text-primarycolor">
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    id="ConfirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm Your Password"
                    className="w-full p-3 pl-10 pr-10 border border-gray-500 rounded-lg"
                  />
                  <PiLockKey className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer" />
                  <IoMdEye
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-primarycolor cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center mb-5">
                <label className="flex items-center text-primarycolor font-semibold">
                  <input onChange={() => setTerms(!terms)} value={terms} type="checkbox" className="mr-2 text-primarycolor" />
                  I Accept the{' '}
                  <Link className="text-primarycolor underline">Terms and Conditions</Link>
                </label>
              </div>

              <button onClick={registerUser} disabled={!terms} className={`${!terms ? "bg-gray-400 cursor-not-allowed" : "bg-primarycolor text-white"} p-3 mt-5 rounded-lg w-full font-semibold`}>Create Account</button>
            </form>
          </div>
        </div>

        <div className="mt-auto text-center mb-28">
          <p className="text-gray-700">
            ALREADY HAVE AN ACCOUNT?{' '}
            <Link to={"/login"} className="text-primarycolor underline">LOGIN HERE</Link>
          </p>
        </div>
      </div>

      <div className="w-full sm:w-full md:w-1/2 relative h-auto">
        <img
          src="https://cdn.pixabay.com/photo/2022/09/07/18/34/ocean-7439351_640.jpg"
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;