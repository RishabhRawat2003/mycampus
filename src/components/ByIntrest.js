import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { oneNightTwoDayPackages } from "../utils/Constants";

const cleanedPackages = oneNightTwoDayPackages.map((item) => ({
  ...item,
  title: item.title.replace(/\(Starting @\d+\)/, "").trim(),
}));

const ByIntrest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === cleanedPackages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cleanedPackages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="px-5 md:px-10 py-3 pb-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide pt-2 lg:px-10 xl:px-20 xl:text-4xl">
        Best Selling Tours
      </h1>

      <div className="relative w-full lg:px-10 mx-auto mt-6 xl:px-20">
        <div className="relative h-[530px] md:h-[300px] xl:h-[450px] overflow-hidden rounded-xl bg-[#DBF3FA]">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute top-52 left-2 px-3.5 md:top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 z-10 transition-colors"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute top-52 right-2 px-3.5 md:top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 z-10 transition-colors"
          >
            →
          </button>

          {/* Slides Container */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cleanedPackages.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col md:flex-row-reverse"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover md:h-full md:w-1/2"
                />
                <div className="w-full flex flex-col p-3 md:w-1/2 lg:p-5 2xl:p-14 justify-between">
                  <div className="w-full flex flex-col">
                    <h1 className="text-lg font-semibold lg:text-xl xl:text-3xl">
                      {item.title}
                    </h1>
                    <h3 className="text-sm lg:text-base xl:text-xl xl:my-2">
                      <span className="font-semibold">Duration: </span>
                      {item.duration || "1 Night 2 Days"}
                    </h3>
                    <h3 className="font-semibold lg:text-lg xl:text-xl xl:font-bold">
                      Highlights
                    </h3>
                    <ul className="list-inside list-disc text-sm mt-2 lg:mt-4 xl:text-lg">
                      {item.bonus.slice(0, 2).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex items-center gap-6 mt-4">
                    <button className="bg-[#00A5CF] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8 text-white">
                      BOOK NOW
                    </button>
                    <Link
                      to="/itinery"
                      className="bg-[#E80909] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8 text-white"
                    >
                      VIEW ITINERARY
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bullet Indicators */}
        <div className="flex gap-2 mt-4 justify-center items-center xl:mt-6">
          {cleanedPackages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByIntrest;