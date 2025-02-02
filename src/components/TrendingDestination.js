import React from 'react';
import { BLACKIMAGE, destinations } from '../utils/Constants';

const TrendingDestination = () => {

  return (
    <div className="px-5 md:px-10 py-3">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide mb-5 text-center md:text-left">
        Top Trending Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-5 xl:gap-6 justify-center">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:w-[240px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t flex flex-col justify-end text-white p-4">
              <h2 className="text-md font-semibold mb-1">{destination.name}</h2>
              <p className="text-sm">{destination.packages}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestination;
