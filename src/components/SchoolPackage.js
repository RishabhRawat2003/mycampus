import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SchoolImageContent from './SchoolImageContent';
import School from '../Images/school.png';
import { useLocation } from 'react-router-dom';


const SchoolPackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const initialSelectedState = location.state?.selectedState || '';
  const fromBestDestination = location.state?.fromBestDestination || false; // Detect navigation from "Best Destination"
  const [filters, setFilters] = useState({
    duration: [],
    state: initialSelectedState ? [initialSelectedState] : [],
    theme: []
  });

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

  // Get unique filter options from packages
  const getFilterOptions = (key) => {
    const uniqueValues = [...new Set(packages.map(pkg => pkg[key]).filter(Boolean))];
    return uniqueValues.sort();
  };

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

   // Scroll to "filterpackage" section when coming from "Best Destination"
   useEffect(() => {
    if (fromBestDestination) {
      setTimeout(() => {
        const filterSection = document.getElementById('filterpackage');
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Delay ensures smooth scrolling after page load
    }
    else{
      window.scrollTo(0, 0);
    }
  }, [fromBestDestination]);

  // Filter packages based on selected filters
  // Filter packages based on selected filters
  const filteredPackages = packages.filter(pkg => {
    const durationMatch = filters.duration.length === 0 || filters.duration.includes(pkg.duration);
    const stateMatch = filters.state.length === 0 || filters.state.includes(pkg.state) || !pkg.state; // Include all if no state is selected
    const themeMatch = filters.theme.length === 0 || filters.theme.includes(pkg.theme);
    return durationMatch && stateMatch && themeMatch;
  });

  if (loading) return <div className="text-center py-8">Loading packages...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

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
            <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Experiential Programmes</h1>
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
      <div id='filterpackage' className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Duration Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Filter by Duration</h3>
            <div className="space-y-3">
              {getFilterOptions('duration').map(option => (
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
              {getFilterOptions('state').map(option => (
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

          {/* Theme Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Filter by Theme</h3>
            <div className="space-y-3">
              {getFilterOptions('theme').map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.theme.includes(option)}
                    onChange={() => handleFilterChange('theme', option)}
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
              <Link to={`/single-package/${pkg._id}`} key={pkg._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {pkg.images?.[0] && (
                  <img
                    src={pkg.images[0]}
                    alt={pkg.packageName}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {pkg.duration}
                    </span>
                    <div className="space-x-2">
                      <span className="text-sm text-gray-500">{pkg.state}</span>
                      {pkg.theme && <span className="text-sm text-gray-500">• {pkg.theme}</span>}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {pkg.packageName}
                  </h3>
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                    <Link
                      to={`/itinerary/${pkg._id}`}
                      className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolPackage;