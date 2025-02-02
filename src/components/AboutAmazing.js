import React from 'react';
import { BLACKIMAGE, IMAGEINDIA } from '../utils/Constants';

const AboutAmazing = () => {
  return (
    <div className="mt-10 px-6 sm:px-10 bg-gray-100">
      <div className="text-4xl font-bold py-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-700 tracking-wide">About</h1>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-700 tracking-wide">Amazing India</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="h-[300px] sm:h-[400px] lg:h-[720px] w-full lg:w-[45%]">
          <img
            src={IMAGEINDIA}
            alt="Amazing India"
            className="h-full w-full object-cover shadow-lg"
          />
        </div>

        <div className="lg:w-[50%]">
          <p className="text-gray-600 text-xl sm:text-2xl font-normal leading-relaxed tracking-wider mb-5">
            India is a land of vibrant cultures, ancient traditions, and breathtaking landscapes. Known for its rich heritage and diversity, India offers a journey through history, spirituality, and natural beauty. From majestic mountains and serene beaches to bustling cities and peaceful villages, each corner of India tells a unique story. Explore India's world-famous landmarks, colorful festivals, delicious cuisine, and warm hospitality, as every experience here promises to leave a lasting impression.
            Embrace the spirit of discovery in Amazing India - a country where every journey becomes an unforgettable adventure.
          </p>
        </div>
      </div>
    </div>

  );
};

export default AboutAmazing;
