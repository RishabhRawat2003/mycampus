import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ByIntrest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/package/get-packages`);
      setPackages(response.data.packages);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch packages');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === packages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? packages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (packages.length > 0) {
      const slideInterval = setInterval(goToNext, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, packages]);

  if (loading) return <div className="text-center py-8">Loading packages...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="px-5 md:px-10 py-3 pb-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide pt-2 lg:px-10 xl:px-20 xl:text-4xl">
        Best Selling Tours
      </h1>

      <div className="relative w-full lg:px-10 mx-auto mt-6 xl:px-20">
        <div className="relative h-auto pb-4 md:pb-0 md:h-[300px] xl:h-[450px] overflow-hidden rounded-xl bg-[#DBF3FA]">
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
            className="flex h-auto md:h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {packages.slice(0,8).map((pkg, index) => (
              <div
                key={pkg._id}
                className="w-full flex-shrink-0 flex flex-col md:flex-row-reverse"
              >
                <img
                  src={pkg.images?.[0]}
                  alt={pkg.packageName}
                  className="w-full h-56 object-cover md:h-full md:w-1/2"
                />
                <div className="w-full flex flex-col p-3 md:w-1/2 lg:p-5 2xl:p-14 justify-between">
                  <div className="w-full flex flex-col">
                    <h1 className="text-lg font-semibold lg:text-xl xl:text-3xl">
                      {pkg.packageName}
                    </h1>
                    <h3 className="text-sm lg:text-base xl:text-xl xl:my-2">
                      <span className="font-semibold">Duration: </span>
                      {pkg.duration}
                    </h3>
                    <h3 className="font-semibold lg:text-lg xl:text-xl xl:font-bold">
                      Highlights
                    </h3>
                    <ul className="list-inside list-disc text-sm mt-2 lg:mt-4 xl:text-lg">
                      {pkg.bonusActivities?.slice(0, 4).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex items-center gap-6 mt-4">
                    <Link
                      to={`/single-package/${pkg._id}`}
                      className="bg-[#00A5CF] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8 text-white"
                    >
                      BOOK NOW
                    </Link>
                    <Link
                      to={`/single-package/${pkg._id}`}
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
          {packages.slice(0,8).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByIntrest;