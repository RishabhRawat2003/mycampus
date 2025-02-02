import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const data = [
    {
      stats: '10000+',
      title: 'Students Travelled'
    },
    {
      stats: '100+',
      title: 'Partner Institutions'
    },
    {
      stats: '12+',
      title: 'Years of Experience'
    },
    {
      stats: '1220+',
      title: 'Happy teachers'
    }
  ]

  return (
    <div className="bg-slate-800 w-full flex flex-col items-center justify-center py-10 relative bottom-0 left-0 mt-80">
      <div className="bg-[#DBF3FA] w-[90%] sm:w-[80%] 2xl:p-20 -mt-[60%] sm:-mt-[20%] lg:-mt-[15%] border-[1px] border-gray-500 h-auto relative shadow-xl rounded-2xl py-10 px-5 sm:px-10">

        <div className="flex flex-wrap justify-around items-center gap-4">
          {
            data.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 justify-center">
                <h1 className="text-3xl font-bold 2xl:text-4xl">{item.stats}</h1>
                <p className="text-sm text-gray-800 font-semibold md:text-base 2xl:text-xl">{item.title}</p>
              </div>
            ))
          }
        </div>

        <h1 className="text-center text-xl font-bold my-6 sm:text-2xl md:text-3xl 2xl:text-5xl 2xl:my-8">Get your curated program today!</h1>

        <div className="w-full h-auto flex justify-center items-center">
          <buttons className="px-14 py-3 bg-[#00A5CF] text-white rounded-lg font-semibold">
            Book Your Trip
          </buttons>
        </div>

      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-20 xl:gap-40 2xl:gap-60 mt-10 text-white">
        {/* Explore Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Explore</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Home</li>
            <li>Destination</li>
            <li>Tours</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>About Us</li>
            <li>We Are Hiring</li>
            <li>TMI Reviews</li>
            <li>Contact Us</li>
            <li>Tour My India Blog</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="w-[75%] py-8 border-b-2">
        <div className="flex justify-center space-x-6 items-center mb-6">
          <FaFacebookF className="text-white text-2xl sm:text-3xl cursor-pointer hover:text-gray-300" />
          <FaInstagram className="text-white text-2xl sm:text-3xl cursor-pointer hover:text-gray-300" />
          <FaTwitter className="text-white text-2xl sm:text-3xl cursor-pointer hover:text-gray-300" />
          <FaLinkedinIn className="text-white text-2xl sm:text-3xl cursor-pointer hover:text-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-white text-center sm:text-left space-y-4 sm:space-y-0">
          <h2>Email: info@example.com</h2>
          <h2>Phone: +1 234 567 890</h2>
          <h2>Address: 123 Main St, City, Country</h2>
        </div>
      </div>
      <p className="text-white text-center text-sm sm:text-base mt-3 px-4 sm:px-0">
        © 2024 Your Website Name. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
