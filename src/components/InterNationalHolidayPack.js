import React from 'react'
import { International } from '../utils/Constants'

const InterNationalHolidayPack = () => {
    return (
        <div className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5">

            <h1 className='text-3xl font-bold text-gray-700 tracking-wide mb-5'>International Holiday Package</h1>
            <div className="flex flex-wrap justify-center sm:justify-between gap-5">
                {International.map((destination, index) => (
                    <div
                        key={index}
                        className="relative w-[240px] h-[220px] overflow-hidden rounded-lg shadow-lg sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[220px]"
                    >
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end text-white p-4">
                            <h2 className="text-md font-semibold mb-1">{destination.name}</h2>
                            <p className="text-sm">{destination.packages}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default InterNationalHolidayPack
