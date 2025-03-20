import React from 'react';
import { useNavigate } from 'react-router-dom';
import { destinationsByRegion } from '../utils/Constants';

const BestDestination = () => {
    const navigate = useNavigate();

    const formatStateName = (name) => {
        const parts = name.split(", ");
        if (parts.length > 1) {
            return parts[1]
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        }
        return "";
    };
    
    const handleClick = (destination) => {
        const state = formatStateName(destination.name);
        navigate('/experientialprogramme', { state: { selectedState: state , fromBestDestination: true } });
    };

    return (
        <div className="py-5 md:p-10">
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-gray-700 text-center tracking-wide">
                    Discover the Best Destinations by Region
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 md:mt-6 lg:mt-10 lg:px-10 xl:px-20 2xl:px-40 2xl:gap-8 md:gap-4">
                    {destinationsByRegion.map((data, index) => (
                        <div 
                            key={index} 
                            className="relative w-full h-auto rounded-xl overflow-hidden shadow-md md:hover:shadow-xl duration-500 ease-in-out cursor-pointer"
                            onClick={() => handleClick(data)}
                        >
                            <div className='w-full h-40 flex lg:h-60'>
                                <img src={data.image} alt='destination' className='object-cover w-full h-full' />
                            </div>
                            <div className='p-3 w-full h-auto text-white bg-[#00A5CF] flex justify-center items-center lg:p-6 lg:text-lg lg:font-semibold'>
                                {data.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestDestination;
