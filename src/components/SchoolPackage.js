import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { oneNightTwoDayPackages, twoNightThreeDayPackages, oneDayItinerary } from '../utils/Constants';
import SchoolImageContent from './SchoolImageContent';
import School from '../Images/school.png';

const SchoolPackage = () => {
  // Combine all packages into one array
  const allPackages = [
    ...oneDayItinerary.map(item => ({
      ...item,
      type: 'One Day Itinerary',
    })),
    ...oneNightTwoDayPackages.map(item => ({
      ...item,
      type: 'One Night Two Days Package',
    })),
    ...twoNightThreeDayPackages.map(item => ({
      ...item,
      type: 'Two Night Three Days Package',
    })),
  ];

  // Filter options
  const filterCategories = {
    duration: ['One Day Itinerary', 'One Night Two Days Package', 'Two Night Three Days Package'],
    state: ['Uttarakhand', 'Rajasthan', 'Delhi', 'Himachal Pradesh', 'Uttar Pradesh']
  };

  // State for filters
  const [filters, setFilters] = useState({
    duration: [],
    state: []
  });

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  // Filtered packages
  const filteredPackages = allPackages.filter(pkg =>
    (filters.duration.length === 0 || filters.duration.includes(pkg.type)) &&
    (filters.state.length === 0 || filters.state.includes(pkg.state))
  );

  // Random image generator
  const getRandomImage = () => `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute left-0 bottom-[10px] sm:bottom-[10px] md:bottom-[180px] z-20 text-white">
          <div>
            <SchoolImageContent />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="p-5 md:p-10 w-full h-auto flex md:px-10 lg:px-20 xl:px-32 lg:my-8">
        <div className='w-full h-[500px] flex flex-col gap-6 sm:flex-row sm:h-[300px] md:h-[400px]'>
          <div className='w-full h-auto text-[#49545A] flex flex-col gap-5'>
            <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Experiential Programme</h1>
            <p className='font-semibold sm:text-xl md:text-2xl'>
              Our excursions are thoughtfully designed to complement school curricula, adding real-world relevance to classroom instruction. Learning becomes memorable and engaging when students see the topics they study come to life.
            </p>
          </div>
          <div className='w-full h-auto rounded-xl overflow-hidden'>
            <img src={School} alt="school" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Duration Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Filter by Duration</h3>
            <div className="space-y-3">
              {filterCategories.duration.map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.duration.includes(option)}
                    onChange={() => handleFilterChange('duration', option)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* State Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Filter by State</h3>
            <div className="space-y-3">
              {filterCategories.state.map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.state.includes(option)}
                    onChange={() => handleFilterChange('state', option)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Package Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={getRandomImage()}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {pkg.type}
                    </span>
                    <span className="text-sm text-gray-500">{pkg.state}</span>
                  </div>
                  {
                    pkg.title.includes('One-Day')
                      ? <h3 className="text-xl font-semibold mb-2 text-gray-800">{pkg.subtitle[0]}</h3>
                      : <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {pkg.heading || pkg.title.split(" (Starting @")[0]}
                      </h3>
                  }
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                    <Link
                      to="/itinerary"
                      className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolPackage;