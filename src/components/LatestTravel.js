import React, { useState, useEffect } from "react";
import { travelStories } from "../utils/Constants";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const LatestTravel = () => {

  return (
    <div className="px-6 sm:px-10 relative">
      <div className="py-5">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center text-[#49545A] tracking-wide">
          Our Latest Blogs
        </h1>
      </div>

      {/* Responsive Card Layout */}
      <div className="relative w-full xl:px-20 2xl:px-28 mt-5 mx-auto overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 justify-center gap-4">
          {travelStories
            .slice(0, 3) // Show up to 3 items dynamically
            .map((story, index) => (
              <div
                key={index}
                className="w-full rounded-xl overflow-hidden bg-[#43BDDE]"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <div className="mt-4 p-3">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-800">{story.date}</p>
                  <p className="text-gray-800 mt-2">{story.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTravel;
