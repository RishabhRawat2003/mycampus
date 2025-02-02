import React, { useState } from 'react';
import { ABOUTIMAGE, CHOOSEUSIMAGE, dummyData } from '../utils/Constants';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ChooseUs = () => {

  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleItems = 3;

  const handleNext = () => {
    if (scrollIndex + visibleItems < dummyData.length) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const totalSteps = dummyData.length - visibleItems + 1;
  const progressPercentage = ((scrollIndex + 1) / totalSteps) * 100;

  return (
    <>
      <div className="w-full bg-cover bg-center text-white  overflow-x-hidden">
        <div
          className="w-full min-h-[700px] sm:min-h-[500px] lg:min-h-[600px] bg-cover bg-center text-white flex flex-col items-center py-10 mt-16"
          style={{
            backgroundImage: `url(${ABOUTIMAGE})`,
          }}
        >
          <h1 className="text-4xl font-bold mb-10">Why Choose Us ?</h1>

          <div className="relative w-full">


            <div className="flex w-full gap-8 flex-wrap justify-center overflow-x-auto">
              {dummyData.slice(scrollIndex, scrollIndex + visibleItems).map((item, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-30 rounded-lg shadow-lg overflow-hidden p-5"
                  style={{
                    maxWidth: '350px',
                    width: '100%',
                    height: 'auto',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-4"
                  />
                  <div className="px-7">
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-sm font-semibold">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="items-center z-10 mt-8 flex gap-3 justify-center sm:flex-col sm:gap-4 sm:w-[900%] md:flex-row md:gap-6 md:w-[80%] lg:gap-8 w-[90%] lg:w-full">
            <button
              className="text-black bg-white bg-opacity-50 p-3 rounded-full"
              onClick={handlePrev}
            >
              <FaArrowLeftLong />
            </button>
            <div className="relative w-full max-w-xs sm:w-60 md:w-72 ">
              <div className="h-1 bg-gray-300 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-primarycolor rounded-lg transition-all"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            <button
              className="text-black bg-white bg-opacity-50 p-3 rounded-full"
              onClick={handleNext}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

    </>



  );
};

export default ChooseUs;
