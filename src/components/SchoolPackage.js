import React, { useState } from 'react'
import { BLACKIMAGE, CORPORATE_CULTURE_IMAGE, CORPORATEIMAGE, DESTINAITONIMAGE, DESTINATIONREGION, destinations, destinationsByRegion, indiaRegions } from '../utils/Constants'
import ChooseUs from './ChooseUs';
import CorparateImageContent from './CorparateImageContent';
import SchoolImageContent from './SchoolImageContent';
import { Link, Links } from 'react-router-dom';
import School from '../Images/school.png'
import { byIntrest } from '../utils/Constants';

const SchoolPackage = () => {
  const regions = ["All", ...new Set(byIntrest.map((item) => item.region))];

  // State to store the selected filter
  const [selectedRegion, setSelectedRegion] = useState("All");

  // Filtered data based on selected region
  const filteredPackages = selectedRegion === "All"
    ? byIntrest
    : byIntrest.filter((item) => item.region === selectedRegion);

  return (
    <>
      <div className="relative">
        <div className="absolute left-0  bottom-[10px] sm:bottom-[10px] md:bottom-[180px] z-20 text-white">
          <div>
            <SchoolImageContent />

          </div>
        </div>
      </div>
      <div className="p-5 md:p-10 w-full h-auto flex md:px-10 lg:px-20 xl:px-32 lg:my-8">
        <div className='w-full h-[500px] flex flex-col gap-6 sm:flex-row sm:h-[300px] md:h-[400px]'>
          <div className='w-full h-auto text-[#49545A] flex flex-col gap-5'>
            <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>School Programs</h1>
            <p className='font-semibold sm:text-xl md:text-2xl'>Our excursions are thoughtfully designed to complement school curricula, adding real-world relevance to classroom instruction. Learning becomes memorable and engaging when students see the topics they study come to life.</p>
          </div>
          <div className='w-full h-auto rounded-xl overflow-hidden'>
            <img src={School} alt="school" className='w-full h-full object-cover' />
          </div>
        </div>

      </div>
      <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20'>
        <h1 className='text-[#49545A] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Showing {filteredPackages.length} of {byIntrest.length} results
        </h1>

        {/* Dynamic Filters */}
        <div className='w-full h-auto flex flex-wrap gap-4 my-5'>
          {regions.map((region, index) => (
            <button
              key={index}
              onClick={() => setSelectedRegion(region)}
              className={`border-[1px] border-[#00A5CF] p-2 px-4 rounded-xl 
              ${selectedRegion === region ? 'bg-[#00A5CF] text-white' : 'bg-white'}`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Filtered Packages */}
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6'>
          {filteredPackages.map((item, index) => (
            <div key={index} className='w-full h-auto flex flex-col justify-between border-2 rounded-xl shadow-lg md:hover:shadow-2xl pb-4 duration-300 ease-in-out'>
              <div className="w-full h-auto flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-t-lg xl:h-80"
                />
                <div className='w-full h-auto flex flex-col p-3 lg:p-5'>
                  <h1 className="text-lg font-semibold lg:text-xl">{item.name}</h1>
                  <h3 className="text-sm lg:text-base xl:my-2">
                    <span className="font-semibold">Duration: </span>{item.duration}
                  </h3>
                  <h3 className="font-semibold lg:text-lg xl:font-bold">Highlights</h3>
                  <ul className="list-inside list-disc text-sm mt-2 lg:mt-4">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <h3 className="text-sm my-3 font-semibold lg:text-lg xl:my-4">
                    <span className="font-bold">Price: </span>Starting at <span className="text-red-500">{item.price}</span> per Student
                  </h3>
                </div>
              </div>
              <div className="w-full h-auto flex items-center gap-6 px-5">
                <button className="bg-[#00A5CF] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8">BOOK NOW</button>
                <Link to='/itinery' className="bg-[#E80909] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8">VIEW ITINERARY</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* coose us */}
      {/* <ChooseUs /> */}
    </>
  )
}

export default SchoolPackage