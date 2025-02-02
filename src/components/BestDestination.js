import React from 'react'
import { BLACKIMAGE, DESTINAITONIMAGE, DESTINATIONREGION, destinationsByRegion, indiaRegions } from '../utils/Constants'
import { Link } from 'react-router-dom'

const BestDestination = () => {
    return (
        <div className="py-5 md:p-10 ">
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-gray-700 text-center tracking-wide ">
                    Discover the Best Destinations by Region
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 md:mt-6 lg:mt-10 lg:px-10 xl:px-20 2xl:px-40 2xl:gap-8 md:gap-4">
                    {destinationsByRegion && destinationsByRegion?.map((data, index) => (

                        <div key={index} className="relative w-full h-auto rounded-xl overflow-hidden shadow-md md:hover:shadow-xl duration-500 ease-in-out">
                            <div className='w-full h-40 flex lg:h-60'>
                                <img src={data?.image} alt='destination image' className='object-cover w-full h-full' />
                            </div>
                            <div className='p-3 w-full h-auto text-white bg-[#00A5CF] flex justify-center items-center lg:p-6 lg:text-lg lg:font-semibold'>
                                {data?.name}
                            </div>
                            {/* <img
                                        className="w-full h-36 md:h-[240px] object-cover"
                                        src={data?.image}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 p-2 md:p-3 top-20 md:top-36">
                                        <h1 className="text-white text-sm md:text-md font-bold w-24 md:w-40">
                                            {data?.name}
                                        </h1>
                                    </div> */}
                        </div>

                    ))}

                </div>

            </div>
        </div>

    )
}

export default BestDestination
